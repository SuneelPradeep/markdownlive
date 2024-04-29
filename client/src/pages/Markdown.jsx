import { marked } from 'marked'
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Markdowneditor from '../components/Markdowneditor'
import Markdownpreview from '../components/Markdownpreview'

const Markdown = () => {

  const [text,setText] = useState('')
  const [livehtml,setLivehtml] = useState('')
  const handleText = (texts)=>{
    setText(texts)
    const socket = io('http://localhost:3005')
    socket.emit('markdown', texts);
  }


  useEffect(()=>{
    const socket = io('http://localhost:3005')
    socket.on('html',(html)=>{
   
      setLivehtml(html)
    })
    return ()=>{
      socket.disconnect()
    }
  },[])

  useEffect(()=>{
    const socket = io('http://localhost:3005')
   socket.emit('markdown', text) 
    socket.on('html',(html)=>{
      setLivehtml(html)
    })
    return ()=>{
      socket.disconnect()
    }
  },[text])
  

  return (
      

    <div className='makehalf'>
        <Markdowneditor text={text} handleText={handleText} />
        <Markdownpreview livehtml={livehtml} />
        </div>
  )

}

export default Markdown