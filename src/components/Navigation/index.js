import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Button, Menu} from "antd";
import 'antd/dist/antd.css';
import Logo from './logo.png';
import './navigation.css';
import {
    DashboardOutlined, DesktopOutlined, InboxOutlined, ProjectOutlined, ToolOutlined, TrophyOutlined, UnlockOutlined
} from "@ant-design/icons";
const NavigationWrapper = () => (
    <div>
       <Navigation/>
    </div>
);

const Navigation = () => (
    <div className={"menuClass"}>
        <Menu
            defaultSelectedKeys={['1']}
            mode="horizontal"
            theme="dark">
            <Menu.Item key="1">
                <DashboardOutlined />
                <span>Home</span>
            </Menu.Item>
            <Menu.Item key="2">
                <DesktopOutlined />
                <span>About</span>
            </Menu.Item>
            <Menu.Item key="3">
                <UnlockOutlined />
                <span>Skills</span>
            </Menu.Item>
            <Menu.Item key="4">
                <ToolOutlined />
                <span>Tools</span>
            </Menu.Item>
            <Menu.Item key="5">
                <TrophyOutlined />
                <span>Achievements</span>
            </Menu.Item>
            <Menu.Item key="6">
                <ProjectOutlined />
                <span>Projects</span>
            </Menu.Item>
            <Menu.Item key="7">
                <InboxOutlined />
                <span>Contact</span>
            </Menu.Item>
        </Menu>
    </div>
);
export default NavigationWrapper;
