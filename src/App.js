import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Skills from './pages/Skills';
import About from './pages/About';

function app(){
    return(
        <React.Fragment>
            <Navbar/>
            <Layout>
                <Router>
                    <Switch>
                        <Route exact path ="/" component={Home}></Route>
                        <Route path ="/experience" component={Experience}></Route>
                        <Route path ="/contact" component={Contact}></Route>
                        <Route path ="/skills" component={Skills}></Route>
                        <Route path ="/about" component={About}></Route>
                        <Route component={NoMatch}/>
                    </Switch>
                </Router>
            </Layout>
        </React.Fragment>
    );
}

export default app;