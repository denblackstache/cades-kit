export default class SignedDataComFake {
  async propset_ContentEncoding(contentEncoding) {
    console.log('propset_ContentEncoding is set to:', contentEncoding);
  }

  async propset_Content(content) {
    console.log('propset_Content is set to:', content);
  }

  async SignCades(...args) {
    console.log('SignCades is called with ', ...args);
  }
}
