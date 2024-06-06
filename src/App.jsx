import { useState } from 'react'
import './App.css'
import Toaster from './Components/Toaster';
import useToaster from './hooks/UseToaster';

function App() {
 const [position ,setPosition] = useState('top-right');
 const [animation ,setAnimation] = useState('translate');
 const {triggerToaster,Toast} = useToaster(position,animation);
  return (
    <div>
      {Toast}
         <div className='container'>
                 <div>
                  <h1>Trigger a Toast</h1>

                  <div className='buttonContainer'>
                    <button onClick={() => triggerToaster({
                      message: 'this is success',
                      type:'success',
                    })}>Success</button>
                    <button onClick={() => triggerToaster({
                      message: 'this is success',
                      type:'error',
                    })}>Error</button>
                    <button onClick={() => triggerToaster({
                      message: 'this is success',
                      type:'warning',
                    })}>Warning</button>
                    <button onClick={() => triggerToaster({
                      message: 'this is success',
                      type:'info',
                    })}>Info</button>
                  </div>
                 </div>
               </div>
            <div className='s'>
              <select  onClick={(e) =>setPosition(e.target.value)}>
                <option value='top-right'>top-right</option>
                <option value='bottom-right'>bottom-right</option>
                <option value='top-left'>top-left</option>
                <option value='bottom-left'>bottom-left</option>
              </select>
              <select  onClick={(e) =>setAnimation(e.target.value)}>
                <option value='translate'>translate</option>
                <option value='fade-in'>fade-in</option>
                <option value='bounce'>bounce</option>
              </select>
              </div> 
               
         </div>
    
  )
}

export default App
