'use client';
import MenuContext from "./menu-context";
import { useContext } from "react";

function useMenuContext() {
  return useContext(MenuContext)
}

export default useMenuContext;