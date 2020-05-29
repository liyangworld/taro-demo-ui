import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

// import { AtButton } from "taro-ui"
import { AtButton } from "@/plugins/taro-ui"

import logoImg from '../../assets/img/logo_taro.png'

import './index.scss'

export default function Index() {
  return (
    <View className='page page-index'>
      <View className='logo'>
        <Image src={logoImg} className='img' mode='widthFix' />
      </View>
      <View><Text>Taro Demo UI</Text></View>
      <View><AtButton>ffff</AtButton></View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}
