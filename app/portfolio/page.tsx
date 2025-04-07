import Stocks from "@/app/_components/Stocks";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Portfolio"
}

export default async function PortfolioPage() {


    return <>
        <h1 className="text-4xl mb-5 font-medium">
            You Portfolio
        </h1>
        <p className=" text-lg mb-10">
            Own shares in tomorrow&apos;s leading companies and watch your portfolio evolve from the comfort of wherever
            you are. It&apos;s the perfect balance of thoughtful strategy and everyday simplicity.

            Welcome to your personal financial journey
        </p>


        <Stocks/>
    </>

};