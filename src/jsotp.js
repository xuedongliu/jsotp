/*
 *  @project  : jsotp
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 *  @link     : https://github.com/LanceGin/jsotp
 *  @Disc     : a node module to generate and verify one-time passwords
 */

import { TOTP } from './totp.js';
import { HOTP } from './hotp.js';
import { Base32 } from './base32.js';
import { Util } from './util.js';

/* ＊
 * Generate and return HOTP object
 *
 * @param {secret}
 * @type {String}
 * @desc random base32-encoded key to generate OTP.
 *
 * @return {OTP}
 */
function hotp_gen(secret, digits = 6, digest = 'SHA-1') {
  const hotp = new HOTP(secret, digits, digest);
  return hotp;
}

/* ＊
 * Generate and return TOTP object
 *
 * @param {secret}
 * @type {String}
 * @desc random base32-encoded key to generate OTP.
 *
 * @param {interval}
 * @type {int}
 * @desc the time interval in seconds for OTP.
 * This defaults to 30.
 *
 * @return {OTP}
 */
function totp_gen(secret, interval = 30) {
  const totp = new TOTP(secret, interval);
  return totp;
}

export {
  hotp_gen as HOTP,
  totp_gen as TOTP,
  Base32,
  Util,
};
