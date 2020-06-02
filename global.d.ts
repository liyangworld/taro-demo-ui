/*
 * @Author: liyang
 * @Date: 2020-05-28 17:14:57
 * @LastEditTime: 2020-06-02 17:45:41
 * @LastEditors: liyang
 * @Description:
 */
declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}
