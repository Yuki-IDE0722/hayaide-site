import "./globals.css";
import { Zen_Maru_Gothic } from "next/font/google";

const font = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
