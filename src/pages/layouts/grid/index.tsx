import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtGrid } from "@/plugins/taro-ui"

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

import './index.scss'

const data = [
  {
    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
    value: '领取中心'
  },
  {
    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
    value: '找折扣'
  },
  {
    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
    value: '领会员'
  },
  {
    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
    value: '新品首发'
  },
  {
    image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
    value: '领京豆'
  },
  {
    image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
    value: '手机馆'
  },
  {
    image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
    value: '支持icon'
  }
]

export default function Grid() {
  return (
    <View className='widget-page widget-grid'>
      <WidgetPageHeader title='Grid 栅格布局' desc='根据data数据计算行列数，使用flex布局' />
      <WidgetPagePanel title='正方形案例'>
        <AtGrid mode='square' data={data} columnNum={4} />
      </WidgetPagePanel>

      <WidgetPagePanel title='矩形形案例'>
        <AtGrid mode='rect' data={data} />
      </WidgetPagePanel>
      <WidgetPagePanel title='没有边框'>
        <AtGrid mode='rect' data={data} hasBorder={false} />
      </WidgetPagePanel>
    </View>
  )
}

Grid.config = {
  navigationBarTitleText: 'Grid 栅格布局'
}
