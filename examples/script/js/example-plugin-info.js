document.addEventListener('DOMContentLoaded', function() {
  Promise.resolve(new CadesKit.PluginService()).then(function(plugin) {
    var readyDiv = document.getElementById('status');
    readyDiv.innerHTML = plugin.isReady()
      ? '<span class="color--green">Plugin is ready</span>'
      : '<span class="color--red">Plugin is not ready</span>';
    var nativeMessagingDiv = document.getElementById('native');
    nativeMessagingDiv.innerHTML = plugin.isNativeMessagingSupported()
      ? 'Native messaging is supported 👍'
      : 'Native messaging is not supported 👎';
  });

  var AboutFactory = new CadesKit.AboutFactory();
  AboutFactory.create().then(function(about) {
    return Promise.all([about.version(), about.cspVersion()]).then(
      function(versions) {
        var version = versions[0];
        var cspVersion = versions[1];
        var pluginDiv = document.getElementById('plugin');
        pluginDiv.innerHTML = version;
        var cspDiv = document.getElementById('csp');
        cspDiv.innerHTML = cspVersion;
      }
    );
  });
});
