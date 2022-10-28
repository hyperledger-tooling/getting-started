import React from 'react'
import {PrimaryButton, SecondaryButton} from './Buttons';

function index({ type, text }) {
  // console.log("The type of text is",typeof(text));
  return (
    <div>
      {
        type === 'primary' ? <PrimaryButton text={text}/> :  <SecondaryButton text={text}/>
      }    
    </div>
  )
}

export default index