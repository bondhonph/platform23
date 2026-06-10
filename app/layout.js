import "./globals.css";

export const metadata = {
  title: "Platform 23 — Eat, You'll Feel Better",
  description: "Platform 23 Restaurant — Best food in town. Burgers, Pizza, Pasta, Shawarma, Coffee & more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
