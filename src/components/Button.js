import React from 'react';

Button.defaultProps = {
  disabled: false,
}

function button(props){
  returns(
    <button
      className="button"
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}

export default Button;
