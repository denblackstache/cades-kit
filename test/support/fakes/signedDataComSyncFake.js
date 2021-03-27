export default class SignedDataComSyncFake {
  set ContentEncoding(contentEncoding) {
    console.log('ContentEncoding is set to:', contentEncoding);
  }

  set Content(content) {
    console.log('Content is set to:', content);
  }

  SignCades(...args) {
    console.log('SignCades is called with ', ...args);
  }
}
