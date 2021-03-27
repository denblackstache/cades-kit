/**
 * @category 4. Enums
 * @description A string that contains the name of the system certificate store to be opened.
 * The default value is CAPICOM_MY_STORE.
 * If the store is opened from a web script, the backslash (\) character is not allowed in the name.
 * In addition to stores defined by the system, user-defined stores can be opened.
 * This parameter can be a user-defined store or one of the following system certificate stores.
 * @see {@link https://docs.microsoft.com/en-us/windows/desktop/seccrypto/store-open MSDN:CAPICOM_STORE_NAMES}
 * @property {number} CAPICOM_CA_STORE
 * CA store. This store is used to store intermediate CA comCertificates.
 * @property {number} CAPICOM_MY_STORE
 * My store. This store is used for a user's personal comCertificates.
 * @property {number} CAPICOM_OTHER_STORE
 * AddressBook store. This store is used to keep the comCertificates of others.
 * @property {number} CAPICOM_ROOT_STORE
 * Root store. This store is used to store the root CA and self-signed, trusted comCertificates.
 */
const CAPICOM_STORE_NAMES = {
  CAPICOM_CA_STORE: 'CA',
  CAPICOM_MY_STORE: 'My',
  CAPICOM_OTHER_STORE: 'AddressBook',
  CAPICOM_ROOT_STORE: 'Root',
};

export default CAPICOM_STORE_NAMES;
