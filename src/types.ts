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

  export type TWindow = typeof window & {
    __PRELOADED_STATE__: object;
  };

  export interface IInitialState {
    data: string[];
    selectedItems: string[];
  }

  export interface IComponent {
    children?: React.ReactNode;
    className?: string;
    initialState?: IInitialState;
    deviceType?: string;
  }

  export interface IAction {
    type: string;
    payload: { item: string; filter: string };
  }

  export type TItem = string;
  export type TFilter = string;
  export type TSelectedItems = TItem[];
  export type TData = TItem[];
}
