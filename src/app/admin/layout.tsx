import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Area",
  description: "Administration dashboard for managing content",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      <main className="admin-content">{children}</main>
    </div>
  );
}
