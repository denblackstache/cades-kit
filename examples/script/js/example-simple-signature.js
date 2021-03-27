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
    return store.certificates().then(function(certificateModels) {
      var selectBox = document.getElementById('certificates-to-sign');
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
    });
  });

  function sign() {
    var SignService = new CadesKit.SignService();
    var payload = document.getElementById('payload').value;

    var certificates = document.getElementById('certificates-to-sign');
    var thumbprint = certificates.options[certificates.selectedIndex].value;

    StoreFactory.create()
      .then(function(store) {
        return store.findOne(thumbprint);
      })
      .then(function(certificateModel) {
        return SignService.signBes(payload, certificateModel, { detached: true });
      })
      .then(function(signature) {
        document.getElementById('signature').value = signature;
      });
  }

  document.sign = sign;
});
