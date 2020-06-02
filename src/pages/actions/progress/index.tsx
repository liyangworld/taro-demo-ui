import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtProgress, AtButton, AtIcon } from "@/plugins/taro-ui"

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

import './index.scss'

const OFFSET = 15

export default function Progress() {
  const [percent, setPercent] = useState(0)
  function reduce() {
    if (percent === 0) {
      return
    }
    const res = percent - OFFSET < 0 ? 0 : percent - OFFSET
    setPercent(res)
  }
  function increase() {
    if (percent === 100) {
      return
    }
    const res = percent + OFFSET > 100 ? 100 : percent + OFFSET
    setPercent(res)
  }
  return (
    <View className='widget-page widget-progress'>
      <WidgetPageHeader title='Progress 进度条' />
      <View className='content'>
        <WidgetPagePanel title='基础进度条' hasPad>
          <AtProgress percent={25}></AtProgress>
          <AtProgress percent={50}></AtProgress>
          <AtProgress percent={75}></AtProgress>
        </WidgetPagePanel>
        <WidgetPagePanel title='隐藏进度文案' hasPad>
          <AtProgress percent={25} isHidePercent></AtProgress>
          <AtProgress percent={75} isHidePercent></AtProgress>
        </WidgetPagePanel>
        <WidgetPagePanel title='自定义进度条线宽(px)' hasPad>
          <AtProgress percent={25} strokeWidth={6}></AtProgress>
          <AtProgress percent={50} strokeWidth={8}></AtProgress>
          <AtProgress percent={75} strokeWidth={10}></AtProgress>
        </WidgetPagePanel>
        <WidgetPagePanel title='自定义颜色' hasPad>
          <AtProgress percent={25} color='#FF4949'></AtProgress>
          <AtProgress percent={50} color='#13CE66'></AtProgress>
          <AtProgress percent={75} color='#FFC82C'></AtProgress>
        </WidgetPagePanel>
        <WidgetPagePanel title='不同的状态' hasPad>
          <AtProgress percent={25}></AtProgress>
          <AtProgress percent={50} status='progress'></AtProgress>
          <AtProgress percent={75} status='error'></AtProgress>
          <AtProgress percent={100} status='success'></AtProgress>
        </WidgetPagePanel>
        <WidgetPagePanel title='实际案例' hasPad>
          <AtProgress percent={percent}></AtProgress>
          <View className='at-row'>
            <AtButton size='small' onClick={reduce}>
                <AtIcon value='subtract' size={12} />
              </AtButton>
            <AtButton size='small' onClick={increase}>
                <AtIcon value='add' size={12} />
              </AtButton>
          </View>
        </WidgetPagePanel>
      </View>
    </View>
  )
}
Progress.config = {
  navigationBarTitleText: 'Progress 进度条'
}
