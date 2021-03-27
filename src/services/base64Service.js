export default class Base64Service {
  encode(value) {
    return btoa(unescape(encodeURIComponent(value)));
  }

  decode(value) {
    return decodeURIComponent(escape(atob(value)));
  }
}
