/*
 * @Author: liyang
 * @Date: 2020-06-02 16:11:52
 * @LastEditTime: 2020-06-02 16:12:54
 * @LastEditors: liyang
 * @Description:
 */
import Taro from '@tarojs/taro'

export const platform = {
  isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
  isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY,
}
