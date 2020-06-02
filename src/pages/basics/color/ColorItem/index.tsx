import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default function ColorItem(props) {
  const {color} = props
  return (
    <View className='color-item'>
      <View className='color-circle' style={{backgroundColor: color.hex}}>
        <View className='color-circle--1'></View>
        <View className='color-circle--2' style={{borderColor: color.hex}}></View>
      </View>
      <Text>{color.name}</Text>
      <Text>{color.hex}</Text>
    </View>
  )
}
