"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { TUseDonation } from "../../hooks/useDonation";
import { cn } from "@/lib/utils";

export function TreeDonation({ helpers }: { helpers: TUseDonation }) {
  const {
    formState: { errors },
    handleSubmit,
    isPending,
    isSuccess,
    onSubmit,
    register,
    total,
  } = helpers;

  const isLoading = isSuccess || isPending;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 flex-col">
      <span className="flex justify-center text-lg">
        يمكنك التبرع بزراعة عدد من الاشجار
      </span>

      <div className="flex gap-2">
        <Input
          placeholder="المبلغ المالي"
          className="focus-visible:ring-0  focus-visible:ring-offset-0 flex-1 flex-grow-[1.8]"
          {...register("total")}
          disabled
        />
        <Input
          placeholder="عدد الاشجار"
          className={cn(
            "focus-visible:ring-0  focus-visible:ring-offset-0 flex-1",
            {
              "border-red-700": errors?.qty,
            }
          )}
          {...register("qty")}
        />
      </div>
      {errors?.qty && errors?.qty.message}
      <Button disabled={isLoading}>دفع {total} دج</Button>
    </form>
  );
}
