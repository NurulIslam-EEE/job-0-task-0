"use client";
import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}

export default useTheme;
