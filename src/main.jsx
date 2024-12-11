import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



const Btn = () => {
  return<section>
    <div className='biop'>
    <button className='blue'>Primary</button>
    <button className='bolr'>Secondary</button>
    <button className='opk'>Success</button>
    <button className='liop'>Danger</button>
    <button className='jug'>Warning</button>
    <button className='gih'>info</button>
    <button className='knm'>Dark</button>
    </div>
  </section>
 }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Btn />
    <App />
  </StrictMode>,
)
