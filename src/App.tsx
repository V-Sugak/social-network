import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Music } from './components/Music/Music';
import { Navbar } from './components/Navbar/Navbar';
import { News } from './components/News/News';
import { Profile } from './components/Profile/Profile';
import { Settings } from './components/Settings/Settings';


export const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route  path={"/profile"}  render={() => <Profile />} />
        <Route  path={"/dialogs"}  render={() => <Dialogs />} />
        <Route  path={"/music"}  render={() => <Music />} />
        <Route  path={"/news"}  render={() => <News />} />
        <Route  path={"/settings"}  render={() => <Settings />} />
      </div>
    </div>
    </BrowserRouter>
  );
} 

