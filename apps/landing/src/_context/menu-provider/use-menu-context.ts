'use client';
import MenuContext from "./menu-context";
import { useContext } from "react";

export function useMenuContext() {
  return useContext(MenuContext)
}

export default useMenuContext;