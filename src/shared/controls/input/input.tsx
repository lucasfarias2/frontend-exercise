import React from 'react';

const namespace = 'ui__input';

const Input = ({ icon, placeholder, value }: IInput) => {
  return (
    <div className={namespace}>
      <i className={`${namespace}__icon`}>{icon}</i>
      <input {...{ className: `${namespace}__bar`, placeholder, value }} />
    </div>
  );
};

interface IInput {
  icon?: React.ReactNode;
  placeholder?: string;
  value?: string;
}

export default Input;
