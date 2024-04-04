import { ReactElement } from "react";

export interface ProductDataType {
    photo: ReactElement;
    name: string;
    price: number;
    stock: number;
    action: ReactElement;
  }