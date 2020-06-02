import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { AtActionSheet, AtActionSheetItem, AtButton } from "@/plugins/taro-ui"

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

import './index.scss'


export default function ActionSheet() {
  const [isOpened1, setIsOpened1] = useState(false)
  const [isOpened2, setIsOpened2] = useState(false)
  const [isOpened3, setIsOpened3] = useState(false)

  function open(i) {
    if (i === 1) {
      setIsOpened1(true)
    } else if (i === 2) {
      setIsOpened2(true)
    } else if (i === 3) {
      setIsOpened3(true)
    }
  }
  function close(i) {
    if (i === 1) {
      setIsOpened1(false)
    } else if (i === 2) {
      setIsOpened2(false)
    } else if (i === 3) {
      setIsOpened3(false)
    }
  }
  function showToast(title: string) {
    Taro.showToast({
      icon: 'none',
      title: title
    })
  }
  return (
    <View className='widget-page widget-action-sheet'>
      <WidgetPageHeader title='ActionSheet 动作面板' />
      <View className='content'>

        <WidgetPagePanel title='无标题'>
          <AtButton size='small' onClick={()=>{open(1)}}>打开 ActionSheet</AtButton>
        </WidgetPagePanel>
        <WidgetPagePanel title='含标题'>
          <AtButton size='small' onClick={()=>{open(2)}}>打开 ActionSheet</AtButton>
        </WidgetPagePanel>
        <WidgetPagePanel title='自定义选项'>
          <AtButton size='small' onClick={()=>{open(3)}}>打开 ActionSheet</AtButton>
        </WidgetPagePanel>


        <AtActionSheet
          cancelText='取消'
          isOpened={isOpened1}
          onClose={()=>{close(1)}}
        >
          <AtActionSheetItem onClick={()=>{showToast('点击了按钮一')}}>
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem onClick={()=>{showToast('点击了按钮二')}}>
            按钮二
          </AtActionSheetItem>
        </AtActionSheet>

        <AtActionSheet
          cancelText='取消'
          title='清除位置信息后， 别人将不能查看到你'
          isOpened={isOpened2}
          onClose={()=>{close(2)}}
        >
          <AtActionSheetItem onClick={()=>{showToast('点击了按钮一')}}>
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem onClick={()=>{showToast('点击了按钮二')}}>
            按钮二
          </AtActionSheetItem>
        </AtActionSheet>

        <AtActionSheet
          cancelText='取消'
          title='清除位置信息后， 别人将不能查看到你'
          isOpened={isOpened3}
          onClose={()=>{close(3)}}
          onCancel={()=>{showToast('点击了取消按钮')}}
        >
          <AtActionSheetItem onClick={()=>{showToast('点击了按钮一')}}>
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem onClick={()=>{showToast('点击了按钮二')}}>
            按钮二
          </AtActionSheetItem>
          <AtActionSheetItem onClick={()=>{showToast('成功清除位置')}}>
            <Text className='danger'>清除位置信息并退出</Text>
          </AtActionSheetItem>
        </AtActionSheet>
      </View>
    </View>
  )
}

ActionSheet.config = {
  navigationBarTitleText: 'ActionSheet 动作面板'
}
