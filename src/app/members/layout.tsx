import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members Portal | Jesus Reigns Ministries",
  description:
    "JRM Members Portal — access cell group materials, ministry schedules, and internal resources.",
};

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
