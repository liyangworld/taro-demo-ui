import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtActivityIndicator, AtSwitch } from "@/plugins/taro-ui"

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

import './index.scss'

export default function ActivityIndicator() {

  const [isOpened, setIsOpened] = useState(true)

  return (
    <View className='widget-page widget-activity-indicator'>
      <WidgetPageHeader title='ActivityIndicator 活动指示器' />
      <View className='content'>
        <WidgetPagePanel title='自定义尺寸'>
          <View className='at-row content-pad'>
            <View className='at-col at-col-1'><AtActivityIndicator size={20} /></View>
            <View className='at-col at-col-1'><AtActivityIndicator size={24} /></View>
            <View className='at-col at-col-1'><AtActivityIndicator size={32} /></View>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='自定义颜色'>
          <View className='at-row content-pad'>
            <View className='at-col at-col-1'><AtActivityIndicator color='#13CE66' /></View>
            <View className='at-col at-col-1'><AtActivityIndicator color='#FF4949' /></View>
            <View className='at-col at-col-1'><AtActivityIndicator color='#C9C9C9' /></View>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='自定义文字'>
          <View className='at-row content-pad'>
            <View className='at-col at-col-1'><AtActivityIndicator content='加载中...' /></View>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='状态切换'>
          <View className='content-pad'>
            <AtSwitch
              border={false}
              title={isOpened ? '开启中' : '关闭中'}
              checked={isOpened}
              onChange={(val)=>{setIsOpened(val)}}
            />
            <AtActivityIndicator content='加载中...' isOpened={isOpened} />
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='垂直水平居中(父容器 position: relative)'>
          <View className='content-pad demo-center'>
            <AtActivityIndicator mode='center' content='加载中...' />
          </View>
        </WidgetPagePanel>
      </View>
    </View>
  )
}
ActivityIndicator.config = {
  navigationBarTitleText: 'ActivityIndicator 活动指示器'
}
