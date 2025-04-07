import {FC} from "react"
import {Card} from "@/components/ui/card";
import {StockType} from "@/app/_lib/types";

type Props = {
    stock: StockType;
    numberOfShares: number;
    totalStockValue: number;
}
const StockCard: FC<Props> = async ({numberOfShares, stock, totalStockValue}) => {
    const {name, ticker, price, currency, exchange} = stock

    return <Card className={'p-3'}>
        <div>Name: {name}</div>
        <div className={'font-semibold'}>Total Stock Value: {totalStockValue}</div>
        <div>Ticker: {ticker}</div>
        <div>Number of Shares: {numberOfShares}</div>
        <div>Price: {price}</div>
        <div>Currency: {currency}</div>
        <div>Exchange: {exchange}</div>
    </Card>

}

export default StockCard;