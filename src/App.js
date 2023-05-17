import './App.css';
import Border from './Border';
import Button from './Button';
import './App.css'
import { useState } from 'react';



// random 함수만들기
const randomDate = (value) => 
                     {return Math.ceil(Math.random() * value)}
  
function App() {
  // state 만들기
  const [my,setMy] = useState([]); 
  /* ->red 기록 */

  const [other,setOther] = useState([]); 
  /* ->blue 기록 */

  // on이벤트 함수만들기
  const playClick = ()=>{
    const myNext = randomDate(6);
    const otherNext = randomDate(6);
    setMy([...my,myNext])
    setOther([...other,otherNext])
  }
  const resetClick = ()=>{
    setMy([])
    setOther([])
  }
  
  return (
     <div id="box">
      <div id='btn'>
        <Button onClick={playClick}>start</Button>
        <Button onClick={resetClick}>reset</Button>
      </div>
      <div id="contain">
        <Border name="팀 A" color="blue" myOption={my}/>
        <Border name="팀 B" color="red" myOption={other}/>
      </div>
     </div>
  );
}

export default App;
