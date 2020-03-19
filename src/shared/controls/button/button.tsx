import React from 'react';
import classNames from 'classnames';

const namespace = 'ui__button';

const Button = ({ className, children, testId, type, onClick }: IButton) => (
  <button data-testid={testId} className={classNames(namespace, className)} type={type} onClick={onClick}>
    {children}
  </button>
);

interface IButton extends IComponent {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  testId?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default Button;
