import { NextFunction } from 'express';
import itemService from '../services/item';
import AppDesktop from '../../shared/views/app.desktop';
import AppMobile from '../../shared/views/app.mobile';

const fetch = async (_req: IRequest, res: IResponse, next: NextFunction) => {
  try {
    res.locals.initialState = itemService.fetchItems();
  } catch (e) {
    // tslint:disable-next-line: no-console
    console.error(e);
  }
  next();
};

const render = (req: IRequest, res: IResponse, next: NextFunction) => {
  let ViewComponent = AppDesktop;

  if (req.device.type === 'mobile') {
    ViewComponent = AppMobile;
  }

  res.renderView(ViewComponent, { initialState: res.locals.initialState });
};

export default { fetch, render };
