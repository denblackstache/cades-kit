import PluginService from '../services/pluginService';

/**
 * @category 2. Factories
 * @subcategory Base
 * @param comObjectName
 */
async function cadesComFactory(comObjectName) {
  const isNativeMessagingSupported = new PluginService().isNativeMessagingSupported();
  try {
    await cadesplugin;
  } catch (error) {
    console.error(error);

    throw new Error('Failed to initialize CadesPlugin API');
  }

  console.log(isNativeMessagingSupported ? `CreateObjectAsync(${comObjectName})` : `CreateObject(${comObjectName})`);
  return isNativeMessagingSupported
    ? cadesplugin.CreateObjectAsync(comObjectName)
    : cadesplugin.CreateObject(comObjectName);
}

export default cadesComFactory;
