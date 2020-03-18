import React from 'react';
import classNames from 'classnames';

const namespace = 'ui__button';

const Button = ({ className, children, type, onClick }: IButton) => (
  <button className={classNames(namespace, className)} type={type} onClick={onClick}>
    {children}
  </button>
);

interface IButton extends IComponent {
  onClick?: (e: any) => void;
  type?: 'button' | 'submit' | 'reset';
}

export default Button;
