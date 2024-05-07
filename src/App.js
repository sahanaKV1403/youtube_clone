import React,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import {Routes,Route} from 'react-router-dom' 

const App = () => {
  const [sidebar,setSidebar]=useState(true);
  // The React Hook is used to bring in functionalities of the class components (like state) to functional components 
  // const [variable, function]=useState(initial value). True means complete sidebar is shown

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App

//Route has path and element