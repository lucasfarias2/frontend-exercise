import { NextFunction } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './template';
import Script from '../../shared/utils/script';
import Style from '../../shared/utils/style';

export default (req: IRequest, res: IResponse, next: NextFunction) => {
  res.renderView = (View, props) => {
    const Component = React.createElement(View, { ...props, deviceType: req.device.type });

    const view = renderToString(Component);
    const scripts = Script.rewind();
    const styles = Style.rewind();
    res.send(template(view, scripts, styles));
  };

  next();
};
