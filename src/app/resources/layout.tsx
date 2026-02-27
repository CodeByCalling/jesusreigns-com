import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Jesus Reigns Ministries",
  description:
    "Download JRM study guides, devotionals, ministry forms, and discipleship materials. All free.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
