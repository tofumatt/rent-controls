var data = require('sdk/self').data;
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
  include: ['*.onthemarket.com', '*.rightmove.co.uk', '*.zoopla.co.uk'],
  contentScriptWhen: 'ready',
  contentScriptFile: [
    data.url('jquery-2.1.4.min.js'),
    data.url('change-text.js'),
  ],
  onAttach: function onAttach(worker) {
    worker.on('message', function(msg) {
      worker.postMessage();
    });
  },
});
