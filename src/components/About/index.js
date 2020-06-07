import React from 'react';
import {Card, Button } from 'antd';
import 'antd/dist/antd.css';
import {DownOutlined} from '@ant-design/icons';

class About extends React.Component {
    render() {
        return (
            <div>
                <div className={"achievementsSection section"}>
                    <h1>Achievements</h1>
                    <h2>TSA 2019</h2>
                    <ul>
                        <li>6th Place Nationals - Cybersecurity</li>
                        <li>2nd Place State(TX) - Transportation Modeling</li>
                        <li>1st Place State(TX) - Software Development</li>
                        <li>2nd Place State(TX) - Systems Control</li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default About;