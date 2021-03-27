/**
 * @category 4. Enums
 * @description The CAPICOM_ENCODING_TYPE enumeration type indicates the encoding type used.
 * @see {@link https://docs.microsoft.com/en-us/windows/desktop/seccrypto/capicom-encoding-type MSDN:CAPICOM_ENCODING_TYPE}
 * @property {number} CAPICOM_ENCODE_ANY - Data is saved as a base64-encoded string
 * or a pure binary sequence.
 * This encoding type is used only for input data that has an unknown encoding type.
 * Introduced in CAPICOM 2.0.
 * @property {number} CAPICOM_ENCODE_BASE64 Data is saved as a base64-encoded string.
 * @property {number} CAPICOM_ENCODE_BINARY Data is saved as a pure binary sequence.
 */
const CAPICOM_ENCODING_TYPE = {
  CAPICOM_ENCODE_ANY: -1,
  CAPICOM_ENCODE_BASE64: 0,
  CAPICOM_ENCODE_BINARY: 1,
};

export default CAPICOM_ENCODING_TYPE;
