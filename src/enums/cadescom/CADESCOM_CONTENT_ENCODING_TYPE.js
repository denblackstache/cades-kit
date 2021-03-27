/**
 * @category 4. Enums
 * @description Способ кодирования данных для подписи
 * @see {@link http://cpdn.cryptopro.ru/default.asp?url=content/cades/namespace_c_ad_e_s_c_o_m_138b6c63b9d33e9a70c23e98b6161d3a_1138b6c63b9d33e9a70c23e98b6161d3a.html CPDN:CADESCOM_CONTENT_ENCODING}
 * @property {number} CADESCOM_STRING_TO_UCS2LE
 * Кодировка UTF-8 или UNICODE
 * @property {number} CADESCOM_BASE64_TO_BINARY
 * Кодировка BASE64
 */
const CADESCOM_CONTENT_ENCODING_TYPE = {
  CADESCOM_STRING_TO_UCS2LE: 0,
  CADESCOM_BASE64_TO_BINARY: 1,
};

export default CADESCOM_CONTENT_ENCODING_TYPE;
