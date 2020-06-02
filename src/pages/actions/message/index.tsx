import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtMessage, AtButton } from "@/plugins/taro-ui"

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

import './index.scss'

type MessageType = 'info' | 'success' | 'error' | 'warning'

export default function Message() {
  function click(type?: MessageType) {
    Taro.atMessage({
      message: '消息通知',
      type: type,
    })
  }
  return (
    <View className='widget-page widget-message'>
      <WidgetPageHeader title='Message 消息通知' />
      <View className='content'>
        <AtMessage />
        <WidgetPagePanel title='基本案例'>
          <AtButton type='secondary' size='small' onClick={()=>{click()}}>普通消息</AtButton>
          <AtButton type='secondary' size='small' onClick={()=>{click('info')}}>提示消息</AtButton>
          <AtButton type='secondary' size='small' onClick={()=>{click('success')}}>成功消息</AtButton>
          <AtButton type='secondary' size='small' onClick={()=>{click('error')}}>错误消息</AtButton>
          <AtButton type='secondary' size='small' onClick={()=>{click('warning')}}>警告消息</AtButton>
        </WidgetPagePanel>
      </View>
    </View>
  )
}

Message.config = {
  navigationBarTitleText: 'Message 消息通知'
}
