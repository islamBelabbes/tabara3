"use client";
import React from "react";

import { Info } from "lucide-react";

import { minimumAmountToDonate } from "@/constants";
import { Input } from "../ui/input";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { UseCustomAmountDonation } from "./useCustomAmountDonation";

export function CustomAmountDonation({
  helpers,
}: {
  helpers: UseCustomAmountDonation;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = helpers;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 flex-col">
      <span className="flex justify-center text-lg">
        يمكنك التبرع بمبلغ مالي من الحقل التالي
      </span>
      <Alert className="border-blue-800">
        <Info
          className="h-4 w-4"
          color="rgb(30 64 175 / var(--tw-border-opacity))"
        />
        <AlertTitle className="text-blue-800">معلومة</AlertTitle>
        <AlertDescription className="text-blue-800">
          اقل قيمة يمكن التبرع بها {minimumAmountToDonate}
        </AlertDescription>
      </Alert>

      <div className="flex gap-1 flex-col">
        <Input
          placeholder="المبلغ المالي"
          className={cn("focus-visible:ring-0  focus-visible:ring-offset-0", {
            "border-red-700": errors?.amountToDonate,
          })}
          {...register("amountToDonate")}
        />

        {errors?.amountToDonate && errors?.amountToDonate.message}
      </div>

      <Button disabled={isSubmitting}>دفع</Button>
    </form>
  );
}
