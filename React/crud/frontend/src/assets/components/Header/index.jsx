import React from 'react';

import './index.css';

export default ({ icon, title, subtitle}) => {
  return (
    <header className="header d-none d-sm-flex flex-column">
      <h1 className="mt-3">
        <i className={`fa fa-${icon}`}/> {title}
      </h1>
      <p className="lead text-muted">{subtitle}</p>
    </header>
  );
}