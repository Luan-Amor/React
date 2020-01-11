import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './components/custom.css'
import Menu from './components/menu'
import Routes from './components/routes'

function App() {
  return (
    <div className='container'>
        <Menu />
        <Routes />
    </div>

  )
}

export default App;
