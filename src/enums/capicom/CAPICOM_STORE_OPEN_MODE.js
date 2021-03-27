/**
 * @category 4. Enums
 * @description A value of the CAPICOM_STORE_OPEN_MODE enumeration that indicates
 * the open mode of the store.
 * The default value is CAPICOM_STORE_OPEN_READ_ONLY.
 * If the store is opened from a web script,
 * this value is forced to CAPICOM_STORE_OPEN_EXISTING_ONLY.
 * This parameter can be one of the following values.
 * @see {@link https://docs.microsoft.com/en-us/windows/desktop/seccrypto/capicom-store-open-mode MSDN:CAPICOM_STORE_OPEN_MODE}
 * @property {number} CAPICOM_STORE_OPEN_READ_ONLY
 * Open the store in read-only mode.
 * @property {number} CAPICOM_STORE_OPEN_READ_WRITE
 * Open the store in read/write mode.
 * @property {number} CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED
 * Open the store in read/write mode if the user has read/write permissions;
 * otherwise, open the store in read-only mode.
 * @property {number} CAPICOM_STORE_OPEN_EXISTING_ONLY
 * Open existing stores only; do not create a new store.
 * Introduced in CAPICOM 2.0.
 * @property {number} CAPICOM_STORE_OPEN_INCLUDE_ARCHIVED
 * Include archived comCertificates when using the store.
 * Introduced in CAPICOM 2.0.
 */
const CAPICOM_STORE_OPEN_MODE = {
  CAPICOM_STORE_OPEN_READ_ONLY: 0,
  CAPICOM_STORE_OPEN_READ_WRITE: 1,
  CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED: 2,
  CAPICOM_STORE_OPEN_EXISTING_ONLY: 128,
  CAPICOM_STORE_OPEN_INCLUDE_ARCHIVED: 256,
};

export default CAPICOM_STORE_OPEN_MODE;
