"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TreeDonation } from "./TreeDonation/TreeDonation";
import { CustomAmountDonation } from "./CustomAmountDonation/CustomAmountDonation";
import useTreeDonation from "./TreeDonation/useTreeDonation";
import useCustomAmountDonation from "./CustomAmountDonation/useCustomAmountDonation";

function DonationForm() {
  const treeDonationHelpers = useTreeDonation();
  const customAmountDonationHelpers = useCustomAmountDonation();
  return (
    <Tabs dir="rtl" defaultValue="treeDonation" className="w-[400px]">
      <TabsList className="w-full rounded-b-none">
        <TabsTrigger value="treeDonation" className="flex-1">
          تبرع بشجرة
        </TabsTrigger>
        <TabsTrigger value="CustomAmountDonation" className="flex-1">
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
    </Tabs>
  );
}

export default DonationForm;
