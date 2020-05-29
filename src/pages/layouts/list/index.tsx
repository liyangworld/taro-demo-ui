import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtList, AtListItem } from "@/plugins/taro-ui"

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

import './index.scss'

export default function List() {
  return (
    <View className='widget-page'>
      <WidgetPageHeader title='List 列表' />
      <View className='content'>
        <WidgetPagePanel title='基本用法'>
          <AtList>
            <AtListItem title='标题文字' />
            <AtListItem title='标题文字' arrow='right' />
            <AtListItem title='标题文字' extraText='详细信息' arrow='right' />
            <AtListItem title='禁用状态' disabled extraText='详细信息' />
          </AtList>
        </WidgetPagePanel>
      </View>
    </View>
  )
}
