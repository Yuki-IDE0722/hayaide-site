import "./globals.css";

export const metadata = {
  title: "HAYAIDE",
  description: "AI for safer, smarter dispensing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
