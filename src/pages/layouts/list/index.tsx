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
        <WidgetPagePanel title='包含描述信息'>
          <AtList>
            <AtListItem title='标题文字' note='描述信息' />
            <AtListItem title='标题文字' note='描述信息' arrow='right' />
            <AtListItem
              arrow='right'
              note='描述信息'
              title='标题文字标题文字标题文字标题文字标题文字'
              extraText='详细信息详细信息详细信息详细信息'
            />
          </AtList>
        </WidgetPagePanel>
        <WidgetPagePanel title='包含图片'>
          <AtList>
            <AtListItem
              title='标题文字'
              arrow='right'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              extraText='详细信息'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
          </AtList>
        </WidgetPagePanel>
        <WidgetPagePanel title='支持图标'>
          <AtList>
            <AtListItem
              title='标题文字'
              note='描述信息'
              arrow='right'
              iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              extraText='详细信息'
              arrow='right'
              iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark', }}
            />
          </AtList>
        </WidgetPagePanel>
        <WidgetPagePanel title='无边框'>
          <AtList hasBorder={false}>
            <AtListItem
              isSwitch
              title='标题文字'
              hasBorder={false}
            />
            <AtListItem
              isSwitch
              title='标题文字'
              hasBorder={false}
            />
          </AtList>
        </WidgetPagePanel>
        <WidgetPagePanel title='Switch 按钮列表'>
          <AtList hasBorder={false}>
            <AtListItem
              isSwitch
              title='标题文字'
              hasBorder={false}
            />
            <AtListItem
              isSwitch
              title='标题文字'
              hasBorder={false}
              switchIsCheck
            />
            <AtListItem
              isSwitch
              title='禁用状态'
              hasBorder={false}
              switchIsCheck
              disabled
            />
          </AtList>
        </WidgetPagePanel>
      </View>
    </View>
  )
}

List.config = {
  navigationBarTitleText: 'List 列表'
}
