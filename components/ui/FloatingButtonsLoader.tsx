"use client";

import dynamic from "next/dynamic";

const FloatingButtons = dynamic(() => import("@/components/ui/FloatingButtons"), {
  ssr: false,
});

export default function FloatingButtonsLoader() {
  return <FloatingButtons />;
}