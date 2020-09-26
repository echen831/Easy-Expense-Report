import React, { useState } from 'react';
import { Header } from './Components/header';
import { Account } from './Components/account';
import { DATA } from './initial_data';
import './styles.css';

const App = () => {

  const [data, setData] = useState(DATA);

  const add = (title) => {
    let newData = [...data, { title, items: []}]
    setData(newData)
  };

  return (
    <div className="App">
      <Header add={add}/>
      <ul>
        {data.map((acc, idx) => {
          return <Account data={acc} idx={idx} key={idx}/>
        })}
      </ul>
    </div>
  );
}

export default App;
