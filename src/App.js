import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './Mobile.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Message from  './components/Message'
import Counter from  './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EvenBind'
import ParentComponnet from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'

function App() {
  return (
       
    <div className="container">
      {/* <Header name="navName"  heroName="hhhhh">
        <p>this is children</p>
      </Header>
      <Main name="main name"  heroName="main hero"></Main>
      <Message />
      <Counter></Counter>
      <FunctionClick/>
      <ClassClick/>
      <Footer/>
      <EventBind /> */}

      {/* <ParentComponnet></ParentComponnet> */}
      <UserGreeting/>
      <NameList/>
    
    </div>
    
  );
}

export default App;
