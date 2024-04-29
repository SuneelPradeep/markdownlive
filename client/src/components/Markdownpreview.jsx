import React from 'react'

const Markdownpreview = ({livehtml}) => {
  return (
    <div className='secondhalf'>
    <h2  style={{fontSize:'2.5rem'}}> Preview</h2>
    <hr style={{border:'1px solid whitesmoke',marginTop:'-1rem'}}  />
    {/* <div dangerouslySetInnerHTML={renderMarkdown()} /> */}
    <div dangerouslySetInnerHTML={{__html : livehtml}}  />
    </div>
     
  )
}

export default Markdownpreview