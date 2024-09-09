/**
 * @name 获取url的参数对象
 */
export const getUrlParams = () => {
  const searchString = location.search
  return new URLSearchParams(searchString)
}

import Cookies from 'js-cookie'
export const cookieUtils = {
  set(key: string, value: string, expires?: number | Date) {
    Cookies.set(key, value, { expires })
  },

  get(key: string) {
    return Cookies.get(key)
  },

  getAll() {
    return Cookies.get()
  },

  remove(key: string) {
    Cookies.remove(key)
  },

  removeAll() {
    const cookies = this.getAll()

    for (const key in cookies) {
      console.log(key)

      // if (Object.hasOwn(cookies, key)) {
      //   this.remove(key)
      // }
    }
  }
}

export const tokenUtils = {
  TOKEN_KEY: 'bearer',

  get: () => {
    const token = storageUtils.get('token')
    return cookieUtils.get('token') || token
  },

  set(token: string) {
    storageUtils.set('token', token)
    cookieUtils.set('token', token)
  },

  clear() {
    storageUtils.remove('token')
    cookieUtils.remove('token')
  }
}

export const storageUtils = {
  get(key: string, useSessionStorage?: boolean) {
    const data = useSessionStorage ? sessionStorage.getItem(key) : localStorage.getItem(key)

    if (data) {
      return JSON.parse(data)
    }

    return null
  },

  set(key: string, data: any, useSessionStorage?: boolean) {
    if (useSessionStorage) {
      sessionStorage.setItem(key, JSON.stringify(data))
    } else {
      localStorage.setItem(key, JSON.stringify(data))
    }
  },

  remove(key: string, useSessionStorage?: boolean) {
    if (useSessionStorage) {
      sessionStorage.removeItem(key)
    } else {
      localStorage.removeItem(key)
    }
  },

  removeAll() {
    sessionStorage.clear()
    localStorage.clear()
  }
}

import CryptoJS from 'crypto-js'
export const dataUtils = {
  /**
   * @desc 数据加密函数
   *
   * @param  {String} str - 未加密字符串
   * @param  {String} key - 加密秘钥（16位）
   * @param  {String} iv  - 加密向量（16位）
   *
   * @return {String}     - 加密密文字符串
   */
  encrypt(str: string, key = 'e2d2885ddeec22db', iv = 'deec22db2e9c77b6') {
    const _key = CryptoJS.enc.Utf8.parse(key)
    const _iv = CryptoJS.enc.Utf8.parse(iv)

    return CryptoJS.AES.encrypt(str, _key, {
      iv: _iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString()
  },

  /**
   * @desc 数据解密函数
   *
   * @param  {String} str - 已加密密文
   * @param  {String} key - 加密秘钥（16位）
   * @param  {String} iv  - 加密向量（16位）
   *
   * @return {String}     - 解密之后的JSON字符串
   */
  decrypt(str: string, key = 'e2d2885ddeec22db', iv = 'deec22db2e9c77b6') {
    const _key = CryptoJS.enc.Utf8.parse(key)
    const _iv = CryptoJS.enc.Utf8.parse(iv)

    return CryptoJS.AES.decrypt(str, _key, {
      iv: _iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8)
  }
}
