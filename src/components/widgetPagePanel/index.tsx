import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default function WidgetPagePanel(props) {
  return (
    <View className='widget-panel'>
      <View className='widget-panel-header'>
        <View className='widget-header-line'></View>
        <Text className='widget-header-title'>{props.title}</Text>
      </View>
      <View className='widget-panel-content'>
        {props.children}
      </View>
    </View>
  )
}
