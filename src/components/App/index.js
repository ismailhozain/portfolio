import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import AboutPage from '../About';
import ProjectPage from '../Projects';
import SkillsPage from '../Skills';
import ErrorPage from '../Error';
import * as ROUTES from '../../constants/routes';


const App = () => (
            <Router>
                <div className={"App"}>
                    <Navigation/>
                    <div className={"site-content"}>
                        <main>
                        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                        <Route exact path={ROUTES.ABOUT} component={AboutPage}/>
                        <Route exact path={ROUTES.ERROR} component={ErrorPage}/>
                        <Route exact path={ROUTES.PROJECTS} component={ProjectPage}/>
                        <Route exact path={ROUTES.SKILLS} component={SkillsPage}/>
                        </main>
                    </div>
                </div>
            </Router>
);
export default App;