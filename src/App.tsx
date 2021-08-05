import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs, DialogsTypeProps } from './components/Dialogs/Dialogs';
import { DialogsItemTypeProps } from './components/Dialogs/DialogsItem/DialogsItem';
import { MessageTypeProps } from './components/Dialogs/Message/Message';
import { Header } from './components/Header/Header';
import { Music } from './components/Music/Music';
import { Navbar } from './components/Navbar/Navbar';
import { News } from './components/News/News';
import { PostTypeProps } from './components/Profile/MyPosts/MyPosts';
import { Profile, ProfileTypeProps } from './components/Profile/Profile';
import { Settings } from './components/Settings/Settings';


type StatePropsType = {
  dialogs: {
    dialogsItem: Array<DialogsItemTypeProps>
    messages: Array<MessageTypeProps>
  }
  posts: Array<PostTypeProps>
}

type AppPropsType = {
  state: StatePropsType
}


export const App = (props: AppPropsType) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path={"/profile"} render={() => <Profile posts={props.state.posts} />} />
          <Route path={"/dialogs"} render={() => <Dialogs dialogs={props.state.dialogs} />} />
          <Route path={"/music"} render={() => <Music />} />
          <Route path={"/news"} render={() => <News />} />
          <Route path={"/settings"} render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

