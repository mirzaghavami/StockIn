"use client"

import {FC, useRef} from "react";
import {Input} from "@/components/ui/input"
import {useKey} from "../_hooks/useKey";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const SearchStocks: FC = () => {
    const inputEl = useRef<HTMLInputElement>(null);
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    useKey("Enter", function () {
        if (document.activeElement === inputEl.current) {
            if (inputEl.current) {
                inputEl.current.focus();
                updateTicker(inputEl.current.value)
            }
        }
    });
    const activeTicker = searchParams.get('ticker') ?? "";


    function updateTicker(filter: string) {
        const params = new URLSearchParams(searchParams);
        params.set("ticker", filter)
        router.replace(`${pathname}?${params.toString()}`, {scroll: false})
    }


    return <div>
        <Input defaultValue={activeTicker} ref={inputEl} type={'text'}
               placeholder={"Type your ticker and press Enter e.g:AAPL"}/>
    </div>
}

export default SearchStocks;