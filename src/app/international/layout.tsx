import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International | Jesus Reigns Ministries",
  description:
    "JRM around the world — Manila, Dubai, Hong Kong, United Kingdom, Australia, America, and beyond.",
};

export default function InternationalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
