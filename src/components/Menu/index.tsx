import {FC} from "react";
import { Menu as AntMenu } from 'antd';
import {RouteItem} from "../../routes";
import {Link} from "react-router-dom";

const { SubMenu, Item } = AntMenu;

interface Props {
  routes: RouteItem[]; // 路由配置
}

// 渲染菜单函数
const rendMenuItems = (routes: RouteItem[] = [], prevList: RouteItem[] = []) => {
  if (!routes) {
    return null;
  }

  return routes.map(route => {
    const { key, name, children, childrenVisible = true, visible = true } = route;
    const curtList = [...prevList, route];
    const to = curtList.map(r => r.pathname).join('');

    // 子菜单
    if (children) {
      if (childrenVisible) {
        return (
          <SubMenu key={key} title={name}>
            {rendMenuItems(children, curtList)}
          </SubMenu>
        )
      } else {
        return (
          <Item key={key}>
            <Link to={to}>{name}</Link>
          </Item>
        )
      }

    } else {
      // 菜单项
      return (
        <Item key={key}>
          <Link to={to}>{name}</Link>
        </Item>
      )
    }
  })
}

const Menu: FC<Props> = (props) => {
  return (
    <AntMenu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      {rendMenuItems(props.routes, [])}
    </AntMenu>
  )
}

export default Menu;
