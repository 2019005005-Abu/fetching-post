import React from 'react'
const Distract = ({name}) => {
    const [power,setPower]=React.useState(1);
    const HadleIncrement=()=>{
      const newPower=power*2;
      setPower(newPower);
    }
  return (
    <div>
      <h1 >Name:{name}</h1>
      <p style={{textAlign:"center"}}>
        Power:{power}</p>
        <div style={{display:"flex",flexDirection:"row",
        justifyContent:"center",alignItems:"center"}}>
        <button onClick={HadleIncrement}>
            Boost</button>
        </div>
    </div>
  )
}

export default Distract
