import CryptoJs from 'crypto-js'

export default {
  // DES加密
  encryptByDES: function (message, key) {
    //debugger
    const keyHex = CryptoJs.enc.Utf8.parse(key)
    const encrypted = CryptoJs.TripleDES.encrypt(message, keyHex, {
      mode: CryptoJs.mode.ECB,
      padding: CryptoJs.pad.Pkcs7
    })
    return encrypted.toString()
  },
  // DES解密
  decryptByDES (ciphertext, key) {
    const keyHex = CryptoJs.enc.Base64.parse(key)
    const decrypted = CryptoJs.TripleDES.decrypt({
      ciphertext: CryptoJs.enc.Base64.parse(ciphertext)
    }, keyHex, {
      mode: CryptoJs.mode.ECB,
      padding: CryptoJs.pad.Pkcs7
    })
    return decrypted.toString(CryptoJs.enc.Utf8)
  }
}
