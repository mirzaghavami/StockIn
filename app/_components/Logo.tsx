import Link from "next/link";
import {FC} from "react";
import Image from "next/image";

const Logo: FC = () => {
    return <Link href={"/"} className={"flex items-center gap-4 z-10"}>
        <Image className={'bg-slate-950 rounded-full'} src="/logo.png" height="60" width="60" alt="Stockin Logo"/>
        <span className="text-xl font-semibold text-primary-foreground">
        StockIn
      </span>
    </Link>
}

export default Logo;