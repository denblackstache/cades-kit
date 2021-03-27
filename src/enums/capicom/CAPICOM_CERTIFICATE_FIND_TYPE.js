/**
 * @category 4. Enums
 * @description The CAPICOM_CERTIFICATE_FIND_TYPE enumeration type defines
 * the type of search criteria used to find specific comCertificates.
 * This enumeration type was introduced in CAPICOM 2.0.
 * @see {@link https://docs.microsoft.com/en-us/windows/desktop/seccrypto/capicom-certificate-find-type MSDN:CAPICOM_CERTIFICATE_FIND_TYPE}
 * @property {number} CAPICOM_CERTIFICATE_FIND_SHA1_HASH
 * Returns comCertificates matching a specified SHA1 hash.
 * @property {number} CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME
 * Returns comCertificates whose subject name exactly or partially matches a specified subject name.
 * @property {number} CAPICOM_CERTIFICATE_FIND_ISSUER_NAME
 * Returns comCertificates whose issuer name exactly or partially matches a specified issuer name.
 * @property {number} CAPICOM_CERTIFICATE_FIND_ROOT_NAME
 * Returns comCertificates whose root subject name exactly
 * or partially matches a specified root subject name.
 * @property {number} CAPICOM_CERTIFICATE_FIND_TEMPLATE_NAME
 * Returns comCertificates whose template name matches a specified template name.
 * @property {number} CAPICOM_CERTIFICATE_FIND_EXTENSION
 * Returns comCertificates that have an extension that matches a specified extension.
 * @property {number} CAPICOM_CERTIFICATE_FIND_EXTENDED_PROPERTY
 * Returns comCertificates that have an extended property whose property identifier matches
 * a specified property identifier.
 * @property {number} CAPICOM_CERTIFICATE_FIND_APPLICATION_POLICY
 * Returns comCertificates in the store that have either an enhanced key usage extension
 * or property combined with a usage identifier.
 * @property {number} CAPICOM_CERTIFICATE_FIND_CERTIFICATE_POLICY
 * Returns comCertificates containing a specified policy OID.
 * @property {number} CAPICOM_CERTIFICATE_FIND_TIME_VALID
 * Returns comCertificates whose time is valid.
 * @property {number} CAPICOM_CERTIFICATE_FIND_TIME_NOT_YET_VALID
 * Returns comCertificates whose time is not yet valid.
 * @property {number} CAPICOM_CERTIFICATE_FIND_TIME_EXPIRED
 * Returns comCertificates whose time has expired.
 * @property {number} CAPICOM_CERTIFICATE_FIND_KEY_USAGE
 * Returns comCertificates containing a key that can be used in the specified manner.
 */
const CAPICOM_CERTIFICATE_FIND_TYPE = {
  CAPICOM_CERTIFICATE_FIND_SHA1_HASH: 0,
  CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME: 1,
  CAPICOM_CERTIFICATE_FIND_ISSUER_NAME: 2,
  CAPICOM_CERTIFICATE_FIND_ROOT_NAME: 3,
  CAPICOM_CERTIFICATE_FIND_TEMPLATE_NAME: 4,
  CAPICOM_CERTIFICATE_FIND_EXTENSION: 5,
  CAPICOM_CERTIFICATE_FIND_EXTENDED_PROPERTY: 6,
  CAPICOM_CERTIFICATE_FIND_APPLICATION_POLICY: 7,
  CAPICOM_CERTIFICATE_FIND_CERTIFICATE_POLICY: 8,
  CAPICOM_CERTIFICATE_FIND_TIME_VALID: 9,
  CAPICOM_CERTIFICATE_FIND_TIME_NOT_YET_VALID: 10,
  CAPICOM_CERTIFICATE_FIND_TIME_EXPIRED: 11,
  CAPICOM_CERTIFICATE_FIND_KEY_USAGE: 12,
};

export default CAPICOM_CERTIFICATE_FIND_TYPE;
