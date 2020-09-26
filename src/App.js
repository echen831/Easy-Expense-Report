import React, { useState } from 'react';
import { Header } from './Components/header';
import { AllReports } from './Components/all';
import { DATA } from './initial_data';
import './styles.css';

const App = () => {

  const [data, setData] = useState(DATA);
  const [ showAll, setShowAll ] = useState(true);

  const addAccount = (title) => {
    if(title.trim() !== "") {

      let newData = [...data, { title, items: []}]
      setData(newData)
    }
  };

  const removeAccount = (idx) => {
    let newData = data.slice(0,idx).concat(data.slice(idx+1))
    setData(newData);
  }; 

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
  };

  const toggle = (field) => {

    switch (field) {
      case ('showAll'):
        setShowAll(!showAll);
        break;
    
      default:
        break;
    }
  }

  return (
    <div className="App">
      <Header addAccount={addAccount} toggle={toggle}/>
      <AllReports 
          updateAccount={updateAccount} 
          removeAccount={removeAccount} 
          data={data} 
          showAll={showAll}/>
    </div>
  );
}

export default App;
