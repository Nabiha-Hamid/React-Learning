import React, { useState } from 'react'

export default function Textform(props) {
  const [text, setText] = useState('Enter Text Here ')
  // setText("ngngnfgnfngnfngng")//use features of class without  creating them
  const handleupClick = () => {
    console.log("Uppercase was click"); setText("you have handled on upper case "); let updatedText = text.toUpperCase();
    setText(updatedText);
  }
  const handleonChange = (event) => { console.log("onchange was clicked"); setText(event.target.value) }

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div class="form-group">
          {/* <label for="exampleFormControlTextarea1"></label> */}
          <textarea class="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>

        </div>
        <button className='btn btn-primary mt-3' onClick={handleupClick}>Conver to uppercase</button>

      </div>
      <div className='container my-2'>
        <h1>Your Word Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
      </div>
    </>
  )
}
//setText to change the state

