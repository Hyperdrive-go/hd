import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Layout({ children }: Props) {
  return (
    <div className="m-0 flex flex-1 flex-col items-stretch justify-between overflow-x-hidden bg-black">
      {children}
    </div>
  );
}
