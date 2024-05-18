import React, { useState } from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
export const Sidebar = () => {
  const [extended,setExtended]=useState(false)
    return (
    <div className='sidebar'>
<div className='top'>
<img onClick={()=>setExtended(!extended)} className='menu' src={assets.menu_icon} alt='' />
<div className='new-chat'>
<img src={assets.plus_icon} />
{extended?<p>New Chat</p>:null}
</div>
{extended?<div className='recent'>
<p className='recent-title'>recent</p>
<div className='recent-entry'>
<img src={assets.message_icon} />
<p>what is react ...</p>
</div>
</div>:null}

</div>
<div className='bottom'>
<div className='bottom-item recent-entry' >
    <img src={assets.question_icon} />
    {extended?<p>Help</p>:null}

</div>
<div className='bottom-item recent-entry' >
    <img src={assets.history_icon} />
    {extended?<p>activity</p>:null}

</div>
<div className='bottom-item recent-entry' >
    <img src={assets.setting_icon} />
    {extended?<p>setting</p>:null}

</div>
</div>

    </div>
  )
}
