First of we need to clarify the babycrack.js
Renaming variables and functions, cutting useless parts, etc...

Once this is done we can start searching for the input.
We alreadfy know that the input should look like "hctf{XXXXXXXXXX}"

We can see that the script cuts the input into words

```js
var words_from_input = user_input["split"]('_');
```

After a quick search we can see that there's 5 words in the flag.
FLAG: hctf{XXX_XXX_XXX_XXX_XXX}

The first verification concern the first word.
At this point we still miss the length of the first word to reverse it.

Next we have the third word:

```js
e = str_to_hex(b2c(words_from_input[2])["split"]('=')[0]) ^ 0x53a3f32;
if (e != 0x4b7c0a73)
    return false;
f = str_to_hex(b2c(words_from_input[3])["split"]('=')[0]) ^ e;
if (f != 0x4315332)
    return false;
```

We can get the output of the two str_to_hex() functions by reversing the xor
and then get their input.

```js
nb1 = 0x53a3f32 ^ 0x4b7c0a73; // 0x4e463541
nb2 = 0x4b7c0a73 ^ 0x4315332; // 0x4f4d5941

/*
** 4E = N	4F = O
** 46 = F	4D = M
** 35 = 5	59 = Y
** 41 = A	41 = A
*/
```

Here we have our two inputs.
We can see that they were split on the '=' char.
That means b2c output was something like: NF5A=XXXX and OMYA=XXXX

The first thing we notice in the b2c function is a big for

```js
for (i = 0; i < str_len_div_by_5; i++)
{
    char_tab["push"](alpha_num["charAt"](str["charCodeAt"](i * 5) >> 3));
    char_tab["push"](alpha_num["charAt"]((str["charCodeAt"](i * 5) & 7) << 2 | str["charCodeAt"](i * 5 + 1) >> 6));
    char_tab["push"](alpha_num["charAt"]((str["charCodeAt"](i * 5 + 1) & 63) >> 1));
    char_tab["push"](alpha_num["charAt"]((str["charCodeAt"](i * 5 + 1) & 1) << 4 | str["charCodeAt"](i * 5 + 2) >> 4));
    char_tab["push"](alpha_num["charAt"]((str["charCodeAt"](i * 5 + 2) & 15) << 1 | str["charCodeAt"](i * 5 + 3) >> 7));
    char_tab["push"](alpha_num["charAt"]((str["charCodeAt"](i * 5 + 3) & 127) >> 2));
    char_tab["push"](alpha_num["charAt"]((str["charCodeAt"](i * 5 + 3) & 3) << 3 | str["charCodeAt"](i * 5 + 4) >> 5));
    char_tab["push"](alpha_num["charAt"](str["charCodeAt"](i * 5 + 4) & 31));
}
```

Every turn, the output string is filled with 8 more chars.
After that the output is cut and filled again with '=' depending on the length of the input.

```js
for (i = 0; i < modifier_cpt; i++)
    char_tab['pop']();
for (i = 0; i < modifier_cpt; i++)
    char_tab["push"]('=');
```

We need 4 chars followed by an '='.
The function can cut 6 chars at most.
So if we enter the for more than once, we get 16 chars and it's already too much.
Wich means we need an input of length 5 or less.
knowing that we'll need to cut 4 chars, we just get the length corresponding
to the right modifier_cpt.

```js
if (str_len_mod_5 == 1)
    modifier_cpt = 6;
else if (str_len_mod_5 == 2)
    modifier_cpt = 4;
else if (str_len_mod_5 == 3)
    modifier_cpt = 3;
else if (str_len_mod_5 == 4)
    modifier_cpt = 1;
```

So our two inputs were both of length 2.
From there we can either try to reverse the calculations made in the big for or,
knowing that the number of possible combinations is pretty low, make a script to
get the input for us.

```python
def reverse_b2c(b2c_out):
    for str in itertools.product(string.ascii_letters + string.digits, repeat=2):
        str = "".join(str)
        out = subprocess.check_output(["node", "b2c.js", str]).decode("utf-8")
        print(str, out)
        if (out.startswith(b2c_out)):
            print("Input was:", str)
            break
```

Done.
We get the third and the fourth word.
FLAG: hctf{XXX_XXX_iz_s0_XXX}

The next one is the second word

