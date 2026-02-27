import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Jesus Reigns Ministries",
  description:
    "Upcoming events at JRM — church anniversary, youth camp, family camp, prayer gatherings, and global outreaches.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
