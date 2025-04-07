import {supabase} from "@/app/_lib/supabase";
import {UserInsert} from "@/app/_lib/types";
import {User} from "next-auth";
import {Tables} from "@/database.types";

// Create user on sign up with Google for first time and create the row in Supabase 'users' table
export async function createUser(newUser: UserInsert) {
    const {data, error} = await supabase.from('users').insert([newUser]);

    if (error) {
        console.error(error);
        throw new Error('User could not be created');
    }

    return data;
}

// Get User by their email from 'users' table on Supabase
export async function getUser(email: string): Promise<Tables<'users'> | null> {
    const {data} = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

    // No error here! We handle the possibility of no user in the sign in callback
    return data;
}

// Get user stocks by their user id from 'portfolio' table on Supabase
// TODO: the parameter of function should change to user id as we just need the id
export async function getUserStocks(user: User): Promise<{
    stockTicker: Tables<'portfolio'>['stockTicker'],
    numberOfShares: Tables<'portfolio'>['numberOfShares']
}[]> {

    const {data, error} = await supabase
        .from('portfolio')
        .select('stockTicker, numberOfShares')
        .eq('userId', Number(user.id))

    if (error) {
        console.error(error);
        throw new Error('could not get user stocks');
    }

    return data.map(d => ({stockTicker: d.stockTicker, numberOfShares: d.numberOfShares}))
}