```js
h = function(word2_part1, mult_acii_by_len_word1)
{
    var nb_to_ret = '';
    for (var i = 0; i < word2_part1["length"]; i++)
        nb_to_ret += mult_acii_by_len_word1(word2_part1[i]);
    return nb_to_ret;
};
j = words_from_input[1]["split"]('3');
if (j[0]["length"] != j[1]["length"] || (str_to_hex(j[0]) ^ str_to_hex(j[1])) != 0x1613)
    return false;
k = word2_part1 => word2_part1["charCodeAt"]() * words_from_input[1]["length"];
l = h(j[0], k);
if (l != 0x2f9b5072)
    return false;
```

It is split into two parts on the '3' char.
Their length should be the same, wich means the length of the word is odd.
FLAG: hctf{XXX_XX3XX_iz_s0_XXX}

We have the value of l which is supposed to be 798707826.
Looking at the h function we can see it add to its output the ascii value
of every char of the input multiplied by the length of the second word.
Knowing that we want printable chars, their ascii value should be comprised
between 32 and 126.
We can try to decompose the l value:
We get 79 87 0 7 82 6 or 798 707 826.
The second one is much more plausible.
So our length is obviously 7 and the first part of the word is
798 / 7 = 114 // r
707 / 7 = 101 // e
826 / 7 = 118 // v
FLAG: hctf{XXX_rev3XXX_iz_s0_XXX}

With the first part and the xor value 0x1613, we can get the second part.

```js
nb = 0x1613 ^ str_to_hex("rev"); // 0x727365

/*
** 72 = r
** 73 = s
** 65 = e
*/
```

We're done with the second word.
FLAG: hctf{XXX_rev3rse_iz_s0_XXX}

Moving on to the fifth one.
Hints were given during the CTF:
flag.substr(-5,3) == "333" and flag.substr(-8,1) == "3".
And the value of the fifth char, '2', is given in one of the condition.
FLAG: hctf{XXX_rev3rse_iz_s0_X3XX2333X}

The we can try to get the first 4 chars of the last word.

```js
m = str_to_hex(words_from_input[4]["substr"](0, 4)) - 0x48a05362 == n % l;

// str_to_hex(words_from_input[4]["substr"](0, 4)) == (n % l) + 0x48a05362
// str_to_hex(words_from_input[4]["substr"](0, 4)) == ((f * e * words_from_input[0]["length"]) % 0x2f9b5072) + 0x48a05362
// str_to_hex(words_from_input[4]["substr"](0, 4)) == ((0x4315332 * 0x4b7c0a73 * x) % 0x2f9b5072) + 0x48a05362
```

If we find the x value we can get the str_to_hex() output.
It should represent 4 char so it would look like: 0xFFFFFFFF
We try some length to get a possible value wich would give some printable ascii.
For a x value of 7 we get 0x68347264
68 = h
34 = 4
72 = r
64 = d
FLAG: hctf{XX_rev3rse_iz_s0_h4rd23XX333X}

```js
words_from_input[4]["substr"](-2, 1) - words_from_input[4]["substr"](4, 1) == 1
// We already know that words_from_input[4]["substr"](4, 1) == '2'
// So words_from_input[4]["substr"](-2, 1) == '3'

words_from_input[4]["substr"](6, 2) == get_str_full_of_c(words_from_input[4]["substr"](7, 1), 2)
// From that we know that the 7th and the 8th char are the same.

o = str_to_hex(words_from_input[4]["substr"](6, 2))["substr"](2) == words_from_input[4]["substr"](6, 1)["charCodeAt"]() * words_from_input[4]["length"] * 5;
// We can see this condition like: 0xFFFF == 0xFF * x * 5
// Where FF is the hex value of the 7/8th char.
// The only char that confirm this condition is 'e'.
// Wich, by the way, gives us a length of 13 for the fifth word.
```

And here it is, our fifth word.
FLAG: hctf{XX_rev3rse_iz_s0_h4rd23ee3333}

We only need one more word to get the complete flag.
The last hint for this challenge was:
sha256(flag) == "d3f154b641251e319855a73b010309a168a12927f3873c97d2e5163ea5cbb443"
Considering that we only miss 2 char, we can easily try all the possibilities.

And finally:
FLAG: hctf{j5_rev3rse_iz_s0_h4rd23ee3333}
