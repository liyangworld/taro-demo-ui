import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";

import WidgetPageHeader from "@/components/widgetPageHeader";
import WidgetPagePanel from "@/components/widgetPagePanel";

import "./index.scss";

export default function Flex() {
  return (
    <View className='widget-page widget-flex'>
      <WidgetPageHeader title='Flex 弹性布局' desc='行排列，align-items = stretch，内置12栅格系统（使用百分比）' />
      <View className='content'>
        <WidgetPagePanel title='基本用法'>
          <View className='at-row'>
            <View className='at-col'>A</View>
            <View className='at-col'>B</View>
            <View className='at-col'>C</View>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='使用栅格化（12栅格系统百分比）'>
          <View className='at-row'>
            <View className='at-col at-col-3'>A</View>
            <View className='at-col at-col-6'>B</View>
            <View className='at-col at-col-2'>C</View>
            <View className='at-col at-col-1'>D</View>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='使用栅格化（margin偏移）'>
          <View className='at-row'>
            <View className='at-col at-col__offset-2'>A</View>
            <View className='at-col at-col__offset-3'>B</View>
            <View className='at-col'>C</View>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='超出换行'>
          <View className='at-row at-row--wrap'>
            <View className='at-col at-col-4'>A</View>
            <View className='at-col at-col-4'>B</View>
            <View className='at-col at-col-4'>C</View>
            <View className='at-col at-col-4'>D</View>
            <View className='at-col at-col-4'>E</View>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='宽度根据内容撑开'>
          <View className='at-row'>
            <View className='at-col at-col-1 at-col--auto'>
              被内容撑开开开开
            </View>
            <View className='at-col'>B</View>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='内容自动换行'>
          <View className='at-row'>
            <View className='at-col at-col-1 at-col--wrap'>
              内容自动换行行行
            </View>
            <View className='at-col'>B</View>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='侧轴方向的对齐方式'>
          <View className='at-row'>
            <View style='height:100px' className='at-col'>A</View>
            <View className='at-col'>默认对齐方式 -- stretch</View>
          </View>
          <View className='at-row at-row__align--start'>
            <View style='height:100px' className='at-col'>B</View>
            <View className='at-col'>顶部对齐 -- start</View>
          </View>
          <View className='at-row at-row__align--center'>
            <View style='height:100px' className='at-col'>C</View>
            <View className='at-col'>居中对齐 -- center</View>
          </View>
          <View className='at-row at-row__align--end'>
            <View style='height:100px' className='at-col'>D</View>
            <View className='at-col'>底部对齐 -- end</View>
          </View>
        </WidgetPagePanel>
        <WidgetPagePanel title='主轴方向的排列方式'>
        <View className='at-row'>
          <View className='at-col at-col-5'>默认</View>
            <View className='at-col at-col-5'>Start</View>
          </View>
          <View className='at-row at-row__justify--end'>
            <View className='at-col at-col-5'>底部排列</View>
            <View className='at-col at-col-5'>End</View>
          </View>
          <View className='at-row at-row__justify--center'>
            <View className='at-col at-col-5'>居中排列</View>
            <View className='at-col at-col-5'>Center</View>
          </View>
          <View className='at-row at-row__justify--between'>
            <View className='at-col at-col-5'>左右排列</View>
            <View className='at-col at-col-5'>Between</View>
          </View>
          <View className='at-row at-row__justify--around'>
            <View className='at-col at-col-5'>平均排列</View>
            <View className='at-col at-col-5'>Around</View>
          </View>
        </WidgetPagePanel>
      </View>
    </View>
  );
}

Flex.config = {
  navigationBarTitleText: "Flex 弹性布局"
};
