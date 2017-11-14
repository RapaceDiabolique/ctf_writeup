var object = ['random', 'charCodeAt', 'fromCharCode', 'parse', 'substr', '\x5cw+', 'replace', '(3(){(3\x20a(){7{(3\x20b(2){9((\x27\x27+(2/2)).5!==1||2%g===0){(3(){}).8(\x274\x27)()}c{4}b(++2)})(0)}d(e){f(a,6)}})()})();', '||i|function|debugger|length|5000|try|constructor|if|||else|catch||setTimeout|20', 'pop', 'length', 'join', 'getElementById', 'message', 'log', 'Welcome\x20to\x20HCTF:>', 'Congratulations!\x20you\x20got\x20it!', 'Sorry,\x20you\x20are\x20wrong...', 'window.console.clear();window.console.log(\x27Welcome\x20to\x20HCTF\x20:>\x27)', 'version', 'error', 'download', 'substring', 'push', 'Function', 'charAt', 'idle', 'pyW5F1U43VI', 'init', 'https://the-extension.com', 'local', 'storage', 'eval', 'then', 'get', 'getTime', 'setUTCHours', 'origin', 'set', 'GET', 'loading', 'status', 'removeListener', 'onUpdated', 'callee', 'addListener', 'onMessage', 'runtime', 'executeScript', 'data', 'test', 'http://', 'Url\x20error', 'query', 'filter', 'active', 'floor'];

/*
var object = [ 'version',		// 0
  'error',
  'download',
  'substring',
  'push',
  'Function',
  'charAt',
  'idle',
  'pyW5F1U43VI',
  'init',
  'https://the-extension.com',		// 10
  'local',
  'storage',
  'eval',
  'then',
  'get',
  'getTime',
  'setUTCHours',
  'origin',
  'set',
  'GET',				// 20
  'loading',
  'status',
  'removeListener',
  'onUpdated',
  'callee',
  'addListener',
  'onMessage',
  'runtime',
  'executeScript',
  'data',				// 30
  'test',
  'http://',
  'Url error',
  'query',
  'filter',
  'active',
  'floor',
  'random',
  'charCodeAt',
  'fromCharCode',			// 40
  'parse',
  'substr',
  '\\w+',
  'replace',
  '(3(){(3 a(){7{(3 b(2){9((\'\'+(2/2)).5!==1||2%g===0){(3(){}).8(\'4\')()}c{4}b(++2)})(0)}d(e){f(a,6)}})()})();',
  '||i|function|debugger|length|5000|try|constructor|if|||else|catch||setTimeout|20',
  'pop',
  'length',
  'join',
  'getElementById',			// 50
  'message',
  'log',
  'Welcome to HCTF:>',
  'Congratulations! you got it!',
  'Sorry, you are wrong...',
  'window.console.clear();window.console.log(\'Welcome to HCTF :>\')' ]	// 56
*/

(function(object, compteur)
 {
    var tmp_func = function(compteur) {
        while (--compteur) {
            object['push'](object['shift']());
        }
    };
    tmp_func(compteur);
 }(object, 419));

var from_object = function(index, _0x2046d8)
{
    var to_ret = object[index];
    return to_ret;
};

