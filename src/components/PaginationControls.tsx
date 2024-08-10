import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};
export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  const btnStyle =
    "flex items-center gap-x-2 hover:opacity-100 transition text-sm text-white px-5 py-3 bg-white/5 rounded-md opacity-75";
  return (
    <section className="mt-5 flex w-full justify-between">
      {previousPath === "" ? (
        <div />
      ) : (
        <Link href={previousPath} className={btnStyle}>
          <ArrowLeftIcon />
          Previous
        </Link>
      )}
      {nextPath && (
        <Link href={nextPath} className={btnStyle}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
