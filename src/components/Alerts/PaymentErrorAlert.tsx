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
function PaymentErrorAlert({ isOpen }: customAlertProps) {
  return (
    <AlertDialog defaultOpen={isOpen}>
      <AlertDialogContent className="border-red-700">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-red-700">
            فشلت عملية التبرع
          </AlertDialogTitle>
          <AlertDialogDescription>
            حصلت مشكلة اثناء التبرع المرجو المحاولة مجددا او التواصل مع دعم
            الموقع 😯
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="w-full text-red-700">
            الغاء
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default PaymentErrorAlert;
