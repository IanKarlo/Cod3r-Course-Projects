import React from 'react';

import './index.css';

export default ({text, operation, span, click}) => {
  return(
    <button
    onClick={() => click && click(text)}
    className={`button ${operation ? 'operation' : ''} ${span ? (span === 2 ? 'double' : 'triple') : ''}`}
    >
      {text}
    </button>
  )
}