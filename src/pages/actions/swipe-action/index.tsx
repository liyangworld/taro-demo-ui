import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtSwipeAction, AtButton, AtList, AtListItem } from "@/plugins/taro-ui"

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

import './index.scss'

const options = [
  {
    text: '删除',
    style: {
      backgroundColor: '#6190E8'
    }
  },
  {
    text: '确认',
    style: {
      backgroundColor: '#FF4949'
    }
  }
]

const listPre = ([1, 2, 3, 4, 5]).map((a, i)=>{
  return {
    title: 'item' + i,
    isOpened: false,
    options: options
  }
})

export default function SwipeAction() {

  const [isOpened, setIsOpened] = useState(false)
  const [list, setList] = useState(listPre)

  function handleStatusClick(status?: boolean) {
    if (status === undefined) {
      setIsOpened(!isOpened)
    } else {
      setIsOpened(status)
    }
  }
  function handleClick(item, key: number, e) {
    console.log('触发了点击', item, key, e)
    Taro.showToast({
      icon: 'none',
      title: `点击了${item.text}按钮`
    })
  }
  function handleSingle(index: number) {
    const res = list.map((item, i)=>{
      return {
        ...item,
        isOpened: i === index
      }
    })
    setList(res)
  }
  return (
    <View className='widget-page widget-swipe-action'>
      <WidgetPageHeader title='SwipeAction 滑动操作' />
      <View className='content'>
        <WidgetPagePanel title='一般用法' hasPad>
          <AtSwipeAction options={options}>
            <View className='normal'>AtSwipeAction 一般使用场景</View>
          </AtSwipeAction>
        </WidgetPagePanel>
        <WidgetPagePanel title='禁止滑动' hasPad>
          <AtSwipeAction options={options} disabled>
            <View className='normal'>禁止滑动展示</View>
          </AtSwipeAction>
        </WidgetPagePanel>
        <WidgetPagePanel title='使用变量控制开关' hasPad>
          <AtButton size='small' onClick={()=>{handleStatusClick()}}>
            当前状态: {isOpened ? '开' : '关'}
          </AtButton>
          <AtSwipeAction 
            options={options} 
            isOpened={isOpened} 
            onClosed={()=>{handleStatusClick(false)}}
            onOpened={()=>{handleStatusClick(true)}}
          >
            <View className='normal'>使用变量控制开关</View>
          </AtSwipeAction>
        </WidgetPagePanel>
        <WidgetPagePanel title='自动关闭' hasPad>
          <AtSwipeAction options={options} autoClose onClick={handleClick}>
            <View className='normal'>点击按钮后自动关闭</View>
          </AtSwipeAction>
        </WidgetPagePanel>
        <WidgetPagePanel title='与List组件使用' hasPad>
          <AtList>
            <AtSwipeAction options={options}>
              <AtListItem title='Item1' />
            </AtSwipeAction>
            <AtSwipeAction options={options}>
              <AtListItem title='Item2' />
            </AtSwipeAction>
            <AtSwipeAction
              options={[
                {
                  text: '警告',
                  style: {
                    backgroundColor: '#FFC82C'
                  }
                }
              ]}
            >
              <AtListItem title='Item3123123123123' />
            </AtSwipeAction>
          </AtList>
        </WidgetPagePanel>

        <WidgetPagePanel title='控制只显示单个' hasPad>
        <AtList>
          {list.map((item, index) => (
            <AtSwipeAction
              key={item.title}
              options={item.options}
              isOpened={item.isOpened}
              onOpened={()=>{handleSingle(index)}}
            >
              <AtListItem title={item.title} />
            </AtSwipeAction>
          ))}
          </AtList>
        </WidgetPagePanel>
      </View>
    </View>
  )
}

SwipeAction.config = {
  navigationBarTitleText: 'SwipeAction 滑动操作'
}
