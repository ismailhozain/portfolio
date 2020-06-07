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
                <Link to={ROUTES.LANDING}>
                <DashboardOutlined />
                <span>Home</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2" >
                <Link to={ROUTES.ABOUT}>
                <DesktopOutlined/>
                <span>About</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to={ROUTES.SKILLS}>
                <UnlockOutlined />
                <span>Skills</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="6">
                <Link to={ROUTES.PROJECTS}>
                <ProjectOutlined />
                <span>Projects</span>
                </Link>
            </Menu.Item>
        </Menu>
    </div>
);
export default NavigationWrapper;
