import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { AtIcon } from "@/plugins/taro-ui"

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'
import icons from './icons'

import './index.scss'

const iconTypes = [
  {
    title: '主要',
    type: 'main'
  },
  {
    title: '文件',
    type: 'file'
  },
  {
    title: '文本',
    type: 'text'
  },
  {
    title: '箭头',
    type: 'arrow'
  },
  {
    title: '媒体控制',
    type: 'media'
  },
  {
    title: '多媒体',
    type: 'photo'
  },
  {
    title: 'Logo',
    type: 'logo'
  }
]

export default function Icon() {
  return (
    <View className='widget-page widget-icon'>
      <WidgetPageHeader title='Icon 图标' />
      {
        iconTypes.map((iconType, index)=>{
          return (
            <WidgetPagePanel title={iconType.title} key={index}>
              <View className='at-row at-row--wrap'>
                {
                  icons[iconType.type].map((icon, i)=>{
                    return (
                      <View className='at-col at-col-4' key={i}>
                        <View className='icon-wrap'>
                          <AtIcon value={icon} size='30' color='#999'></AtIcon>
                          <Text>{icon}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            </WidgetPagePanel>
          )
        })
      }
    </View>
  )
}

Icon.config = {
  navigationBarTitleText: 'Icon 图标'
}
