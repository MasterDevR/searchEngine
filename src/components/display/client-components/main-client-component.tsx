"use client";
import React, { ReactNode, useState } from "react";
interface LayoutProps {
  children: ReactNode;
}
const mainClientComponent: React.FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default mainClientComponent;
