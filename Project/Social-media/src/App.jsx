import React from 'react';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Sidebar from './Component/Sidebar';
import  Createpost from './Component/Createpost';
import PostList from './PostList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  const[selectTab,setselectTab]=useState();
  
  return (
    <div className="d-flex">
   <Sidebar selectTab={selectTab}  setselectTab={setselectTab} />
    <div className="flex-grow-1 d-flex flex-column min-vh-100">
        <Navbar />
      { selectTab ==='Home'?  <PostList></PostList>:   <Createpost></Createpost> }
      <Footer />
      </div>
    </div>
  );
}

export default App;
