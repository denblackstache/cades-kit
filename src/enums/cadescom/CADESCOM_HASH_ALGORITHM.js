/**
 * @category 4. Enums
 * @description Алгоритмы хэширования
 * @see {@link http://cpdn.cryptopro.ru/default.asp?url=content/cades/namespace_c_ad_e_s_c_o_m_c64bb9facc59333fe4815d569f2ca026_1c64bb9facc59333fe4815d569f2ca026.html CPDN:CADESCOM_HASH_ALGORITHM}
 * @property {number} CADESCOM_HASH_ALGORITHM_SHA1
 * Алгоритм SHA1
 * @property {number} CADESCOM_HASH_ALGORITHM_MD2
 * Алгоритм MD2
 * @property {number} CADESCOM_HASH_ALGORITHM_MD4
 * Алгоритм MD4
 * @property {number} CADESCOM_HASH_ALGORITHM_MD5
 * Алгоритм MD5
 * @property {number} CADESCOM_HASH_ALGORITHM_SHA_256
 * Алгоритм SHA1 с длиной ключа 256 бит
 * @property {number} CADESCOM_HASH_ALGORITHM_SHA_384
 * Алгоритм SHA1 с длиной ключа 384 бита
 * @property {number} CADESCOM_HASH_ALGORITHM_SHA_512
 * Алгоритм SHA1 с длиной ключа 512 бит
 * @property {number} CADESCOM_HASH_ALGORITHM_CP_GOST_3411
 * Алгоритм ГОСТ Р 34.11-94
 * @property {number} CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256
 * Алгоритм ГОСТ Р 34.10-2012 с длиной ключа 256 бит
 * @property {number} CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512
 * Алгоритм ГОСТ Р 34.10-2012 с длиной ключа 512 бит
 */
const CADESCOM_HASH_ALGORITHM = {
  CADESCOM_HASH_ALGORITHM_SHA1: 0,
  CADESCOM_HASH_ALGORITHM_MD2: 1,
  CADESCOM_HASH_ALGORITHM_MD4: 2,
  CADESCOM_HASH_ALGORITHM_MD5: 3,
  CADESCOM_HASH_ALGORITHM_SHA_256: 4,
  CADESCOM_HASH_ALGORITHM_SHA_384: 5,
  CADESCOM_HASH_ALGORITHM_SHA_512: 6,
  CADESCOM_HASH_ALGORITHM_CP_GOST_3411: 100,
  CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256: 101,
  CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512: 102,
};

export default CADESCOM_HASH_ALGORITHM;
