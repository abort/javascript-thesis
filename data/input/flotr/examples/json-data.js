var f = null;
$('json-btn').observe('click', function() {
  new Ajax.Request('json.txt', {method: 'get', onSuccess: function(transport) {
  var json = transport.responseText.evalJSON();
  if (json.series && json.options) {
    $('container').setStyle({'display': 'block'});
    f = Flotr.draw($('container'), json.series, json.options);
  }
}});
});
