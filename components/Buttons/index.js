import React from 'react'
import {PrimaryButton, SecondaryButton} from './Buttons';

function index({ type,text }) {


  return (
    <div>
      {
        type === 'primary' ? <PrimaryButton text={text}/> :  <SecondaryButton text={text}/>
      }    
    </div>
  )
}

export default index