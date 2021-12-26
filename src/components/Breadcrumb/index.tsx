import {FC} from "react";
import { Breadcrumb as AntBreadcrumb } from "antd";
import {useLocation} from "react-router-dom";
import {RouteItem} from "../../routes";

const { Item } = AntBreadcrumb;

interface Props {
  routes: RouteItem[] // 路由配置
}

const dfs = (paths: string[], routes: RouteItem[] = [], depth: number, results: RouteItem[]) => {
  const target = paths[depth - 1];
  if (!target) {
    return;
  }

  for (const route of routes) {
    if (route.pathname.replaceAll('/', '') === target) {
      results.push(route);
      dfs(paths, route.children, depth + 1, results);
    }
  }
}

const renderBreadcrumbItem = (pathname: string, routes: RouteItem[]) => {
  const paths = pathname.split('/').filter(Boolean);
  const results: RouteItem[] = [];
  dfs(paths, routes, 1, results);
  return results.map(item => (
    <Item key={item.key}>{item.name}</Item>
  ))
}

const Breadcrumb: FC<Props> = (props) => {
  const { routes } = props;

  const location = useLocation();

  return (
    <AntBreadcrumb>
      {renderBreadcrumbItem(location.pathname, routes)}
    </AntBreadcrumb>
  )
}

export default Breadcrumb;
