import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default function WidgetPageHeader(props) {
  return (
    <View className='widget-header'>
      <Text className='widget-header-title'>{props.title}</Text>
      <View className='widget-header-line'></View>
      {
        !!props.desc && (
          <View className='widget-header-desc'>
            <Text>{props.desc}</Text>
          </View>
        )
      }

    </View>
  )
}
