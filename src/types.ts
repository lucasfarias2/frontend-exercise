import express from 'express';

declare global {
  export type TItem = string;
  export type TFilter = string;
  export type TSelectedItems = TItem[];
  export type TData = TItem[];
  export type TWindow = typeof window & {
    __PRELOADED_STATE__: object;
  };

  export interface IResponse extends express.Response {
    renderView: (View: React.FunctionComponent, props?: any) => void;
  }

  export interface IRequest extends express.Request {
    req: Request;
    device?: {
      type: string;
    };
  }

  export interface IInitialState {
    data: TData;
    selectedItems: TSelectedItems;
  }

  export interface IComponent {
    children?: React.ReactNode;
    className?: string;
    initialState?: IInitialState;
    deviceType?: string;
  }

  export interface IAction {
    type: string;
    payload?: { item?: TItem; filter?: TFilter };
  }

  export interface IState {
    data: TData;
    selectedItems?: TSelectedItems;
    filter: TFilter;
  }
}
