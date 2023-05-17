import Button from "./Button";
import Dice from "./Dice";
import './App.css';
import { useState } from "react";

function App() {
  const [num,setNum] = useState(1);
  const [sum,setSum] = useState(0);  /* =>합계 */
  const [history,setHistory] = useState([0]); /*  =>기록 */
  // console.log(num,sum)

  // 1.random()->난수(최대6)/전역함수 randomDate만들기(1-6까지)
  // console.log(Math.random()*6)
  function randomDate(value){
    return Math.ceil(Math.random() * value)
  }

  const resetClick = ()=>{
    setNum(1)
    setSum(0)
    setHistory([])
  }

  // console.log(option)
  const playClick = ()=>{
    const option = randomDate(6)

    setNum(option)
    setSum(sum + option)
    // console.log(history)
    // console.log(history.push(option))
    setHistory([...history,option])
  }
  // function playClick(){
  //   const option = randomDate(6);
  //   console.log(option)
  //   setNum(option)
  // }

  return (
     <div id="box">
      <div>
        {/* <Button name="start"/>
        <Button name="reset"/> */}
        <Button onClick={playClick}>start</Button>
        <Button onClick={resetClick}>reset</Button>
      </div>
      <div id="contain">
        <h1>게임</h1>
        <Dice num={num}/>
        <h2>합</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{history.join(',')}</p>
      </div>
     </div>
  );
}

export default App;