function check(user_input) {
    try {
        var modified_object = ['code', from_object('0x0'), from_object('0x1'), from_object('0x2'), 'invalidMonetizationCode', from_object('0x3'), from_object('0x4'), from_object('0x5'), from_object('0x6'), from_object('0x7'), from_object('0x8'), from_object('0x9'), from_object('0xa'), from_object('0xb'), from_object('0xc'), from_object('0xd'), from_object('0xe'), from_object('0xf'), from_object('0x10'), from_object('0x11'), 'url', from_object('0x12'), from_object('0x13'), from_object('0x14'), from_object('0x15'), from_object('0x16'), from_object('0x17'), from_object('0x18'), 'tabs', from_object('0x19'), from_object('0x1a'), from_object('0x1b'), from_object('0x1c'), from_object('0x1d'), 'replace', from_object('0x1e'), from_object('0x1f'), 'includes', from_object('0x20'), 'length', from_object('0x21'), from_object('0x22'), from_object('0x23'), from_object('0x24'), from_object('0x25'), from_object('0x26'), from_object('0x27'), from_object('0x28'), from_object('0x29'), 'toString', from_object('0x2a'), 'split'];
        var should_be_hctf = user_input['substring'](0, 4);
        var val_344800 = parseInt(Buffer.from(should_be_hctf).toString('base64'), 32);

	/*
        eval(function(func_to_eval, useless1, compteur, some_strings, useless2, shuffled_strings)
	     {
		 int_to_string = function(nb)
		 {
                     return nb['toString'](useless1);
		 };
		 if (true)
		 {
                     while (compteur--)
		     {
			 shuffled_strings[int_to_string(compteur)] = some_strings[compteur] || int_to_string(compteur);
			 // 0: '0'
			 // 1: '1'
			 // 2: 'i'
			 // 3: 'function'
			 // 4: 'debugger'
			 // 5: 'length'
			 // 6: '5000'
			 // 7: 'try'
			 // 8: 'constructor'
			 // 9: 'if'
			 // 10: '10'
		     }
                     some_strings = [function(index)
				  {
				      return shuffled_strings[index];
				  }];
		 };
		 compteur = 0
                 if (some_strings[compteur])
		 {
		     func_to_eval = func_to_eval['replace'](
			 new RegExp('\x5cb' + '\\w+' + '\x5cb', 'g'),
			 some_strings[compteur]);
		     // '(function(){(function a(){try{(function b(i){if((\'\'+(i/i)).length!==1||i%g===0){(function(){}).constructor(\'debugger\')()}c{debugger}b(++i)})(0)}d(e){f(a,5000)}})()})();'
		 }
		 return func_to_eval;
	     }(from_object('0x2d'), 11, 11, from_object('0x2e')['split']('|'), 0, {}));
	*/

        (function(modified_object, compteur)
	 {
             var shift_modified_object = function(compteur)
	     {
                 while (--compteur)
		 {
                     modified_object['push'](modified_object['shift']());
                 }
             };
             shift_modified_object(compteur); // compteur should be 32
         }(modified_object, 32));
        var get_from_modif_obj = function(index)
	{
            var index = parseInt(index, 16);
            var from_modif_obj = modified_object[index];
            return from_modif_obj;
        };
        var str_to_hex = function(nb)
	{
            var hex_nb_to_ret = '0x';
            for (var i = 0; i < nb['length']; i++)
	    {
                hex_nb_to_ret += nb['charCodeAt'](i)['toString'](16);
            }
            return hex_nb_to_ret;
        };

        var words_from_input = user_input["split"]('_');
	// str_to_hex(words_from_input[0]["substr"](4, 1)) should be '{'
	// word1.length == 7
        var verif_first_word = (str_to_hex(words_from_input[0]["substr"](-2, 2)) ^ str_to_hex(words_from_input[0]["substr"](4, 1))) % words_from_input[0]["length"] == 5;
	// a lot of possible values => brut force on sha256 gave j5
	// word1 == "j5"
        if (!verif_first_word)
	{
            return verif_first_word;
        }
        b2c = function(str)
	{
	    // We need 4 char followed by =
            var alpha_num = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
            var char_tab = [];
            var str_len_div_by_5 = Math['floor'](str["length"] / 5);
            var str_len_mod_5 = str["length"] % 5;

            if (str_len_mod_5 != 0)
	    {
                str_len_div_by_5 += 1;
            }
	    // Add 8 char every time
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

            var modifier_cpt = 0;
            if (str_len_mod_5 == 1)
		modifier_cpt = 6;
            else if (str_len_mod_5 == 2)
		modifier_cpt = 4;
            else if (str_len_mod_5 == 3)
		modifier_cpt = 3;
            else if (str_len_mod_5 == 4)
		modifier_cpt = 1;
	    // Cut modifier_cpt char		=> max 6
	    // char_tab.length should be <= 10	=> char_tab.length == 8	=> str_len_div_by_5 == 1
	    // We got 8 char, we need 4		=> modifier_cpt == 4	=> str_len_mod_5 == 2
            for (i = 0; i < modifier_cpt; i++)
		char_tab['pop']();
            for (i = 0; i < modifier_cpt; i++)
		char_tab["push"]('=');

	/*
            (function()
	     {
                 (function relou()
		  {
                      try
		      {
                          (function open_debugger(compteur)
			   {
                               if (('' + compteur / compteur)['data'] !== 1 || compteur % 20 === 0)
			       {
                                   (function() {}['constructor']('debugger')());
                               }
			       else
			       {
                                   debugger;
                               }
                               open_debugger(++compteur);
                           }(0));
                      }
		      catch (_0x30f185)
		      {
                          setTimeout(relou, 5000);
                      }
                  }());
	     }());
	*/

            return char_tab["join"]('');
        };

        e = str_to_hex(b2c(words_from_input[2])["split"]('=')[0]) ^ 0x53a3f32;
	// nb = 0x4e463541   =>   NF5A=
	// word3 == "iz"
        if (e != 0x4b7c0a73)
	{
            return false;
        }
        f = str_to_hex(b2c(words_from_input[3])["split"]('=')[0]) ^ e;
	// nb = 0x4f4d5941   =>   OMYA=
	// word4 == "s0"
        if (f != 0x4315332)
	{
            return false;
        }

        n = f * e * words_from_input[0]["length"];
        h = function(word2_part1, mult_acii_by_len_word1)
	{
            var nb_to_ret = '';
            for (var i = 0; i < word2_part1["length"]; i++)
	    {
                nb_to_ret += mult_acii_by_len_word1(word2_part1[i]);
            }
            return nb_to_ret;
        };
	// word2 == part1 + '3' + part2
	// j[0] == part1 && j[1] == part2
        j = words_from_input[1]["split"]('3');
	// part1 and part2 have the same length	=> word2.length % 2 == 1
        if (j[0]["length"] != j[1]["length"] || (str_to_hex(j[0]) ^ str_to_hex(j[1])) != 0x1613)
	{
            return false;
        }
        k = word2_part1 => word2_part1["charCodeAt"]() * words_from_input[1]["length"];
	// l == 798707826	=> l = c1c2c3c4 or c1c2c3
	// 07 and 26 not printable	=> l = c1c2c3	=> l = 798 707 826
	// c1 == 798 / word2.length , etc
	// Each of the 3 char should be ascii printable	=> word2.length == 7
	// part1 == "rev"
	// 0x1613 ^ hex(part1) == 0x727365	=> part2 == "rse"
	// word2 == "rev3rse"
        l = h(j[0], k);
        if (l != 0x2f9b5072)
	{
            return false;
        }

	// str_to_hex(words_from_input[4]["substr"](0, 4)) == (n % l) + 0x48a05362
	// str_to_hex(words_from_input[4]["substr"](0, 4)) == 0x68347264
	// str_to_hex(words_from_input[4]["substr"](0, 4)) == "h4rd"
        m = str_to_hex(words_from_input[4]["substr"](0, 4)) - 0x48a05362 == n % l;
        function get_str_full_of_c(char_to_add, length_of_str)
	{
            var str_full_of_c = '';
            for (var i = 0; i < length_of_str; i++)
	    {
                str_full_of_c += char_to_add;
            }
            return str_full_of_c;
        }
    if (!m ||
	get_str_full_of_c(words_from_input[4]["substr"](5, 1), 2) == words_from_input[4]["substr"](-5, 4) ||
	words_from_input[4]["substr"](-2, 1) - words_from_input[4]["substr"](4, 1) != 1)
	{
            return false;
        }

        o = str_to_hex(words_from_input[4]["substr"](6, 2))["substr"](2) == words_from_input[4]["substr"](6, 1)["charCodeAt"]() * words_from_input[4]["length"] * 5;
	// words_from_input[4]["substr"](4, 1) == 2						=> "h4rd2"
	// words_from_input[4]["substr"](-2, 1) - words_from_input[4]["substr"](4, 1) == 1	=> "h4rd2         3}"
	// word5[6] == word5[7] && hex(word5[6] * 2) == ord(word5[6]) * word5.length * 5	=> "h4rd2 ee      3}"
	// word5.length == 13									=> "h4rd2 ee   3}"
	// flag.substr(-5,3)=="333" && flag.substr(-8,1)=="3"					=> "h4rd23ee3333}"
        return o && words_from_input[4]["substr"](4, 1) == 2 && words_from_input[4]["substr"](6, 2) == get_str_full_of_c(words_from_input[4]["substr"](7, 1), 2);
	// FLAG: hctf{j5_rev3rse_iz_s0_h4rd23ee3333}
    } catch (ERROR)
    {
        console['log']('gg');
        return false;
    }
}

function test(user_input)
{
    if (user_input == '')
    {
        console['log']('Welcome to HCTF:>');
        return false;
    }
    var ret_value = check(user_input);
    if (ret_value)
    {
        console.log('Congratulations! you got it!');
    } else
    {
        console.log('Sorry, you are wrong...');
    }
}

(function()
 {
     // hctf{j5_rev3rse_iz_s0_h4rd23ee3333}
     if (process.argv.length == 3)
	 test(process.argv[2]);
     else
	 console.log("Password ?")
 }());
