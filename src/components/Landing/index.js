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
               <html data-wf-domain="ismail-hozains-portfolio-starter.webflow.io" data-wf-page="5ecd6d2969864bee9b0e01d0" data-wf-site="5ecd6d29c991ec385e4932b7" data-wf-status="1">
                   <head>
                       <meta charset="utf-8"/>
                       <title>Portfolio - Webflow HTML website template</title>
                       <meta content="Portfolio - Webflow HTML website template" property="og:title"/>
                       <meta content="https://uploads-ssl.webflow.com/5c6e6f46bf98b2013cf621c5/5cdbf62c56d6dd3315e2b16b_Portfolio%20SEO.jpg" property="og:image"/>
                       <meta content="Portfolio - Webflow HTML website template" property="twitter:title"/>
                       <meta content="https://uploads-ssl.webflow.com/5c6e6f46bf98b2013cf621c5/5cdbf62c56d6dd3315e2b16b_Portfolio%20SEO.jpg" property="twitter:image"/>
                       <meta content="width=device-width, initial-scale=1" name="viewport"/>
                       <meta content="Webflow" name="generator"/>
                       <link href="https://uploads-ssl.webflow.com/5ecd6d29c991ec385e4932b7/css/ismail-hozains-portfolio-starter.webflow.333def945.css" rel="stylesheet" type="text/css"/>
                       <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
                       <link href="https://uploads-ssl.webflow.com/img/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
                       <link href="https://uploads-ssl.webflow.com/img/webclip.png" rel="apple-touch-icon"/>
                   </head>
                   <body class="body">
                       <div class="name-text">Ismail Hozain</div>
                       <div class="intro-wrap">
                           <h1 class="heading-jumbo w-clearfix">
                               <span class="text-span">Hey there! I’m a student, engineer and programmer based in Mckinney, Tx.</span>
                           </h1>
                       </div>
                       <div class="section">
                           <div class="container"></div>
                       </div>
                       <div class="section">
                           <div class="container">
                               <div class="carrer-headline-wrap w-clearfix">
                                   <h2 class="heading">Medias:</h2>
                                   <p class="paragraph-light">I am a student at Mckinney High School (Expected 2022) and have been programming since 2017 and have been learning engineering disciplines since 2018.</p>
                               </div>
                               <div class="w-layout-grid work-experience-grid">
                                   <div id="w-node-8f65c72d8fc9-9b0e01d0" class="work-position-wrap">
                                       <div class="position-name-text"><a href={"https://github.com/ismailhozain"} target={"_blank"}>Github</a></div>
                                   </div>
                                   <div id="w-node-8f65c72d8fd1-9b0e01d0" class="work-position-wrap">
                                       <div class="position-name-text"><a href={"mailto:ismailhozain@gmail.com"} target={"_blank"}> Email</a></div>
                                   </div>
                                   <div id="w-node-8f65c72d8fd9-9b0e01d0" class="work-position-wrap">
                                       <div class="position-name-text"><a href={"https://codepen.io/ismailhozain"} target={"_blank"}>Codepen</a></div>
                                   </div>
                                   <div id="w-node-8f65c72d8fe1-9b0e01d0" class="work-position-wrap">
                                       <div class="position-name-text"><a href={"https://www.linkedin.com/in/ismail-hozain-bb2a06192/"} target={"_blank"}>LinkedIn</a></div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ecd6d29c991ec385e4932b7" type="text/javascript" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
                       <script src="https://uploads-ssl.webflow.com/5ecd6d29c991ec385e4932b7/js/webflow.64cac07bd.js" type="text/javascript"></script>
                   </body>
               </html>

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
        );
    }
}


export default Landing;