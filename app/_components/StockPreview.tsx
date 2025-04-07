import {FC} from "react";
import {getStocksByTicker} from "@/app/_lib/actions";
import {StockType} from "@/app/_lib/types";
import StockAddForm from "@/app/_components/StockAddForm";

type Props = {
    ticker: string;
}

const StockPreview: FC<Props> = async ({ticker}) => {

    if (!ticker) return

    const stock: StockType = await getStocksByTicker(ticker);

    if (!stock.name) return <span>No stock found with the ticker {ticker}</span>

    return <div className={'mt-5'}>
        <StockAddForm stock={stock}/>
    </div>
}

export default StockPreview;