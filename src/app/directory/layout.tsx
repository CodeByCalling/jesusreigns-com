import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church Directory | Jesus Reigns Ministries",
  description:
    "Find a Jesus Reigns Ministries church near you. 85 provincial churches and 55 ongoing missions across the Philippines.",
};

export default function DirectoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
