import {ReactNode} from "react";
import StaffList from "./pages/StaffList";
import CustomerList from "./pages/StaffList/CustomerList";
import Chat from "./pages/StaffList/CustomerList/Chat";

export interface RouteItem {
  key: string; // key
  name: string; // 路由名
  pathname: string; // 路由地址
  component: ReactNode; // 页面组件
  visible?: boolean; // 是否可见
  disabled?: boolean; // 是否禁用
  childrenVisible?: boolean; // 子路由是否可见
  children?: RouteItem[]; // 子路由
}

const routes: RouteItem[] = [
  {
    key: 'staff',
    pathname: '/staff',
    name: '员工',
    component: StaffList,
    children: [
      {
        key: 'customer',
        name: '客户',
        pathname: '/customer',
        component: CustomerList,
        children: [
          {
            key: 'chat',
            name: '聊天内容',
            pathname: '/chat',
            component: Chat,
          }
        ]
      }
    ]
  }
]

export default routes;
