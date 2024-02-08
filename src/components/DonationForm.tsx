"use client";
import React, { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TreeDonation } from "./TreeDonation/TreeDonation";
import { CustomAmountDonation } from "./CustomAmountDonation/CustomAmountDonation";
import useCustomAmountDonation from "./CustomAmountDonation/useCustomAmountDonation";
import useDonation from "../hooks/useDonation";
import PaymentSuccessAlert from "./Alerts/PaymentSuccessAlert";
import PaymentErrorAlert from "./Alerts/PaymentErrorAlert";
import { useSearchParams } from "next/navigation";

const TreeAmount = 2500;
function DonationForm() {
  const treeDonationHelpers = useDonation(TreeAmount);
  const customAmountDonationHelpers = useCustomAmountDonation();

  const isLoading =
    treeDonationHelpers.isPending ||
    customAmountDonationHelpers.isPending ||
    treeDonationHelpers.isSuccess ||
    customAmountDonationHelpers.isSuccess;
  // if we had db we should check if order id has already showed redirect alert
  const { get } = useSearchParams();

  return (
    <Tabs dir="rtl" defaultValue="treeDonation" className="w-[400px]">
      <TabsList className="w-full rounded-b-none">
        <TabsTrigger
          value="treeDonation"
          className="flex-1"
          disabled={isLoading}
        >
          تبرع بشجرة
        </TabsTrigger>
        <TabsTrigger
          value="CustomAmountDonation"
          className="flex-1"
          disabled={isLoading}
        >
          تبرع بمبلغ مالي
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value="treeDonation"
        className="mt-0 p-2 border-gray-100 min-h-[100px] border"
      >
        <TreeDonation helpers={treeDonationHelpers} />
      </TabsContent>
      <TabsContent
        value="CustomAmountDonation"
        className="mt-0 p-2 border-gray-100 min-h-[100px] border"
      >
        <CustomAmountDonation helpers={customAmountDonationHelpers} />
      </TabsContent>

      <PaymentSuccessAlert isOpen={Boolean(get("payment_success"))} />
      <PaymentErrorAlert isOpen={Boolean(get("payment_error"))} />
    </Tabs>
  );
}

export default DonationForm;
