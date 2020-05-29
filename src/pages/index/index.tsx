import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

// import { AtButton } from "taro-ui"
// import { AtButton } from "@/plugins/taro-ui"

import menus from "@/constants/menuConfig";

import logoImg from '../../assets/img/logo_taro.png'

import './index.scss'

export default function Index() {
  function goToPanel(index) {
    Taro.navigateTo({
      url: `/pages/panel/index?i=${index}`
    })
  }
  return (
    <View className='page page-index'>
      <View className='logo'>
        <Image src={logoImg} className='img' mode='widthFix' />
        <View className='logo-title'><Text>Taro Demo UI</Text></View>
      </View>
      <View className='menu-list-wrap'>
        {
          menus.map((menu, index) => {
            return (
              <View key={index} className='menu-item-wrap' onClick={()=>{goToPanel(index)}}>
                <View className='menu-item-icon left'></View>
                <View className='menu-item-content'>
                  <Text className='title'>{menu.title}</Text>
                  <Text className='desc'>{menu.desc}</Text>
                </View>
                <View className='menu-item-icon right'></View>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}
