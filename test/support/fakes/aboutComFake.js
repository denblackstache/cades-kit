export default class AboutComFake {
  get PluginVersion() {
    return Promise.resolve({
      MajorVersion: Promise.resolve('1'),
      MinorVersion: Promise.resolve('2'),
      BuildVersion: Promise.resolve('3'),
    });
  }

  get Version() {
    return Promise.resolve('5.0.1');
  }

  CSPVersion() {
    return Promise.resolve({
      MajorVersion: Promise.resolve('5'),
      MinorVersion: Promise.resolve('0'),
      BuildVersion: Promise.resolve('1'),
    });
  }
}
