class CadesPluginFake {
  CreateObjectAsync(name) {
    return name;
  }

  CreateObject(name) {
    return name;
  }
}

export default CadesPluginFake;
