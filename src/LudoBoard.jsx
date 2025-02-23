import { useState } from "react"
export default function LudoBoard(){
let [moves,setMoves]=useState({blue:0, red:0, yellow:0,green:0});
let ubdateBlue=()=>{
    console.log(`moves.blue = ${moves.blue}`)
    setMoves((prevMoves)=>{
       return ({...prevMoves,blue:prevMoves.blue+1});
    })
}
let ubdateYellow=()=>{
    console.log(`moves.yellow = ${moves.yellow}`)
    setMoves((prevMoves)=>{
       return ({...prevMoves,yellow:prevMoves.yellow+1});
    })
}

    return(
        <div>
            <h3> Game Begins! </h3>
            <div className="board">
            <p> Red Moves= {moves.red}</p>
            <button style={{backgroundColor:"red"}} >+1</button>
            <p> Green Moves= {moves.green}</p>
            <button style={{backgroundColor:"green"}}>+1</button>
            <p> Yellow Moves= {moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}}  onClick={ubdateYellow}>+1</button>
            <p> Blue Moves= {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={ubdateBlue}>+1</button>
            </div>
        </div>
    )
}