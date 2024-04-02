import { IconType } from "react-icons";
import { Location } from "react-router-dom";

export interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}


export interface WidgetItemProps{
  heading:string,
  value:number,
  percent:number,
  color:string,
  amount?:boolean
}

export interface CategoryItemProps {
  color: string;
  value: number;
  heading:string
}