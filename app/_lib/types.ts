import {Tables} from "@/database.types";

// Stock type returns by API
export type StockType = {
    "ticker": string,
    "name": string,
    "price": number,
    "exchange": string,
    "updated": number,
    "currency": string
}

// Type to insert to 'portfolio' table
export type PortfolioInsert = {
    userId: number;
    stockTicker: string;
    numberOfShares: number;
};

// Type to insert to 'users' table
export type UserInsert = {
    id?: number;
    fullName: string;
    email: string;

}


// Mapped stocks type inorder to show in portfolio page
export type StocksMappedType = StockType & {
    stockTicker: Tables<"portfolio">["stockTicker"]
    numberOfShares: Tables<"portfolio">["numberOfShares"]
    totalStockValue: number;

}