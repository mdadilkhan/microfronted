import React from 'react'
import App1 from "todo_components/App1";
import App2 from "app_two/App2"
import App3 from "app_three/App3"
const App = () => {
  return (
    <>
      <App1/>
      <App2/>
      <App3/>
      <div>hello from host</div>
    </>
  )
}

export default App