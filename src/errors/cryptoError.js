export default class CryptoError {
  constructor(error) {
    this.error = error;
  }

  get message() {
    let errorMessage = this.error.message;
    if (!errorMessage) {
      errorMessage = this.error;
    } else if (this.error.number) {
      errorMessage += ` (0x${CryptoError.decimalToHex(this.error.number)})`;
    }
    return errorMessage;
  }

  /**
   * @private
   */
  static decimalToHex(number) {
    const resultNumber = number < 0 ? 0xffffffff + number + 1 : number;

    return resultNumber.toString(16).toUpperCase();
  }
}
