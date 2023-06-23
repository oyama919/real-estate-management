import clsx from "clsx";
import "./globals.css";
import { notojp, inter } from "./fonts";
// import { Noto_Sans_JP } from "next/font/google";

// const NOTO_SANS_JP = Noto_Sans_JP({ subsets: ["latin"] });

// export const metadata = {
//   weight: ["400", "500"],
//   subsets: ["latin"],
//   display: "swap",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={clsx(
          notojp.className,
          inter.className,
          "bg-white",
          "text-black"
        )}
      >
        <main className="flex min-h-screen flex-col max-w-3xl mx-auto ">
          <header className="self-center p-3 m-0">
            <h1 className="text-sm m-10">Real Estate Management</h1>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
