export default class AboutComSyncFake {
  get PluginVersion() {
    return {
      MajorVersion: '1',
      MinorVersion: '2',
      BuildVersion: '3',
    };
  }

  get Version() {
    return '5.0.1';
  }

  CSPVersion() {
    return {
      MajorVersion: '5',
      MinorVersion: '0',
      BuildVersion: '1',
    };
  }
}
