_wrap_staticMeasuredFunctions['set.js'] = 1;
_wrap_staticMeasuredCalls['set.js'] =1;
var mySettings = {onShiftEnter: {keepDefault: false, replaceWith: '<br />\n'}, onCtrlEnter: {keepDefault: false, openWith: '\n<p>', closeWith: '</p>'}, onTab: {keepDefault: false, replaceWith: '    '}, markupSet: [{name: 'Bold', key: 'B', openWith: '(!(<strong>|!|<b>)!)', closeWith: '(!(</strong>|!|</b>)!)'}, {name: 'Italic', key: 'I', openWith: '(!(<em>|!|<i>)!)', closeWith: '(!(</em>|!|</i>)!)'}, {name: 'Stroke through', key: 'S', openWith: '<del>', closeWith: '</del>'}, {separator: '---------------'}, {name: 'Bulleted List', openWith: '    <li>', closeWith: '</li>', multiline: true, openBlockWith: '<ul>\n', closeBlockWith: '\n</ul>'}, {name: 'Numeric List', openWith: '    <li>', closeWith: '</li>', multiline: true, openBlockWith: '<ol>\n', closeBlockWith: '\n</ol>'}, {separator: '---------------'}, {name: 'Picture', key: 'P', replaceWith: '<img src="[![Source:!:http://]!]" alt="[![Alternative text]!]" />'}, {name: 'Link', key: 'L', openWith: '<a href="[![Link:!:http://]!]"(!( title="[![Title]!]")!)>', closeWith: '</a>', placeHolder: 'Your text to link...'}, {separator: '---------------'}, {name: 'Clean', className: 'clean', replaceWith: function(markitup) {
_wrap_addFunctionToMap('set.js', 27, 1733,1805);

  return (_wrap_setLastFunctionCall("set.js",27,1761,1803) || markitup.selection.replace(/<(.*?)>/g, ""));
}}, {name: 'Preview', className: 'preview', call: 'preview'}]};