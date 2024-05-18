import React from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
export const Main = () => {
  return (
    <div className='main'>
       <div className='nav'>
        <p>Gemini</p>
    <img  src={assets.user_icon}/>
        </div> 
        <div className='main-container'>
            <div className='greet'>
<p><span>Hello dev ,</span></p>
<p><span>How can i help you today?</span></p>

            </div>
<div className='card'>
    <p>suggest beautifull place</p>
    <img src={assets.compass_icon}/>
</div>
        </div>
    </div>
  )
}
export default Main