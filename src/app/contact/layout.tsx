import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Visit | Jesus Reigns Ministries",
  description:
    "Visit JRM at 811 J. Nakpil St., Malate, Manila. Sunday services at 8AM, 10:30AM, and 1PM. Call (02) 4003819.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
