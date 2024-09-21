import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const Teacher_admin = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header" style={{ color: "white", fontSize: "24px" }}>
        Teacher Admin Dashboard
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              Teachers
            </Menu.Item>
            <Menu.Item key="2" icon={<LaptopOutlined />}>
              Classes
            </Menu.Item>
            <Menu.Item key="3" icon={<NotificationOutlined />}>
              Notifications
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Teacher Admin</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: "#fff",
            }}
          >
            Teacher Admin Content goes here
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Teacher_admin;
