/*
 * @Author: liyang
 * @Date: 2020-05-29 11:28:51
 * @LastEditTime: 2020-06-02 18:26:44
 * @LastEditors: liyang
 * @Description: 各项菜单与对应页面配置
 */

import iconBasic from '../assets/img/icon-list-basic.png';
import iconAction from '../assets/img/icon-list-action.png';
import iconLayout from '../assets/img/icon-list-layout.png';
// import iconForm from '../assets/img/icon-list-form.png';
// import iconHOC from '../assets/img/icon-list-hoc.png';
// import iconNavigation from '../assets/img/icon-list-navigation.png';
// import iconView from '../assets/img/icon-list-view.png';

 export default [
   {
     type: 'basic',
     title: '基础',
     desc: '包含颜色、文本、图标等',
     icon: iconBasic,
     children: [
      {
        nameEn: 'Color',
        nameCh: '颜色',
        path: '/pages/basics/color/index'
      },
      {
        nameEn: 'Icon',
        nameCh: '图标',
        path: '/pages/basics/icon/index'
      },
      {
        nameEn: 'Typo',
        nameCh: '字体',
        path: '/pages/basics/typo/index'
      },
      {
        nameEn: 'Button',
        nameCh: '按钮',
        path: '/pages/basics/button/index'
      },
     ]
   },
   {
    type: 'layout',
    title: '布局',
    desc: '包含列表、浮层、卡片等',
    icon: iconLayout,
    children: [
      {
        nameEn: 'Flex',
        nameCh: '弹性布局',
        path: '/pages/layouts/flex/index'
      },
      {
        nameEn: 'Grid',
        nameCh: '栅格',
        path: '/pages/layouts/grid/index'
      },
      {
        nameEn: 'List',
        nameCh: '列表',
        path: '/pages/layouts/list/index'
      },
      {
        nameEn: 'Card',
        nameCh: '卡片',
        path: '/pages/layouts/card/index'
      },
      {
        nameEn: 'FloatLayout',
        nameCh: '浮动弹层',
        path: '/pages/layouts/floatLayout/index'
      },
      {
        nameEn: 'Accordion',
        nameCh: '手风琴',
        path: '/pages/layouts/accordion/index'
      }
    ]
  },
  {
    type: 'action',
     title: '操作反馈',
     desc: '包含对话框、进度条、动作面板等',
     icon: iconAction,
     children: [
      {
        nameEn: 'ActionSheet',
        nameCh: '动作面板',
        path: '/pages/actions/action-sheet/index'
      },
      {
        nameEn: 'ActivityIndicator',
        nameCh: '活动指示器',
        path: '/pages/actions/activity-indicator/index'
      },
      {
        nameEn: 'Progress',
        nameCh: '进度条',
        path: '/pages/actions/progress/index'
      },
      {
        nameEn: 'Toast',
        nameCh: '轻提示',
        path: '/pages/actions/toast/index'
      },
      {
        nameEn: 'Message',
        nameCh: '消息通知',
        path: '/pages/actions/message/index'
      },
      {
        nameEn: 'SwipeAction',
        nameCh: '滑动操作',
        path: '/pages/actions/swipe-action/index'
      },
     ]
  }
 ]
