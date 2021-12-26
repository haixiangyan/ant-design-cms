import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import {ConfigProvider} from "antd";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
  ,
  document.getElementById('root')
);
