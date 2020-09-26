import React, { useState } from 'react';
import { Header } from './Components/header';
import { Account } from './Components/account';
import { DATA } from './initial_data';
import './styles.css';

const App = () => {

  const [data, setData] = useState(DATA);

  const addAccount = (title) => {
    if(title.trim() !== "") {

      let newData = [...data, { title, items: []}]
      setData(newData)
    }
  };

  const removeAccount = (idx) => {
    let newData = data.slice(0,idx).concat(data.slice(idx+1))
    setData(newData);
  } 

  const updateAccount = (currIdx, itemsArr) => {
    let newAccData = data.map((datum, idx) => {
      if(currIdx === idx) {
        return {
          ...datum,
          items: itemsArr
        }
      }
      return datum
    })

    setData(newAccData);
  }

  return (
    <div className="App">
      <Header addAccount={addAccount}/>
      <ul>
        {data.map((acc, idx) => {
          return <Account data={acc} 
                          idx={idx} 
                          key={idx} 
                          updateAccount={updateAccount} 
                          removeAccount={removeAccount}
                          />
        })}
      </ul>
    </div>
  );
}

export default App;
