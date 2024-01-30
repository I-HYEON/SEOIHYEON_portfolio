import React, { useEffect, useState } from 'react';
import MouseTracker from '../Components/Common/MouseTracker';

const useScroll = () => {
  const [state, setState] = useState({
    x:0,
    y:0
  })

  const onScroll = () => {
    setState({x:window.scrollX, y:window.scrollY})
  }

  useEffect(()=>{
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  },[])
  return state
}


const Home = () => {

  return (
    <div style={{height:"1000vh"}}>
      <h1>안녕하세요</h1>
      <h1>서이현입니다.</h1>
      <MouseTracker/>
    </div>
  );
};

export default Home;