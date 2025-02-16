import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Component/Hello'
import Form from './Component/Form'
import Button from 'react-bootstrap/Button';
import ComponentClass from './Component/ComponentClass'
import ComponentFonct from './Component/ComponentFile'
import Counter from './Component/useEffect'
import Timer from './Component/tableauUseEffect'
import ColorBox from './Component/Color'
import Events from './Component/Events'
import Products from './Component/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <Hello />
      <Form labelle="First Name :" name="first name" type="text" placeholder="first name"/>
      <Form labelle="Last Name :" name="first name" type="text" placeholder="last name"/> */}
      {/* <div className="App">
      <ComponentClass />
    </div> */}
    {/* <ComponentFonct/>
    <Counter/>
    <Timer/>
    <ColorBox/> */}
     <div className="App">
      <h1 className="text-center my-4">Event Management System</h1>
      <Events/>
    </div>
     <div className="App">
      <h1 className="text-center my-4">Product</h1>
      <Products/>
    </div>
    </>
    

  )
}

export default App
