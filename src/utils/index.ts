/**
 * @description 存入缓存
 * @param {string} key 标识符
 * @param {*} value 值
 */
const set = function (key: string, value: any) {
  // 如果是json对象则转为json字符串
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  sessionStorage.setItem(key, value)
}

/**
 * @desc 从缓存中获取
 * @param {string} key 标识符
 */
const get = function (key: string) {
  const value = sessionStorage.getItem(key)
  if (typeof value !== 'string') {
    return undefined
  }
  let result
  try {
    result = JSON.parse(value)
  } catch (e) {
    result = value || undefined
  }
  return result
}

/**
 * @description 移除
 * @param {string} key
 */
const remove = function (key: string) {
  sessionStorage.removeItem(key)
}

// 清除所有缓存
const clear = function () {
  sessionStorage.clear()
}

const session = {
  get, set, remove, clear
}

export default session
