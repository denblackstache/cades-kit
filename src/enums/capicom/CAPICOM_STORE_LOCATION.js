/**
 * @category 4. Enums
 * @description The CAPICOM_STORE_LOCATION enumeration type indicates
 * the location of a certificate store.
 * @see {@link https://docs.microsoft.com/en-us/windows/desktop/seccrypto/capicom-store-location MSDN:CAPICOM_STORE_LOCATION}
 * @property {number} CAPICOM_MEMORY_STORE
 * The store is a memory store. Any changes in the contents of the store are not persisted.
 * @property {number} CAPICOM_LOCAL_MACHINE_STORE
 * The store is a local machine store.
 * Local machine stores can be read/write stores only if the user has read/write permissions.
 * If the user has read/write permissions and if the store is opened read/write,
 * then changes in the contents of the store are persisted.
 * @property {number} CAPICOM_CURRENT_USER_STORE
 * The store is a current user store.
 * A current user store may be a read/write store.
 * If it is, changes in the contents of the store are persisted.
 * @property {number} CAPICOM_ACTIVE_DIRECTORY_USER_STORE
 * The store is an Active Directory store.
 * Active Directory stores can be opened only in read-only mode.
 * Certificates cannot be added to or removed from Active Directory stores.
 * @property {number} CAPICOM_SMART_CARD_USER_STORE
 * Stores support smart card–based certificate stores.
 * The store is the group of present smart cards.
 * Introduced in CAPICOM 2.0.
 */
const CAPICOM_STORE_LOCATION = {
  CAPICOM_MEMORY_STORE: 0,
  CAPICOM_LOCAL_MACHINE_STORE: 1,
  CAPICOM_CURRENT_USER_STORE: 2,
  CAPICOM_ACTIVE_DIRECTORY_USER_STORE: 3,
  CAPICOM_SMART_CARD_USER_STORE: 4,
};

export default CAPICOM_STORE_LOCATION;
