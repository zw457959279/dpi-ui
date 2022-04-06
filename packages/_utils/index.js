import { isObject } from './is'

// 空函数
export const noop = () => {}

/**
 * 将对象作为参数添加到URL中
 * @param baseUrl url
 * @param obj 参数
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams (baseUrl, obj) {
  let parameters = ''
  for (const key in obj) {
    parameters += `${key}=${encodeURIComponent(obj[key])}&`
  }
  parameters = parameters.replace(/&$/, '')
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters
}

/**
 * @description: 深度合并
 * @param {Object} src 源对象（原数据）
 * @param {Object} target 目标对象（新数据）
 * @return {Object} src 源对象
 */
export function deepMerge (src, target) {
  let key
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  return src
}
