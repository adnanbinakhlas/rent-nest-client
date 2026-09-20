"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import type { MetaData } from "@/types/property";

export function PropertyPagination({ meta }: { meta: MetaData }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = meta.page ?? 1;
  const totalPages = meta.totalPages ?? 1;

  function goToPage(page: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex items-center justify-between mt-8 border-t pt-4">
      <p className="text-sm text-muted-foreground">
        Showing Page{" "}
        <span className="font-medium text-foreground">{currentPage}</span> of{" "}
        <span className="font-medium text-foreground">{totalPages}</span>
      </p>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => goToPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage <= 1}
        >
          <IconChevronLeft className="h-4 w-4 mr-1" /> Previous
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => goToPage(currentPage + 1)}
          disabled={totalPages ? currentPage >= totalPages : !meta.nextPage}
        >
          Next <IconChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
