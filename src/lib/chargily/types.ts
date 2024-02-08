export enum Mode {
  CIB = "CIB",
  EDAHABIA = "EDAHABIA",
}

export enum SupportedCurrency {
  dzd = "dzd",
}

export type checkoutProps = {
  currency: SupportedCurrency;
  payment_method: Mode;
  success_url: string;
  failure_url: string;
  amount: Number;
};
