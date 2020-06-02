import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import WidgetPageHeader from '@/components/widgetPageHeader'
import WidgetPagePanel from '@/components/widgetPagePanel'

import colors from './colors'
import ColorItem from './ColorItem'

import './index.scss'

export default function Color() {
  return (
    <View className='widget-page widget-card'>
      <WidgetPageHeader title='Color 颜色' />
      <View className='content'>
        {
          colors.map((colorRow, index)=>{
            return (
              <WidgetPagePanel title={colorRow.type} key={index}>
                <View className='at-row at-row--wrap'>
                  {
                    colorRow.data.map((color, i)=>{
                      return (
                        <View className='at-col at-col-4' key={i}>
                          <ColorItem color={color} />
                        </View>
                      )
                    })
                  }
                </View>
              </WidgetPagePanel>
            )
          })
        }

      </View>
    </View>
  )
}

Color.config = {
  navigationBarTitleText: 'Color 颜色'
}
