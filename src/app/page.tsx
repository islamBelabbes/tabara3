import DonationForm from "@/components/DonationForm";
import PoweredBy from "@/components/PoweredBy";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <PoweredBy />
      <DonationForm />
    </main>
  );
}
