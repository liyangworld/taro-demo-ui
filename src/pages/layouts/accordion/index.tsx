import Taro, {useState} from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtAccordion, AtList, AtListItem } from "@/plugins/taro-ui"

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

export default function Accordion() {
  const [basicOpen, setBasicOpen] = useState(true)
  const [fullOpen, setFullOpen] = useState(false)
  return (
    <View className='widget-page widget-card'>
      <WidgetPageHeader title='Accordion 手风琴' />
      <View className='content'>
        <WidgetPagePanel title='基本用法'>
          <AtAccordion
            open={basicOpen}
            onClick={(val)=>{setBasicOpen(val)}}
            title='标题一'
          >
            <View style={{height: '200px', padding: '0 20px', background: '#f90'}}>普通内容</View>
          </AtAccordion>
        </WidgetPagePanel>
        <WidgetPagePanel title='完整用法' >
          <AtAccordion
            open={fullOpen}
            onClick={(val)=>{setFullOpen(val)}}
            title='标题一'
            icon={{ value: 'tags', color: 'red', size: '15' }}
            note='描述信息'
          >
            <AtList hasBorder={false}>
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
          </AtAccordion>
        </WidgetPagePanel>
      </View>
    </View>
  )
}

Accordion.config = {
  navigationBarTitleText: 'Accordion 手风琴'
}
