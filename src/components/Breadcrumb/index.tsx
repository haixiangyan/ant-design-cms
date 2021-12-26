import {FC} from "react";
import { Breadcrumb as AntBreadcrumb } from "antd";
import {Link, useLocation} from "react-router-dom";
import {RouteItem} from "../../routes";

const { Item } = AntBreadcrumb;

interface Props {
  routes: RouteItem[] // 路由配置
}

const dfs = (paths: string[], routes: RouteItem[] = [], depth: number, results: RouteItem[]): RouteItem[] => {
  const target = paths[depth - 1];
  if (!target) {
    return results;
  }

  for (const route of routes) {
    if (route.pathname.replaceAll('/', '') === target) {
      results.push(route);
      return dfs(paths, route.children, depth + 1, results);
    }
  }

  return results;
}

const renderBreadcrumbItem = (pathname: string, routes: RouteItem[]) => {
  const paths = pathname.split('/').filter(Boolean);
  const results = dfs(paths, routes, 1, []);
  return results.map((item, index) => {
    const to = paths.filter(Boolean).slice(0, index + 1).join('/');
    return (
      <Item key={item.key}>
        <Link to={to}>
          {item.name}
        </Link>
      </Item>
    )
  })
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
