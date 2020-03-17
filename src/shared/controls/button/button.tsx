import React from 'react';
import classNames from 'classnames';

const namespace = 'ui__button';

const Button = ({ className, children }: IComponent) => (
  <button className={classNames(namespace, className)}>{children}</button>
);

export default Button;
