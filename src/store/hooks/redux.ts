import { useDispatch } from "react-redux"
import { useSelector } from "react-redux/es/exports"
import { TypedUseSelectorHook } from "react-redux/es/types"
import { AppDispatch, RootState } from "../store"

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;