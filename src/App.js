import React, { useState } from 'react'
import './App.css'

function App() {

    const isCustomized = false

    const [qty, setQty] = useState(0);
    const [hatObj, setHatObj] = useState({
        brandName: '',
        size: 0,
        color: 'black',
        text: ''
    })
    //is it even customized? 

    //on a submit (when they order)
    //log what the hat looks like (brandName,size,color,isEmbroidered,text)

    //log how many hats of that kind they want

  return (
    <div className='App-header'>
        Hats 🎩

        The color of the hat you are ordering is {hatObj.color}
    </div>
  )
}

export default App


// {isCustomized ? <input placeholder='what do you want the hat to say' type='text' /> : null}