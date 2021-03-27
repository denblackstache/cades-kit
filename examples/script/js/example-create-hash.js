document.addEventListener('DOMContentLoaded', function() {
  function hash() {
    var HashService = new CadesKit.HashService();
    var payload = document.getElementById('hash-payload').value;

    HashService.hash(payload).then(function(value) {
      document.getElementById('hash-value').value = value;
    });
  }

  document.hash = hash;
});
