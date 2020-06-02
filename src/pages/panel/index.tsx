import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import { AtList, AtListItem } from "@/plugins/taro-ui"


import menus from "@/constants/menuConfig";
import { getUrlParam } from "@/utils/location";

import './index.scss'

export default function Panel() {

  let menuIndex: string|number = getUrlParam('i', window.location.href)
  if (menuIndex) {
    menuIndex = Number(menuIndex)
  } else {
    menuIndex = 0
  }
  const menuItem = menus[menuIndex]

  function gotoPage(menu) {
    if (menu.path) {
      Taro.navigateTo({
        url: menu.path
      })
    }
  }
  return (
    <View className='panel'>
      <View className='panel-header'>
        <View className='icon-wrap'>
          <Image src={menuItem.icon} className='img' mode='widthFix' />
        </View>
        <Text className='title'>{menuItem.title}</Text>
      </View>
      <View className='panel-content'>
        <AtList>
          {
            menuItem.children.map((menu, index) => {
              return (
                <AtListItem
                  key={index}
                  arrow='right'
                  title={menu.nameEn + ' ' + menu.nameCh}
                  onClick={()=>{gotoPage(menu)}}
                />
              )
            })
          }
        </AtList>
      </View>

    </View>
  )
}

Panel.config = {
  navigationBarTitleText: 'UI-组件'
}
