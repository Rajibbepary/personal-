import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

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



export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
                {children}
            <Toaster position="top-right" richColors />
            </body>
        </html>
    );
}