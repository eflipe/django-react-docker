import React from "react";
import {Layout, Menu} from 'antd';
import "antd/dist/antd.css";
import ListPictures from "./ListPictures";
import CreateNewPic from "./CreateNewPic";


class Pictures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:1
        }
    }
    handleClick = e => {
        this.setState({selected:e})
    }
    render() {
        const { Header, Content, Footer } = Layout;

        return (
          <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[this.state.selected.toString()]}>
                <Menu.Item key="1" onClick={() => this.handleClick(1)}>Pictures</Menu.Item>
                <Menu.Item key="2" onClick={() => this.handleClick(2)}>Agregar nuevo</Menu.Item>
              </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                {this.state.selected===1?<ListPictures />: <CreateNewPic />
                    }
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Dolor lorem ipsum ©2020 Created by Ant UED</Footer>
          </Layout>

        );
    }
}


export default Pictures
