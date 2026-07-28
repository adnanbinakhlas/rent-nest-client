import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: IProps) {
  return <div>{children}</div>;
}
