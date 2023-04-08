"use client";
import { ThemeProvider } from "next-themes";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider storageKey="preferred-theme" attribute="class">
      {children}
    </ThemeProvider>
  );
};
