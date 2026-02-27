import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give | Jesus Reigns Ministries",
  description:
    "Partner with JRM through your generous giving. Support missions, church planting, and discipleship across the Philippines and the world.",
};

export default function GiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
