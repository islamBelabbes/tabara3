"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

type TreeDonationProps = {
  total: number;
  treeQty: number | string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export function TreeDonation({ helpers }: { helpers: TreeDonationProps }) {
  const { total, treeQty, handleOnChange } = helpers;
  return (
    <div className="flex gap-4 flex-col">
      <span className="flex justify-center text-lg">
        يمكنك التبرع بزراعة عدد من الاشجار
      </span>

      <div className="flex gap-2">
        <Input
          placeholder="المبلغ المالي"
          className="focus-visible:ring-0  focus-visible:ring-offset-0 flex-1 flex-grow-[1.8]"
          value={total}
          disabled
        />
        <Input
          placeholder="عدد الاشجار"
          className="focus-visible:ring-0  focus-visible:ring-offset-0 flex-1 "
          value={treeQty}
          onChange={handleOnChange}
        />
      </div>

      <Button disabled={!total}>دفع {total} دج</Button>
    </div>
  );
}
