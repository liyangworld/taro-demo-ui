import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { AtButton, AtFab } from "@/plugins/taro-ui"

import { platform } from "@/constants/env"

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

import './index.scss'

export default function Button() {
  function click(content? : string) {
    Taro.showModal({
      content: content || '您点击了按钮！',
      showCancel: false
    })
  }
  return (
    <View className='widget-page widget-button'>
      <WidgetPageHeader title='Button 按钮' desc='点击时先判断 disabled 属性。' />
      <View className='content'>
        <WidgetPagePanel title='主操作'>
          <View className='panel-content panel-pad'>
            <AtButton type='primary' onClick={()=>{click()}}>主操作按钮</AtButton>
            <AtButton type='primary' loading onClick={()=>{click()}}>Loading</AtButton>
            <AtButton type='primary' disabled onClick={()=>{click()}}>不可操作</AtButton>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='次要操作'>
          <View className='panel-content panel-pad'>
            <AtButton type='secondary' onClick={()=>{click()}}>次要操作按钮</AtButton>
            <AtButton type='secondary' loading onClick={()=>{click()}}>Loading</AtButton>
            <AtButton type='secondary' disabled onClick={()=>{click()}}>不可操作</AtButton>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='次次要操作'>
          <View className='panel-content panel-pad'>
            <AtButton onClick={()=>{click()}}>次次要操作按钮</AtButton>
            <AtButton loading onClick={()=>{click()}}>Loading</AtButton>
            <AtButton disabled onClick={()=>{click()}}>不可操作</AtButton>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='通栏按钮'>
          <View className='panel-content'>
            <AtButton full type='primary' onClick={()=>{click()}}>主操作按钮</AtButton>
            <AtButton full type='secondary' onClick={()=>{click()}}>次要操作按钮</AtButton>
            <AtButton full onClick={()=>{click()}}>次次要操作按钮</AtButton>
            <AtButton full disabled>不可操作</AtButton>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='小按钮'>
          <View className='panel-content panel-pad'>
            <View className='at-row'>
              <AtButton type='primary' size='small'>按钮</AtButton>
              <AtButton type='secondary' size='small'>按钮</AtButton>
              <AtButton size='small'>按钮</AtButton>
            </View>
            <View className='at-row'>
              <AtButton loading type='primary' size='small'></AtButton>
              <AtButton loading type='secondary' size='small'></AtButton>
              <AtButton loading size='small'></AtButton>
            </View>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='圆角按钮'>
          <View className='panel-content panel-pad'>
            <View className='at-row'>
              <AtButton circle type='primary' size='small'>按钮</AtButton>
              <AtButton circle type='secondary' size='small'>按钮</AtButton>
              <AtButton circle size='small'>按钮</AtButton>
            </View>
            <View className='at-row'>
              <AtButton circle loading type='primary' size='small'></AtButton>
              <AtButton circle loading type='secondary' size='small'></AtButton>
              <AtButton circle loading size='small'></AtButton>
            </View>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='浮动按钮'>
          <View className='panel-content panel-pad'>
            右侧是浮动操作按钮👉
          </View>
          <View className='fab-demo-wrap'>
            <AtFab size='small' onClick={()=>{click('点击了浮动按钮')}}>
              <Text className='at-fab__icon at-icon at-icon-menu'></Text>
            </AtFab>
          </View>
        </WidgetPagePanel>

        {/* 微信小程序 button 属性（仅部分支持） */}
        {
          platform.isWEAPP && (
            <WidgetPagePanel title='微信小程序 button 属性'>
              <View className='panel-content panel-pad'>
                <AtButton openType='share' type='primary'>分享</AtButton>
                <AtButton openType='getUserInfo' type='primary'>登录授权</AtButton>
                <AtButton openType='contact' type='secondary'>联系客服</AtButton>
                <AtButton openType='openSetting' type='secondary'>打开设置</AtButton>
              </View>
            </WidgetPagePanel>
          )
        }

        {/* 支付宝小程序 button 属性（仅部分支持） */}
        {
          platform.isALIPAY && (
            <WidgetPagePanel title='支付宝小程序 button 属性'>
              <View className='panel-content panel-pad'>
                <AtButton openType='share' type='primary'>分享</AtButton>
                <AtButton openType='getAuthorize' type='primary'>登录授权</AtButton>
              </View>
            </WidgetPagePanel>
          )
        }

      </View>
    </View>
  )
}

Button.config = {
  navigationBarTitleText: 'Button 按钮'
}
