/*
 * @Author: liyang
 * @Date: 2020-05-29 11:28:51
 * @LastEditTime: 2020-05-29 18:12:43
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
       }
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
        path: ''
      },
      {
        nameEn: 'Grid',
        nameCh: '栅格',
        path: ''
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
      }
    ]
  }
 ]
