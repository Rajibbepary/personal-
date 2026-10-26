import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import FloatingContact from "@/components/FloatingContact";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-outfit",
});
const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
});

export const metadata = {
    title:'Rajib_Dev'
}


export default function RootLayout({ children }) {
    return (
        <html  lang="en" suppressHydrationWarning>
              <head>
        <script
            dangerouslySetInnerHTML={{
                __html: `
                    try {
                        const theme = localStorage.getItem("theme");
                        if (theme === "dark") {
                            document.documentElement.classList.add("dark");
                        } else {
                            document.documentElement.classList.remove("dark");
                        }
                    } catch (error) {}
                `,
            }}
        />
    </head>
            <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
                {children}
            <Toaster position="top-right" richColors />
            <FloatingContact/>
            </body>
        </html>
    );
}