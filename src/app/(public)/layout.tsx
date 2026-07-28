import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: IProps) {
  return <div>{children}</div>;
}
