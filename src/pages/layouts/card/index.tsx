import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtCard } from "@/plugins/taro-ui"

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

import './index.scss'

export default function Card() {
  return (
    <View className='widget-page widget-card'>
      <WidgetPageHeader title='Card 卡片' />
      <View className='content'>
        <WidgetPagePanel title='基本用法'>
          <AtCard
            note='小Tips'
            extra='额外信息'
            title='这是个标题'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          >
            这也是内容区 可以随意定义功能
          </AtCard>
        </WidgetPagePanel>
        <WidgetPagePanel title='通栏卡片'>
          <AtCard
            isFull
            note='小Tips'
            extra='额外信息'
            extraStyle={{color: '#00f'}}
            title='这是个标题'
            icon={{ value: 'tags', color: '#77a1fd' }}
          >
            这也是内容区 可以随意定义功能
          </AtCard>
        </WidgetPagePanel>
      </View>
    </View>
  )
}

Card.config = {
  navigationBarTitleText: 'Card 卡片'
}
