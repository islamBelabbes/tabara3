import React, { useMemo, useState } from "react";

const TreeAmount = 2500;
function useTreeDonation() {
  const [treeQty, setTreeQty] = useState<number | string>("");

  const total: number = useMemo(() => Number(treeQty) * TreeAmount, [treeQty]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value === "") return setTreeQty("");
    if (isNaN(Number(value))) return;

    setTreeQty(Number(value));
  };

  return {
    treeQty,
    total,
    handleOnChange,
  };
}

export default useTreeDonation;
