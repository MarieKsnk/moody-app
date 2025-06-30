import { useAuthStore } from "@/stores/authStore";
import Image from "next/image";
import React from "react";

export const HomeBanner: React.FC = () => {
  const user = useAuthStore((s) => s.user);
  if (!user) return null;

  const message = `Welcome back ${user.firstName}`;

  const completeMessage = [...Array(50)].map((_, i) => (
    <div className="home-banner__item" key={i}>
      <span className="home-banner__text">{message}</span>
      <Image
        src="/icons/star-1.svg"
        alt=""
        width={20}
        height={20}
        className="home-banner__icon"
        aria-hidden="true"
      />
    </div>
  ));

  return (
    <div className="home-banner" role="presentation" aria-hidden="true">
      <div className="home-banner__track">
        <div className="home-banner__group">{completeMessage}</div>
      </div>
    </div>
  );
};
