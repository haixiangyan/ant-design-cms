import { Layout as AntLayout } from 'antd';
import styles from "./styles.module.scss";
import React, {FC} from "react";
import Menu from "../Menu";
import routes from "../../routes";
import Breadcrumb from "../Breadcrumb";

const { Header, Sider, Content, Footer } = AntLayout;

const Layout: FC = (props) => {
  return (
    <AntLayout className={styles.layout}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu routes={routes} />
      </Sider>
      <AntLayout>
        <Header style={{ padding: 0, background: 'white' }}>
          <Breadcrumb routes={routes} />
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </AntLayout>
    </AntLayout>
  )
}

export default Layout;
