import React, { useState } from 'react';
import {AccountShow} from './comp/account_show';
// import { Header } from './Components/header';
// import { AllReports } from './Components/reports/all';
// import { WeekReport } from './Components/reports/week';
// import { DayReport } from './Components/reports/day';
// import { MonthReport } from './Components/reports/month';
import { DATA, ACCOUNTS } from './initial_data';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

library.add(fab, fas);


const App = () => {

  const [data, setData] = useState(ACCOUNTS);
  const [ show, setShow ] = useState({all: true, month: false, week: false, day: false})

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
      case ('all'):
        setShow({ all: true, month: false, week: false, day: false });
        break;

      case('week'):
        setShow({ all: false, month: false, week: true, day: false });
        break;

      case ('day'):
        setShow({ all: false, month: false, week: false, day: true });
        break;

      case ('month'):
        setShow({ all: false, month: true, week: false, day: false });
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <AccountShow account={data[0]}/>
      {/* <Header addAccount={addAccount} toggle={toggle}/>
      <AllReports 
          updateAccount={updateAccount} 
          removeAccount={removeAccount} 
          data={data} 
          showAll={show.all}/>
      <WeekReport showWeek={show.week} data={data}/>
      <MonthReport showMonth={show.month}/>
      <DayReport showDay={show.day}/> */}
    </div>
  );
}

export default App;
