import React from 'react';

const Button = ({ text, isClick, handleClick, handleTap }) => {
  return(
    <button
      className={ isClick ? 'click-button' : 'reset-button' }
      onClick={handleClick}
      onTouchStart={handleTap}>
      {text}
    </button>
  )  
}

export default Button;