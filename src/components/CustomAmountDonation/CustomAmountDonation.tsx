"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Info } from "lucide-react";

type CustomAmountDonationProps = {
  amountToDonate: number | string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function CustomAmountDonation({
  helpers,
}: {
  helpers: CustomAmountDonationProps;
}) {
  const { amountToDonate, handleOnChange } = helpers;
  return (
    <div className="flex gap-4 flex-col">
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
          اقل قيمة يمكن التبرع بها 500 (50الف)
        </AlertDescription>
      </Alert>
      <Input
        placeholder="المبلغ المالي"
        className="focus-visible:ring-0  focus-visible:ring-offset-0"
        value={amountToDonate}
        onChange={handleOnChange}
      />

      <Button disabled={!amountToDonate}>
        دفع {amountToDonate ? amountToDonate : 0} دج
      </Button>
    </div>
  );
}
