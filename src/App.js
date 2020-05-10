import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import Crousal from './Components/Crousal/Crousal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGridList from './Components/ImageGridList/ImageGrid';
import WorkProgress from './Components/WorkProgess/WorkProgress';

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Crousal/> 
    <ImageGridList/>
    <WorkProgress/>
      
    </div>
  );
}

export default App;
