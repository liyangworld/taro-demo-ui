import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtToast } from "@/plugins/taro-ui"

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

import './index.scss'

export default function Toast() {
  return (
    <View className='widget-page widget-toast'>
      <WidgetPageHeader title='Toast 轻提示' />
      <View className='content'>
        <WidgetPagePanel title='基本用法'>
          <AtToast isOpened text='{text}' icon='{icon}'></AtToast>
        </WidgetPagePanel>
      </View>
    </View>
  )
}

Toast.config = {
  navigationBarTitleText: 'Toast 轻提示'
}
