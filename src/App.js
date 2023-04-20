import React from 'react';
import './App.css';
import Rastro from './componentes/rastro';
import { Button, Divider } from 'antd';

const  App = () => {

  return (
    <Divider className="App">
      <Divider className="App-content">
        <p>
          Aquí haremos nuestra lista de tareas
        </p>
        <Rastro />
      </Divider>
    </Divider>
  );
}

export default App;