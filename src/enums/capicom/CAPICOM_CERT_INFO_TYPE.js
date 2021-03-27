/**
 * @category 4. Enums
 * @description The CAPICOM_CERT_INFO_TYPE enumeration type defines
 * what information is to be queried from a certificate.
 * @see {@link https://docs.microsoft.com/en-us/windows/desktop/seccrypto/capicom-cert-info-type MSDN:CAPICOM_CERT_INFO_TYPE}
 * @property {number} CAPICOM_CERT_INFO_SUBJECT_SIMPLE_NAME
 * Returns the display name of the certificate subject.
 * @property {number} CAPICOM_CERT_INFO_ISSUER_SIMPLE_NAME
 * Returns the display name of the issuer of the certificate.
 * @property {number} CAPICOM_CERT_INFO_SUBJECT_EMAIL_NAME
 * Returns the email address of the certificate subject.
 * @property {number} CAPICOM_CERT_INFO_ISSUER_EMAIL_NAME
 * Returns the email address of the issuer of the certificate.
 * @property {number} CAPICOM_CERT_INFO_SUBJECT_UPN
 * Returns the UPN of the certificate subject. Introduced in CAPICOM 2.0.
 * @property {number} CAPICOM_CERT_INFO_ISSUER_UPN
 * Returns the UPN of the issuer of the certificate. Introduced in CAPICOM 2.0.
 * @property {number} CAPICOM_CERT_INFO_SUBJECT_DNS_NAME
 * Returns the DNS name of the certificate subject. Introduced in CAPICOM 2.0.
 * @property {number} CAPICOM_CERT_INFO_ISSUER_DNS_NAME
 * Returns the DNS name of the issuer of the certificate. Introduced in CAPICOM 2.0.
 */
const CAPICOM_CERT_INFO_TYPE = {
  CAPICOM_CERT_INFO_SUBJECT_SIMPLE_NAME: 0,
  CAPICOM_CERT_INFO_ISSUER_SIMPLE_NAME: 1,
  CAPICOM_CERT_INFO_SUBJECT_EMAIL_NAME: 2,
  CAPICOM_CERT_INFO_ISSUER_EMAIL_NAME: 3,
  CAPICOM_CERT_INFO_SUBJECT_UPN: 4,
  CAPICOM_CERT_INFO_ISSUER_UPN: 5,
  CAPICOM_CERT_INFO_SUBJECT_DNS_NAME: 6,
  CAPICOM_CERT_INFO_ISSUER_DNS_NAME: 7,
};

export default CAPICOM_CERT_INFO_TYPE;
