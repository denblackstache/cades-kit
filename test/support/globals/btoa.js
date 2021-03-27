if (typeof btoa === 'undefined') {
  global.btoa = function btoa(str) {
    return Buffer.from(str).toString('base64');
  };
}

if (typeof atob === 'undefined') {
  global.atob = function atob(base64) {
    return Buffer.from(base64, 'base64').toString('binary');
  };
}
