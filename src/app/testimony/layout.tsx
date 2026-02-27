import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonies | Jesus Reigns Ministries",
  description:
    "Read stories of God's grace, healing, and transformation from the JRM community around the world.",
};

export default function TestimonyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
