"use client";

import type { ReactNode } from "react";
import LenisProvider from "./LenisProvider";
import SiteHeader from "./SiteHeader";
import SpaceFooter from "./SpaceFooter";

type SiteShellProps = {
  children: ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <LenisProvider>
      <SiteHeader />
      {children}
      <SpaceFooter />
    </LenisProvider>
  );
}
