import React from 'react';

import './index.css';

import Header from '../Header';

export default (props) => {
  return (
    <>
      <Header {...props}/>
      <main className="content container-fluid">
        <div className="mt-3 p-3">
          {props.children}
        </div>
      </main>
    </>
  );
}