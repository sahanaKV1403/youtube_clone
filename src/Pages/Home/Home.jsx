import React from 'react'
import './Home.css'
import { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {
  const [category,setCategory]=useState(0);
  return (
    <>
    {/* fragment : Fragment in React is used to combine the child nodes and render without creating an extra parent Node.
    eg: to avoid this <ul><div><li>*/}
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
    <div className={`container ${sidebar?"":'large-container'}`}>
     {/* classname is container if sidebar is true (description seen) else classname is large-container */}
      <Feed category={category}/>
    </div>
    </>
  )
}

export default Home

// props are used to send data from parent component to child component, immutable.