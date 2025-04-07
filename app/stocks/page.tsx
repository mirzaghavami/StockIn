import SearchStocks from "@/app/_components/SearchStocks";
import {Suspense} from "react";
import Spinner from "@/app/_components/Spinner";
import StockPreview from "@/app/_components/StockPreview";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Stocks"
}

type Props = {
    searchParams?: { ticker: string }
}

export default async function StocksPage({searchParams}: Readonly<Props>) {


    const ticker = searchParams?.ticker ?? ""


    return (<div className={''}>

        <h1 className="text-4xl mb-5 text-accent-400 font-medium">
            Our Stocks
        </h1>
        <p className=" text-lg mb-10">
            Smart yet approachable investing, right in the heart of the financial world.
            Imagine waking up to a portfolio that&apos;s growing, spending your days tracking rising trends, or just
            sitting back as your money works for you.
            Own a piece of the companies shaping tomorrow — all from the comfort of your favorite chair.
            A perfect blend of strategy and simplicity. Welcome to your financial future.
        </p>

        <SearchStocks/>

        <Suspense fallback={<Spinner/>} key={ticker}>
            <StockPreview ticker={ticker}/>
        </Suspense>

    </div>)
}