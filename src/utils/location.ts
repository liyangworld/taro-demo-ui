/*
 * @Author: liyang
 * @Date: 2020-05-29 13:49:43
 * @LastEditTime: 2020-05-29 14:05:27
 * @LastEditors: liyang
 * @Description: 地址相关
 */

export const getUrlParam = function (name: string, url?: string) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  let r;
  if (url) {
    r = url.split('?')[1].match(reg);
  } else {
    r = window.location.search.substr(1).match(reg);
  }
  if (r != null) {
    return unescape(r[2]);
  }
  return "";
};
