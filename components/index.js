import Vue from 'vue'

import ButtonArea from './button/button-area.vue';
import Button from './button/button.vue';

import CellsTitle from './cells/cells-title.vue';
import CellsTips from './cells/cells-tips.vue';
import Cells from './cells/cells.vue';
import Cell from './cells/cell.vue';
import LinkCell from './cells/link-cell.vue';
import RadioCell from './cells/radio-cell.vue';
import CheckboxCell from './cells/checkbox-cell.vue';
import SwitchCell from './cells/switch-cell.vue';
import InputCell from './cells/input-cell.vue';
import SelectCell from './cells/select-cell.vue';
import CellHeader from './cells/cell-header.vue';
import CellBody from './cells/cell-body.vue';
import CellFooter from './cells/cell-footer.vue';

import CellInput from './cells/cell-input.vue';
import CellSelect from './cells/cell-select.vue';

import Toptips from './tips/toptips.vue';

import Toast from './toast/toast.vue';

import Dialog from './dialog/dialog.vue';

import Progress from './progress/progress.vue';

import Message from './message/message.vue';

import Article from './article/article.vue';

import Actionsheet from './actionsheet/actionsheet.vue';

import Icon from './icon/icon.vue';

import Grids from './grids/grids.vue';
import Grid from './grids/grid.vue';

import Uploader from './uploader/uploader.vue';
import UploaderFiles from './uploader/uploader-files.vue';
import UploaderFile from './uploader/uploader-file.vue';

import Tab from './tab/tab.vue';
import Navbar from './tab/navbar.vue';
import NavbarItem from './tab/navbar-item.vue';
import Tabbar from './tab/tabbar.vue';
import TabbarItem from './tab/tabbar-item.vue';

import Panel from './panel/panel.vue';
import PanelHeader from './panel/panel-header.vue';
import PanelBody from './panel/panel-body.vue';
import PanelFooter from './panel/panel-footer.vue';

import MediaBox from './media/media-box.vue';
import MediaHeader from './media/media-header.vue';
import MediaBody from './media/media-body.vue';
import MediaAppmsgThumb from './media/media-appmsg-thumb.vue';
import MediaTitle from './media/media-title.vue';
import MediaDescription from './media/media-description.vue';
import MediaInfo from './media/media-info.vue';
import MediaInfoMeta from './media/media-info-meta.vue';

import SearchBar from './search-bar/search-bar.vue';
import Qrcode from './qrcode/qrcode.vue';

export {
  ButtonArea,
  Button,
  CellsTitle,
  CellsTips,
  Cells,
  Cell,
  LinkCell,
  RadioCell,
  CheckboxCell,
  SwitchCell,
  InputCell,
  SelectCell,
  CellHeader,
  CellBody,
  CellFooter,
  CellInput,
  CellSelect,
  Toptips,
  Toast,
  Dialog,
  Progress,
  Message,
  Article,
  Actionsheet,
  Icon,
  Grids,
  Grid,
  Uploader,
  UploaderFiles,
  UploaderFile,
  Tab,
  Navbar,
  NavbarItem,
  Tabbar,
  TabbarItem,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  MediaBox,
  MediaHeader,
  MediaBody,
  MediaAppmsgThumb,
  MediaTitle,
  MediaDescription,
  MediaInfo,
  MediaInfoMeta,
  SearchBar,
  Qrcode
}

const VWeui = {
  ButtonArea,
  Button,
  CellsTitle,
  CellsTips,
  Cells,
  Cell,
  LinkCell,
  RadioCell,
  CheckboxCell,
  SwitchCell,
  InputCell,
  SelectCell,
  CellHeader,
  CellBody,
  CellFooter,
  CellInput,
  CellSelect,
  Toptips,
  Toast,
  Dialog,
  Progress,
  Message,
  Article,
  Actionsheet,
  Icon,
  Grids,
  Grid,
  Uploader,
  UploaderFiles,
  UploaderFile,
  Tab,
  Navbar,
  NavbarItem,
  Tabbar,
  TabbarItem,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  MediaBox,
  MediaHeader,
  MediaBody,
  MediaAppmsgThumb,
  MediaTitle,
  MediaDescription,
  MediaInfo,
  MediaInfoMeta,
  SearchBar,
  Qrcode
};

export default VWeui

/**
 * 添加组件的安装方法
 */
for (let component of Object.values(VWeui)) {
  if (!component.install && component.name) {
    component.install = (vue) => {
      vue.component(component.name, component)
    }
  }
}

/**
 * 安装所有组件， 如果被安装了则不用安装。
 *
 * Vue.use(xxx)
 * 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法将被作为 Vue 的参数调用。
 * 当 install 方法被同一个插件多次调用，插件将只会被安装一次。
 * @param vue
 */
const install = function (vue) {
  if (install.installed) return
  for (let component of Object.values(VWeui)) {
    if (component.install) {
      vue.use(component)
    }
  }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

