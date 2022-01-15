import React from 'react'
import rgbToHex from './utils'

function SingleColor({rgb,weight,index,hexColor}) {
    const [alert,setAlert] = useState(false)
    const bcg =rgb.join(",")
    const hex =rgbToHex(...rgb) ///copy each and eveyrone
    return (
      <article className={`color ${index > 10 && 'color-light'}`} style={{background:`rgb(${bcg})`}}>
            <p className="percentage-value">{weight}</p>
            <p className="color-value">{hexColor}</p>
      </article>
    )
}

export default SingleColor
