/*
 * @Author: liyang
 * @Date: 2020-05-29 11:28:51
 * @LastEditTime: 2020-06-02 11:45:58
 * @LastEditors: liyang
 * @Description: 各项菜单与对应页面配置
 */

 export default [
   {
     type: 'basic',
     title: '基础',
     desc: '包含颜色、文本、图标等',
     children: [
      {
        nameEn: 'Color',
        nameCh: '颜色',
        path: ''
      },
      {
        nameEn: 'Icon',
        nameCh: '图标',
        path: '/pages/basics/icon/index'
      },
      {
        nameEn: 'Typo',
        nameCh: '字体',
        path: ''
      },
      {
        nameEn: 'Button',
        nameCh: '按钮',
        path: ''
      },
     ]
   },
   {
    type: 'layout',
    title: '布局',
    desc: '包含列表、浮层、卡片等',
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
  }
 ]
