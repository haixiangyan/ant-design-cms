import { Layout as AntLayout } from 'antd';
import styles from "./styles.module.scss";
import {Menu} from "antd";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {FC} from "react";

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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
      <AntLayout>
        <Header style={{ padding: 0, background: 'white' }}>
          Header
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
