import Taro, {useState} from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtFloatLayout, AtButton } from "@/plugins/taro-ui"

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

import './index.scss'

export default function FloatLayout() {
  const [basicShow, setBasicShow] = useState(false)
  const [maxHeightShow, setMaxHeightShow] = useState(false)

  return (
    <View className='widget-page widget-floatlayout'>
      <WidgetPageHeader title='FloatLayout 浮动弹层' desc='position: fixed; visibility: hidden;' />
      <View className='content'>
        <WidgetPagePanel title='基本用法'>
          <AtButton type='secondary' size='small' onClick={()=>{setBasicShow(true)}}>打开 Float Layout</AtButton>
        </WidgetPagePanel>
        <WidgetPagePanel title='最大高度'>
          <AtButton type='secondary' size='small' onClick={()=>{setMaxHeightShow(true)}}>打开 Float Layout</AtButton>
        </WidgetPagePanel>
      </View>
      <AtFloatLayout isOpened={basicShow} title='这是个标题' onClose={()=>{setBasicShow(false)}}>
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
      </AtFloatLayout>
      <AtFloatLayout isOpened={maxHeightShow} title='样式中有个默认最大高度，可覆盖' onClose={()=>{setMaxHeightShow(false)}}>
        <View className='content-wrapper'>
          《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
          封笔的诗人与智力障碍的儿子一起生活；
          绝望的备胎照顾梦中情人与别人的孩子
          外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
          指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
          邻居当中有个永生不死的老头 …
          然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
          《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
          封笔的诗人与智力障碍的儿子一起生活；
          绝望的备胎照顾梦中情人与别人的孩子
          外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
          指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
          邻居当中有个永生不死的老头 …
          然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
          然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
          然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
          然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
          然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
          然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
          然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
          然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
          然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
        </View>
      </AtFloatLayout>
    </View>
  )
}

FloatLayout.config = {
  navigationBarTitleText: 'FloatLayout 浮动弹层'
}
