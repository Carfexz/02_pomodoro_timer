import React from "react";
import './styles/fonts.css'
import './test.css'

function App({ text = 'FONTSWORK???' }) {
  return (
    <h1 className='test'>
      {text}
    </h1>
  );
}

export default App;
