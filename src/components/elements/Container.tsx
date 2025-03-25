"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | number | undefined;
}

const Container = ({ children, className, ...others }: ContainerProps) => {
  return (
    <div
      className={`py-6 md:px-8 lg:px-10 xl:px-20 container ${className}`}
      {...others}
    >
      {children}
    </div>
  );
};

export default Container;
