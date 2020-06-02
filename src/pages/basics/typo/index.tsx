import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'


import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

import './index.scss'

export default function Typo() {
  return (
    <View className='widget-page widget-typo'>
      <WidgetPageHeader title='Typo 字体' />
      <View className='content'>
        <WidgetPagePanel title='示例'>
          <View className='t'>
            <View className='t-head'>
              <View className='at-row'>
                <View className='at-col'>类型</View>
                <View className='at-col at-col-2'>行高</View>
                <View className='at-col at-col-5'>用途</View>
              </View>
            </View>
            <View className='t-body'>
              <View className='at-row'>
                <View className='at-col h0'>H0，40PX</View>
                <View className='at-col at-col-2'>60PX</View>
                <View className='at-col at-col-5'>仅用于数字</View>
              </View>
              <View className='at-row'>
                <View className='at-col h1'>H1，36PX</View>
                <View className='at-col at-col-2'>54PX</View>
                <View className='at-col at-col-5'>大模块标题</View>
              </View>
              <View className='at-row'>
                <View className='at-col h2'>H2，32PX</View>
                <View className='at-col at-col-2'>48PX</View>
                <View className='at-col at-col-5'>常规标题</View>
              </View>
              <View className='at-row'>
                <View className='at-col h3'>H3，28PX</View>
                <View className='at-col at-col-2'>42PX</View>
                <View className='at-col at-col-5'>正文</View>
              </View>
              <View className='at-row'>
                <View className='at-col h4'>H4，24PX</View>
                <View className='at-col at-col-2'>36PX</View>
                <View className='at-col at-col-5'>辅助信息、注释</View>
              </View>
              <View className='at-row'>
                <View className='at-col h5'>H5，20PX</View>
                <View className='at-col at-col-2'>30PX</View>
                <View className='at-col at-col-5'>标签</View>
              </View>
            </View>
          </View>
        </WidgetPagePanel>
      </View>
    </View>
  )
}

Typo.config = {
  navigationBarTitleText: 'Typo 字体'
}
