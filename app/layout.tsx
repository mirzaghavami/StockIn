import type {Metadata} from "next";
import "@/app/_styles/globals.css";
import {Josefin_Sans} from 'next/font/google';
import Header from "@/app/_components/Header";
import {NextFont} from "next/dist/compiled/@next/font";

const josefin: NextFont = Josefin_Sans({subsets: ['latin'], display: 'swap'})

export const metadata: Metadata = {
    title: {
        template: "%s / The StockIn",
        default: "Welcome / The StockIn"
    },
    description: "Invest like a legend."
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`$${josefin.className} antialiased min-h-screen flex  flex-col bg-secondary `}>

        <Header/>
        <div className={'flex-1 px-8 py-12 grid'}>
            <main className={'max-w-7xl mx-auto w-full'}>
                {children}
            </main>
        </div>
        <footer className={'mx-auto'}>@Copyright by StockIn {new Date().getFullYear()}</footer>
        </body>
        </html>
    );
}
