export default class HashedDataComFake {
  async propset_DataEncoding(dataEncoding) {
    console.log('DataEncoding is set to:', dataEncoding);
  }

  async propset_Algorithm(algorithm) {
    console.log('Algorithm is set to:', algorithm);
  }

  async Hash() {
    console.log('Hash is called');
  }

  get Value() {
    return Promise.resolve('hash_value');
  }
}
