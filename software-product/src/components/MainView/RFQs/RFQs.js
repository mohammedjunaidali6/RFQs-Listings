import React from 'react';
import Tabs from './Tabs'
import Chatbot from './Chatbot';
import Chatbox from './Chatbox';
import './RFQs.css'
import Nav from './components/nav/Nav';
import ChatBody from './components/chatBody/ChatBody';

const RFQs = () => {
  return(
    <div className="heading">
       <h1>RFQs</h1>
       {/* <input placeholder="search" /><i class="fal fa-search"></i> */}
    
       <div className="buttons">
          {/* <Tabs /> */}
       {/* <button className="all">All RFQs</button> 
       <button>Active</button>
       <button>Archive</button> */}
       </div>
        <div className="adding">
          {/* <button className="primary">CREATE RFQs</button>
          <button className="draft">Drafts</button> */}
        </div>
        <div className="mainSection">
      <div className="heading">
      </div>  
      {/* <Chatbot /> */}
         
    </div>
    <Tabs />
    <div className="__main">
    {/* <Chatbox /> */}
          <Nav />
          <ChatBody />
    </div>
   

    </div>
  
  )
}

export default RFQs