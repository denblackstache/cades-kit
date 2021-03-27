function presentCertificate(certificate) {
  var oidPromise = certificate.getExtendedKeyUsage();
  return oidPromise.then(function(oids) {
    return 'Subject: ' + certificate.subjectName + '<br><br>\n\n'
      + 'Valid to: ' + (!!certificate.validToDate ? certificate.validToDate.toISOString() : 'No date') + '<br>'
      + 'Thumbprint: ' + certificate.thumbprint
      + 'OIDs: ' + oids.join(', ');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var StoreFactory = new CadesKit.StoreFactory();
  StoreFactory.create().then(function(store) {
    return store.certificates();
  }).then(function(certificateModels) {
    var selectBox = document.getElementById('certificate-list');
    var promiseQueue = [];
    certificateModels.forEach(function(certificate) {
      promiseQueue.push(presentCertificate(certificate).then(function(presentedCertificate) {
        var el = document.createElement('option');
        el.value = certificate.thumbprint;
        el.innerHTML = presentedCertificate;
        selectBox.appendChild(el);
      }));
    });

    Promise.all(promiseQueue).then(function() {
      var changeEvent = new CustomEvent('change');
      selectBox.dispatchEvent(changeEvent);
    });
  })
    .catch(function(e) {
      console.log(e);
    });

  var selectedCertificate = document.getElementById('selected-certificate');
  document.getElementById('certificate-list').addEventListener('change', function() {
    var certificates = document.getElementById('certificate-list');
    selectedCertificate.innerHTML =
      certificates.options[certificates.selectedIndex].text;
  });
});
