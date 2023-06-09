import React from 'react';
import Header from './Header';
import PhoneList from './PhoneList';
import { Route, Routes } from 'react-router-dom';
import CreateAttribute from './CreatePhone';

const App = () => {
  return (
    <div className="center w85 ">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<PhoneList/>} />
          <Route
            path="/create"
            element={<CreatePhone/>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
