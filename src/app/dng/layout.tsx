import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DNG Program | Jesus Reigns Ministries",
  description:
    "Discipling the Next Generation — JRM's structured discipleship program. Three stages: Believer, Disciple, Leader.",
};

export default function DngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
