import React, { useEffect, useState, useContext, useRef } from "react";
import { Layout, Menu } from "antd";
import Upload from './upload/Upload'
import Context from "../../../../GlobalVariableStorage/Context";
import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

function StudioSide() {
  const context = useContext(Context)
  const [thisLayout, setThisLayout] = useState(1);

  const content = () => {
    if (thisLayout == 1) {
      return <Upload></Upload>
    } else if (thisLayout == 2) {
      return <h1>content</h1>
    } else {
      return <h1>ok</h1>
    }
  }

  const handleChange = (r) => {
    console.log(r.key)
    setThisLayout(r.key)
  }

  const testRef = useRef()

  return (
    <Layout style={{ background: 'none' }}>
      <Sider trigger={null} collapsible collapsed={context.sidebarstatus} style={{ background: 'none' }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
          ref={testRef}
          onClick={({ key, keyPath, domEvent }) => {handleChange({ key, keyPath, domEvent })}}
        />
      </Sider>
      <Layout className="site-layout" style={{ background: 'none' }}>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: window.innerHeight,
            background: 'transparent',
          }}
        >
          {content()}
        </Content>
      </Layout>
    </Layout>
  );
}

export default StudioSide;