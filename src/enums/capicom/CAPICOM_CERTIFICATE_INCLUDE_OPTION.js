/**
 * @category 4. Enums
 * @description The CAPICOM_CERTIFICATE_INCLUDE_OPTION enumeration type defines
 * which comCertificates in a chain are saved.
 * This enumeration type was introduced in CAPICOM 2.0.
 * @see {@link https://docs.microsoft.com/en-us/windows/desktop/seccrypto/capicom-certificate-include-option MSDN:CAPICOM_CERTIFICATE_INCLUDE_OPTION}
 * @property {number} CAPICOM_CERTIFICATE_INCLUDE_CHAIN_EXCEPT_ROOT
 * Saves all comCertificates in the chain with the exception of the root entity.
 * @property {number} CAPICOM_CERTIFICATE_INCLUDE_WHOLE_CHAIN
 * Saves the complete certificate chain.
 * @property {number} CAPICOM_CERTIFICATE_INCLUDE_END_ENTITY_ONLY
 * Saves only the end entity certificate.
 */
const CAPICOM_CERTIFICATE_INCLUDE_OPTION = {
  CAPICOM_CERTIFICATE_INCLUDE_CHAIN_EXCEPT_ROOT: 0,
  CAPICOM_CERTIFICATE_INCLUDE_WHOLE_CHAIN: 1,
  CAPICOM_CERTIFICATE_INCLUDE_END_ENTITY_ONLY: 2,
};

export default CAPICOM_CERTIFICATE_INCLUDE_OPTION;
