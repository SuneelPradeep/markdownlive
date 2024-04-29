import React from 'react'

const Markdowneditor = ({text,handleText}) => {
  return (
    <div className='firsthalf'>
        <h1 style={{fontSize:'2.5rem'}}>Markdown Preview Live </h1>
        <hr style={{border:'1px solid whitesmoke',marginTop:'-1rem'}}  />
        <textarea className='inputtext' value={text} onChange={(e)=> handleText(e.target.value)} placeholder='Enter markdown here '  />
       
        </div>
  )
}

export default Markdowneditor