import {Main, App,
  Button, Cell, Toast,
  Dialog, Progress, Message,
  Article, Actionsheet, Icons,
  Tab, Navbar, Tabbar,
  Panel, SearchBar, Qrcode} from './containers';

export default [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'app',
          component: App,
        },
        {
          path: '/button',
          name: 'button',
          component: Button
        },
        {
          path: '/cell',
          name: 'cell',
          component: Cell
        },
        {
          path: '/toast',
          name: 'toast',
          component: Toast
        },
        {
          path: '/dialog',
          name: 'dialog',
          component: Dialog
        },
        {
          path: '/progress',
          name: 'progress',
          component: Progress
        },
        {
          path: '/message',
          name: 'message',
          component: Message
        },
        {
          path: '/article',
          name: 'article',
          component: Article
        },
        {
          path: '/actionsheet',
          name: 'actionsheet',
          component: Actionsheet
        },
        {
          path: '/icons',
          name: 'icons',
          component: Icons
        },
        {
          path: '/tab',
          name: 'tab',
          component: Tab
        },
        {
          path: '/navbar',
          name: 'navbar',
          component: Navbar
        },
        {
          path: '/tabbar',
          name: 'tabbar',
          component: Tabbar
        },
        {
          path: '/panel',
          name: 'panel',
          component: Panel
        },
        {
          path: '/search-bar',
          name: 'search-bar',
          component: SearchBar
        },
        {
          path: '/vue-qrcode',
          name: 'vue-qrcode',
          component: Qrcode
        }
      ]
    }

]