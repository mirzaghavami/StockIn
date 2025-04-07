"use client"
import React, {FC} from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {StockType} from "@/app/_lib/types";
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {addToPortfolio} from "@/app/_lib/actions";

type Props = {
    stock: StockType;
}

const StockAddForm: FC<Props> = ({stock}) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const onCancelAddStock = (): void => {
        const params: URLSearchParams = new URLSearchParams(searchParams);
        params.delete("ticker")
        router.replace(`${pathname}?${params.toString()}`, {scroll: false})
    }

    return <Card className="w-[350px]">
        <CardHeader>
            <CardTitle>Add Stock to Portfolio</CardTitle>
            <CardDescription>Add your new stock in one-click.</CardDescription>
        </CardHeader>
        <form action={addToPortfolio}>
            <CardContent>

                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label>Name : {stock.name}</Label>

                        <Label>Price : {stock.price} {stock.currency}</Label>

                        <Label htmlFor="stockTicker">Ticker</Label>
                        <Input type={'text'} value={stock.ticker} readOnly name="stockTicker"/>

                        <Label htmlFor="numberOfShares">number of shares</Label>
                        <Input type={"number"} min={1} max={100} name="numberOfShares"
                               placeholder="enter your number of shares..."/>
                    </div>

                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={onCancelAddStock}>Cancel</Button>
                <Button>Add to Portfolio</Button>
            </CardFooter>
        </form>


    </Card>
};

export default StockAddForm;