import React, { useState } from 'react'

function Card(props) {

  let {data,index} = props;
  let {cal,id,img,name} = data;
  // easy way 
  // let {data: {calorie,id,img,name},{index}} = props;

  const[input,setInput] = useState(0)
  const [quantity,setQuantity] = useState(0)

 const quantityHandler = ()=>{
  setQuantity(input)
  }
  return (
    <div className='foodbox-main'>
      {/* left section  */}
      <div className='foodbox-main-left'>
        <img src={img} alt="" />
        {/* name and calories */}
        <div className='foodbox-main-left-1'>
          <h2>{name}</h2>
          <h3>{cal}</h3>
        </div>
        {/* input and add button  */}
        <div className='foodbox-main-left-1'>
          <input type="number" 
          style={{
            padding : "8px 8px",
            fontSize : "larger",
            color : 'black',
            background: "linear-gradient(90deg, #34919a 0%, #b2b8f8 100%)" 
          }}
          value={input}
          onChange={(e)=>{
            setInput(e.target.value)
          }}
          min={0}
          />
          <button className='add' onClick={quantityHandler}>+</button>
        </div>
      </div>
    {/* right section  */}
      <div className='foodbox-main-right'>
        <h4>{name} x {quantity} = {cal * quantity} calories</h4>
        <button className='reset' onClick={()=>{setQuantity(0),setInput(0)}}>RESET</button>
      </div>

    </div>
  )
}
export default Card