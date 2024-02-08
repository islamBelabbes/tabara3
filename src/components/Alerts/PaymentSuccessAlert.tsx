import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { customAlertProps } from "@/lib/types";
function PaymentSuccessAlert({ isOpen }: customAlertProps) {
  return (
    <AlertDialog defaultOpen={isOpen}>
      <AlertDialogContent className="border-green-700">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-green-700">
            تم التبرع بنجاح
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            ☺ تم التبرع بنجاح جعلها الله في ميزان حسناتكم
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="w-full text-green-700">
            خروج
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default PaymentSuccessAlert;
