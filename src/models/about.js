/**
 * @category 3. Models
 * @property aboutComObject
 */
class About {
  /**
   * @param aboutComObject
   */
  constructor(aboutComObject) {
    this.aboutComObject = aboutComObject;
  }

  /**
   * @returns {Promise<string|any>}
   */
  async version() {
    const pluginVersion = await this.aboutComObject.PluginVersion;
    const version = await this.aboutComObject.Version;
    const pluginVersionParsed = `${await pluginVersion.MajorVersion}.${await pluginVersion.MinorVersion}.${await pluginVersion.BuildVersion}`;

    return pluginVersionParsed || version;
  }

  /**
   * @returns {Promise<string>}
   */
  async cspVersion() {
    const version = await this.aboutComObject.CSPVersion('', 75);
    return `${await version.MajorVersion}.${await version.MinorVersion}.${await version.BuildVersion}`;
  }
}

export default About;
