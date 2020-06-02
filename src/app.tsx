import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  componentDidMount () {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/demo/counter/index',
      'pages/panel/index',

      // 基础
      'pages/basics/icon/index',
      'pages/basics/typo/index',
      'pages/basics/color/index',
      'pages/basics/button/index',

      // 操作反馈
      'pages/actions/action-sheet/index',
      'pages/actions/activity-indicator/index',
      'pages/actions/progress/index',
      'pages/actions/toast/index',
      'pages/actions/message/index',
      'pages/actions/swipe-action/index',

      // 布局
      'pages/layouts/list/index',
      'pages/layouts/card/index',
      'pages/layouts/flex/index',
      'pages/layouts/grid/index',
      'pages/layouts/floatLayout/index',
      'pages/layouts/accordion/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
