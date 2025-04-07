import NextAuth, {NextAuthConfig} from 'next-auth'
import Google from "next-auth/providers/google";
import {createUser, getUser} from "@/app/_lib/data-service";
import {LOGIN} from "@/app/_lib/routes";


const authConfig = {
    providers: [Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET
    })],
    callbacks: {
        authorized({auth, request: {nextUrl}}) {
            return !!auth?.user;
        },
        async signIn({user}) {
            try {
                if (!!user.email && !!user.name) {
                    const isExistingUser = await getUser(user.email)
                    if (!isExistingUser)
                        await createUser({email: user.email, fullName: user.name})
                }


                return true
            } catch {
                return false
            }
        },
        async session({session}) {
            const user = await getUser(session.user.email)
            if (user?.id) {
                session.user.id = String(user.id)
            }
            return session
        },

    },
    pages: {
        signIn: LOGIN,
    }
} satisfies NextAuthConfig;


export const {auth, handlers: {GET, POST}, signIn, signOut} = NextAuth(authConfig);