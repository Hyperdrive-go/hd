import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Layout({ children }: Props) {
  return (
    <div className="m-0 flex flex-1 flex-col items-stretch justify-between overflow-x-hidden bg-gray-900 bg-gradient-to-r from-[#da10109e]">
      {children}
    </div>
  );
}
