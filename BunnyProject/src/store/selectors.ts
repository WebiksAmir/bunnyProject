import { useDispatch,useSelector } from "react-redux";
import { AppDispatch } from "./store";


export const useAppDispatch = ()=>useDispatch<AppDispatch>()

export const bunnyState = ((state:any) => state.bunny);
export const duckState = ((state:any) => state.duck);
