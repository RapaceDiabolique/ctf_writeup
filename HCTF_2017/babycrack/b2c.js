b2c = function(str)
{
    // We need 4 char followed by =
    var alpha_num = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    var char_tab = [];
    var str_len_div_by_5 = Math['floor'](str["length"] / 5);
    var str_len_mod_5 = str["length"] % 5;

    if (str_len_mod_5 != 0)
        str_len_div_by_5 += 1;
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
    return char_tab["join"]('');
};

if (process.argv.length == 3)
    console.log(b2c(process.argv[2]));
else
    console.log("USAGE: node b2c str")
