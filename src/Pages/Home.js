import React, { useEffect, useState } from 'react';

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
  const {y} = useScroll();

  return (
    <div style={{height:"1000vh"}}>
      <h1>메인페이지입니다</h1>
      <h1 style={{position:"fixed", color:y>100? "red":"blue"}}>useScroll을 테스팅하는 중입니다</h1>
    </div>
  );
};

export default Home;