import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer Wall | Jesus Reigns Ministries",
  description:
    "Submit your prayer requests to the JRM community. Our pastoral team and church family will pray with you.",
};

export default function PrayerWallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
