/**
 * @param {string} password
 * @return {boolean}
 */
const strongPasswordCheckerII = password => new RegExp("^(?!.*(.)\\1)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()+-]).{8,}$", 'g').exec(password) !== null;