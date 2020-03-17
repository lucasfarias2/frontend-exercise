import express from 'express';

declare global {
  export interface IResponse extends express.Response {
    renderView: (View: React.FunctionComponent, props?: any) => void;
  }

  export interface IRequest extends express.Request {
    req: Request;
    device?: {
      type: string;
    };
  }

  export type IWindow = typeof window & {
    __PRELOADED_STATE__: object;
  };

  export interface IComponent {
    children?: React.ReactNode;
    className?: string;
    initialState?: object;
    deviceType?: string;
  }

  export interface IAction {
    type: string;
    payload: object;
  }
}
