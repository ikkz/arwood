import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
import './app.scss'
import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

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
      'pages/mine/index',
      'pages/products/index',
      'pages/change_info/index',
      'pages/request_admin/index',
      'pages/add_product/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      color: '#aaa',
      selectedColor: '#000',
      list: [
        {
          pagePath: 'pages/products/index',
          text: '产品',
          selectedIconPath: 'pics/s-goods.png',
          iconPath: 'pics/goods.png',
        },
        {
          pagePath: 'pages/mine/index',
          text: '我的',
          selectedIconPath: 'pics/s-mine.png',
          iconPath: 'pics/mine.png'
        }
      ]
    }
  }
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
