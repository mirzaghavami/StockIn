import Link from "next/link";
import bgImage from "@/public/bg.png"
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {STOCKS} from "@/app/_lib/routes";

export default function Home() {
    return <main className="mt-24">
        <Image
            src={bgImage}
            alt="invest in stocking"
            quality={100}
            placeholder={"blur"}
            fill={true}
            className={'object-cover object-top'}
        />

        <div className={"relative z-10 text-center text-primary-foreground"}>
            <h1 className={"text-8xl mb-10 tracking-tight font-normal"}>
                Welcome To Invest
            </h1>

            <Link
                href={STOCKS}
                className="px-8 py-6 text-lg font-semibold "
            >
                <Button>
                    Explore stocks
                </Button>
            </Link>
        </div>


    </main>


}
