/**
 * @category 4. Enums
 * @description Тип усовершенствованной подписи
 * @see {@link http://cpdn.cryptopro.ru/default.asp?url=content/cades/namespace_c_ad_e_s_c_o_m_fe49883d8ff77f7edbeeaf0be3d44c0b_1fe49883d8ff77f7edbeeaf0be3d44c0b.html CPDN:CADESCOM_CADES_TYPE}
 * @property {number} CADESCOM_CADES_DEFAULT
 * Тип подписи CAdES BES
 * @property {number} CADESCOM_CADES_BES
 * Тип подписи CAdES BES
 * @property {number} CADESCOM_CADES_T
 * Тип подписи CAdES T
 * @property {number} CADESCOM_CADES_X_LONG_TYPE_1
 * Тип подписи CAdES-X Long Type 1
 */
const CADESCOM_CADES_TYPE = {
  CADESCOM_CADES_DEFAULT: 0,
  CADESCOM_CADES_BES: 0x01,
  CADESCOM_CADES_T: 0x05,
  CADESCOM_CADES_X_LONG_TYPE_1: 0x5d,
};

export default CADESCOM_CADES_TYPE;
