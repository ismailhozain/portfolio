import React from 'react';
import {Card, Button } from 'antd';
import 'antd/dist/antd.css';
import './styled';
import train from './train.jpg';
import portrait from './portrait - Copy.jpg';
import {DownOutlined} from '@ant-design/icons';


class Landing extends React.Component {
    state = {
        collapsed: false,
    };
    render() {
        return (
            <div>
                <div className="App">
                    <div className={"title section"}>
                        <h1 className={"titleText"}>Ismail Hozain</h1>
                        <img src={portrait} alt={"Ismail's portrait with a train model"}/>
                        <Button shape={"circle"} type={"primary"}>
                            <DownOutlined/>
                        </Button>
                    </div>
                    <div className={"aboutSection section"}>
                        <h1>About</h1>
                        <p className={"bio"}>I am a freelance programmer and engineer. I mainly handle Web Development
                            but am rapidly expanding my skills and continuing on 4 years of experience programming.</p>
                        <h1>Education</h1>
                        <p>Mckinney High School (Expected 2022)</p>
                    </div>
                    <div className={"skillsSection section"}>
                        <h1>Skills</h1>
                        <h2>Programming</h2>
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Ant Design</li>
                            <li>Three.js</li>
                            <li>Animejs</li>
                            <li>Firebase</li>
                            <li>Vue.js</li>
                            <li>Python</li>
                            <li>Selenium</li>
                            <li>Java</li>
                            <li>RobotC</li>
                            <li>Arduino</li>
                        </ul>
                        <h2>Engineering</h2>
                        <ul>
                            <li>Industrial design in CAD</li>
                            <li>Electronics and programming circuits in RobotC</li>
                            <li>Pneumatics</li>
                            <li>Modelmaking</li>
                            <li>3d Printing</li>
                            <li>Woodworking</li>
                        </ul>
                    </div>
                    <div className={"faveTools section"}>
                        <h1>Favorite tools</h1>
                        <ul>
                            <li>Webstorm + Pycharm</li>
                            <li>Fusion 360</li>
                            <li>Blender</li>
                            <li>Wireshark</li>
                            <li>Ghidra</li>
                            <li>Burp Suite</li>
                            <li>SQLMap</li>
                            <li>John The Ripper</li>
                            <li>Meshroom</li>
                            <li>Chrome</li>
                        </ul>
                    </div>
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
                    <div className={"projectSection section"}>
                        <h1>Projects</h1>
                        <Card title={"Maglev Train"}>
                            <img src={train} alt={"Blue 3d printed plastic train"}/>
                            <p>Timeline: January 2019-April 2019</p>
                            <p>
                                This was a project for TSA, with the whole project designed and built by me.
                            </p>
                        </Card>

                    </div>
                    <div className={"contactSection section"}>
                        <h1>Find Me in these Places</h1>
                        <ul>
                            <li><a href={"https://github.com/ismailhozain"} target={"_blank"}>Github</a></li>
                            <li><a href={"mailto:ismailhozain@gmail.com"} target={"_blank"}> Email</a></li>
                            <li><a href={"https://codepen.io/ismailhozain"} target={"_blank"}>Codepen</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


export default Landing;