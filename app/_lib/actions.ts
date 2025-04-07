"use server"

import {PortfolioInsert, StockType} from "@/app/_lib/types";
import {getErrorMessage} from "@/app/_lib/utilities";
import {auth, signIn, signOut} from "@/app/_lib/auth";
import {supabase} from "./supabase";
import {getUserStocks} from "@/app/_lib/data-service";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import {PORTFOLIO} from "@/app/_lib/routes";
import {Session} from "next-auth";

// A server action to call our API to get stocks by ticker
export async function getStocksByTicker(tickerId: string): Promise<StockType> {
    if (typeof process.env.API_NINJAS_KEY === 'undefined') {
        throw new Error('Environment variable API_NINJAS_KEY is undefined.')
    }
    try {
        const res = await fetch(`https://api.api-ninjas.com/v1/stockprice?ticker=${tickerId}`,
            {headers: {"X-Api-Key": process.env.API_NINJAS_KEY}});
        return await res.json();
    } catch (e) {
        reportError({message: getErrorMessage(e)})
        throw new Error('Could not fetch stocks', {cause: getErrorMessage(e)});
    }
}

// The bellow server action function is intended to add stocks by having form data as argument
export async function addToPortfolio(formData: FormData): Promise<void> {


    // 1) Authentication
    const session: Session | null = await auth();
    if (!session || !session.user) throw new Error("You must be logged in");

    // 2) Parse updatedData
    const updatedData: PortfolioInsert = {
        userId: Number(session.user.id),
        stockTicker: String(formData.get('stockTicker')),
        numberOfShares: Number(formData.get('numberOfShares'))
    };

    // 3) Get current user stock tickers
    const userStocks = await getUserStocks(session.user);

    // 4) Check the user has the current ticker
    if (updatedData.stockTicker && userStocks.map(stock => stock.stockTicker)
        .includes(updatedData.stockTicker))
        throw new Error("You have the current stock ticker in your portfolio");


    // 5) Mutation
    const {error} = await supabase
        .from('portfolio')
        .insert(updatedData)
        .select()
        .single()

    if (error) {
        console.error(error);
        throw new Error('Stock could not be added');
    }

    // 6) Revalidation
    revalidatePath(PORTFOLIO)

    // 7) Redirect
    redirect(PORTFOLIO);

}

// Sign in with google provider server action function with redirect to the route after signing in
export async function signInAction(formData: FormData): Promise<void> {
    const callbackUrl = formData.get('callbackUrl')?.toString() || "";
    await signIn('google', {redirectTo: callbackUrl});
}

// Sign out server action
export async function signOutAction(): Promise<void> {
    await signOut({redirectTo: '/'});
}