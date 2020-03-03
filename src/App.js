import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Profile from './Components/Profile/Profile'
import Footer from './Components/Footer/Footer'
import Messages from "./Components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="gridContent">
                    <Route path='/profile' component={Profile}/>
                    <Route path='/messages' component={Messages}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                {/*<Footer /> */}
            </div>
        </BrowserRouter>
    );
}

export default App;
