import { Button } from "@/components/ui/button";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: IProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-xl space-y-6">
          <Button asChild variant="outline">
            <Link href="/">
              <IconArrowLeft className="size-4" />
              Back to Home
            </Link>
          </Button>

          {children}
        </div>
      </div>
    </div>
  );
}
