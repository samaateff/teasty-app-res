import { useState } from "react"

function ChangeLanguage() {
    const [droped , setDroped] = useState(false)
    return (
      <div onMouseEnter={() => setDroped(true)} onMouseLeave={ () => setDroped(false)}>
        <div>
           arabic 
        </div>
        {droped && <ul>
            <li>arabic</li>
            <li>english</li>
            </ul>}
      </div>
      
    )
}

export default ChangeLanguage
