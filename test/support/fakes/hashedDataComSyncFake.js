export default class HashedDataComSyncFake {
  set DataEncoding(dataEncoding) {
    console.log('DataEncoding is set to:', dataEncoding);
  }

  set Algorithm(algorithm) {
    console.log('Algorithm is set to:', algorithm);
  }

  Hash() {
    console.log('Hash is called');
  }

  get Value() {
    return 'hash_value';
  }
}
