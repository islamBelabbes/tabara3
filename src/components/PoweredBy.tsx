import Image from "next/image";
import React from "react";

function PoweredBy() {
  return (
    <div className="flex gap-2 items-center">
      <span>PoweredBy</span>
      <a href="https://chargily.com/" target="_blank">
        <Image src="/poweredby.webp" width={50} height={50} alt="powered By" />
      </a>
    </div>
  );
}

export default PoweredBy;
