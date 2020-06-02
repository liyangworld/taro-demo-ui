import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtButton, AtToast } from "@/plugins/taro-ui"

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

import './index.scss'

const INIT_STATE = {
  image: '',
  icon: '',
  text: '',
  status: undefined,
  duration: 3000,
  hasMask: false,
  isOpened: false
}

export default function Toast() {
  const [state, setState] = useState(INIT_STATE)
  const {
    text,
    icon,
    status,
    isOpened,
    duration,
    image,
    hasMask
  } = state

  function handleClose() {
    setState({...state, isOpened: false})
  }
  function handleClick(params) {
    if (state.isOpened) {
      return setState(INIT_STATE)
    }
    setState({ ...INIT_STATE, isOpened: true, ...params })
  }
  return (
    <View className='widget-page widget-toast'>
      <WidgetPageHeader title='Toast 轻提示' />
      <View className='content'>
        <AtToast
          icon={icon}
          text={text}
          image={image}
          status={status}
          hasMask={hasMask}
          isOpened={isOpened}
          duration={duration}
          onClose={handleClose}
        />
        <WidgetPagePanel title='基本案例'>
          <AtButton type='secondary' size='small' onClick={()=>{handleClick({text: '文本内容'})}}>文本 Toast</AtButton>
          <AtButton type='secondary' size='small' onClick={()=>{handleClick({text: '文本内容', icon: 'analytics'})}}>文本 + ICON</AtButton>
        </WidgetPagePanel>
        <WidgetPagePanel title='自定义图片'>
          <AtButton type='secondary' size='small' onClick={()=>{handleClick({text: '凹凸实验室', image: 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png'})}}>自定义图片 Toast</AtButton>
        </WidgetPagePanel>
        <WidgetPagePanel title='添加遮罩层'>
          <AtButton type='secondary' size='small' onClick={()=>{handleClick({text: '透明遮罩层的作用在于不可点击下面的元素', hasMask: true})}}>添加遮罩层 Toast</AtButton>
        </WidgetPagePanel>
        <WidgetPagePanel title='不同状态'>
          <AtButton type='secondary' size='small' onClick={()=>{handleClick({text: '错误提示', hasMask: true, status: 'error'})}}>错误提示 Toast</AtButton>
          <AtButton type='secondary' size='small' onClick={()=>{handleClick({text: '正确提示', hasMask: true, status: 'success'})}}>正确提示 Toast</AtButton>
          <AtButton type='secondary' size='small' onClick={()=>{handleClick({text: '正在加载…', hasMask: true, status: 'loading'})}}>加载中 Toast</AtButton>
        </WidgetPagePanel>
      </View>
    </View>
  )
}

Toast.config = {
  navigationBarTitleText: 'Toast 轻提示'
}
