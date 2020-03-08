import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Profile from './Components/Profile/Profile'
import Footer from './Components/Footer/Footer'
import Messages from "./Components/Messages/Messages";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav people={props.state.people}/>
            <div className="gridContent">
                <Route path='/profile'
                       render={() => <Profile
                           dispatch={props.dispatch}
                           profilePage={props.state.profilePage} />}/>
                <Route path='/messages'
                       render={() => <Messages
                           people={props.state.people}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
            {/*<Footer /> */}
        </div>
    );
}

export default App;
