import JSEncrypt from "jsencrypt";

export default {
  /**
   * RSA加密
   * @param code 加了盐的密码
   * @param key 公钥，不写的话直接从环境变量中获取PUB_KEY
   */
  encryptByRSA(code, key) {
    let encryptor = new JSEncrypt();
    encryptor.setPublicKey(key);
    return encryptor.encrypt(code);
  },

  /**
   * 前端通用加密方法
   * @param code 密码
   * @param salt 盐
   * @param key 公钥，直接用其调用encryptByRSA，参考方法注释
   */
  codeEncrypt(code, salt, key) {
    let rsaStr = this.encryptByRSA(code + salt, key);
    return rsaStr;
  }
}
