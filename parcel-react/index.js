import React from 'react';
import ReactDom from 'react-dom';
import CounterDown from './components/CounterDown'

const App = () => {
  return <div>
    <CounterDown target={new Date().getTime() + 3900000}/>
  </div>
}

ReactDom.render(<App />, document.querySelector("#root"))