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
                    let savedTheme = null;
                    try {
                        savedTheme = localStorage.getItem("theme");
                    } catch (error) {
                        console.warn("Unable to read the saved theme preference.", error);
                    }

                    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    const useDarkTheme = savedTheme === "dark" || (savedTheme !== "light" && prefersDark);
                    document.documentElement.classList.toggle("dark", useDarkTheme);
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