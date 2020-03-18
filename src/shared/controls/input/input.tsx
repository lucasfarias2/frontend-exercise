import React from 'react';

const namespace = 'ui__input';

const Input = ({ icon, onChange, placeholder, value }: IInput) => {
  return (
    <div className={namespace}>
      <i className={`${namespace}__icon`}>{icon}</i>
      <input {...{ className: `${namespace}__bar`, onChange, placeholder, value }} />
    </div>
  );
};

interface IInput {
  icon?: React.ReactNode;
  onChange?: any;
  placeholder?: string;
  value?: string;
}

export default Input;
