"use client";

import { formatDate } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export function BlogDate({ date }: { date: string }) {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    setFormattedDate(formatDate(date));
  }, [date]);

  if (!formattedDate) {
    return <Skeleton className="h-5 w-40" />;
  }

  return (
    <p className="text-sm text-neutral-600 dark:text-neutral-400">
      {formattedDate}
    </p>
  );
}
