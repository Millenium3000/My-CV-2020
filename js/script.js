// function highlight(text, words, tag) {
//
//     // Default tag if no tag is provided
//     tag = tag || 'span';
//
//     var i, len = words.length, re;
//     for (i = 0; i < len; i++) {
//         // Global regex to highlights all matches
//         re = new RegExp(words[i], 'g');
//         if (re.test(text)) {
//             text = text.replace(re, '<'+ tag +' class="highlight">$&</'+ tag +'>');
//         }
//     }
//
//     return text;
// }
//
// function unhighlight(text, tag) {
//     // Default tag if no tag is provided
//     tag = tag || 'span';
//     var re = new RegExp('(<'+ tag +'.+?>|<\/'+ tag +'>)', 'g');
//     return text.replace(re, '');
// }
//
// var $p = $('p');
// $('#highlight').click(function(){
//     var words = $('input').val().replace(/(\s,|,\s)/g, ',').split(',');
//     $p.html( unhighlight($p.html()) );
//     $p.html( highlight($p.html(), words) );
// });
//
// $('#unhighlight').click(function(){
//     $p.html( unhighlight($p.html()) );
// });