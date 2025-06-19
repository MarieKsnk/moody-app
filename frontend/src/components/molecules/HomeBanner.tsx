import { useAuthStore } from "@/stores/authStore";
import Image from "next/image";
import React from "react";

export default function HomeBanner() {
  const user = useAuthStore((s) => s.user);
  if (!user) return null;

  const message = `Welcome back ${user.firstName}`;

  const completeMessage = [...Array(50)].map((_, i) => (
    <div className="message-complete" key={i}>
      <span className="message-text">{message}</span>
      <Image
        src="/icons/star-1.svg"
        alt=""
        width={20}
        height={20}
        className="message-icon"
        aria-hidden="true"
      />
    </div>
  ));

  return (
    <section className="home-banner" aria-hidden="true" role="presentation">
      <div className="banner-track">
        <div className="banner-group">{completeMessage}</div>
      </div>
    </section>
  );
}
