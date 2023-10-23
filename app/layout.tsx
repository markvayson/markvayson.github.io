import Provider from "@/components/Provider";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { MenuToggle } from "@/components/MenuToggle";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "MarkZv",
  description: "The Portfolio of Mark Christian Vayson",
};

export const revalidate = 10;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="overflow-hidden  !scroll-smooth"
      suppressHydrationWarning
    >
      <body className={`${poppins.className} bg-slate-50 dark:bg-slate-950`}>
        <Provider>
          <MenuToggle />
          {children}
        </Provider>
      </body>
    </html>
  );
}
