import {FC, Suspense} from "react";
import {getUserStocks} from "@/app/_lib/data-service";
import {auth} from "../_lib/auth";
import StockCard from "@/app/_components/StockCard";
import Spinner from "@/app/_components/Spinner";
import {getStocksByTicker} from "@/app/_lib/actions";
import {Session} from "next-auth";
import {StocksMappedType} from "@/app/_lib/types";

const Stocks: FC = async () => {
    // Check the user is logged in
    const session: Session | null = await auth();
    if (!session || !session.user) return null;

    // Get all the stocks for the current user from the supabase
    const stocks = await getUserStocks(session.user)
    // Mapping the fetched user stock's tickers and number of shares with the updated price of the stocks
    const stocksMapped : StocksMappedType[] = await Promise.all(stocks.map(async (stock) => {
        const updateStatusStock = await getStocksByTicker(stock.stockTicker)

        // Caculate the total stock value for each stock based on the number of shares and stock price
        const totalStockValue = Number(stock.numberOfShares) * Number(updateStatusStock.price);
        return {...updateStatusStock, ...stock, totalStockValue}
    }))


    // Calculate the total value of the current user by sum all their stocks values
    const totalValueOfUser = stocksMapped.reduce((accumulator, stock) => {
        return stock.totalStockValue + accumulator
    }, 0)


    return <div className={"flex flex-col gap-3"}>
        <Suspense fallback={<Spinner/>}>
            <>
                <span className={'font-bold text-3xl'}>Your Total Value : {totalValueOfUser}</span>
                {stocksMapped.map(stock =>
                    <StockCard totalStockValue={stock.totalStockValue} numberOfShares={stock.numberOfShares}
                               stock={stock}
                               key={stock.stockTicker}/>
                )}
            </>
        </Suspense>
    </div>

}
export default Stocks;