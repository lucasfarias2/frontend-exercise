import React from 'react';
import classNames from 'classnames';

const namespace = 'ui__button';

const Button = ({ className, children, onClick }: IButton) => (
  <button className={classNames(namespace, className)} onClick={onClick}>
    {children}
  </button>
);

interface IButton extends IComponent {
  onClick?: () => {};
}

export default Button;
