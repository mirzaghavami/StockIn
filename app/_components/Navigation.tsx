import {FC, MouseEvent} from "react";
import {auth} from "@/app/_lib/auth";
import Link from "next/link";
import {Session} from "next-auth";
import {signOutAction} from "@/app/_lib/actions";
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import SignOutButton from "@/app/_components/SignOutButton";
import {PORTFOLIO, STOCKS} from "@/app/_lib/routes";

const Navigation: FC = async () => {
    const session: Session | null = await auth();



    return (
        <NavigationMenu>
            <NavigationMenuList className={'flex flex-row gap-5'}>
                <NavigationMenuItem>
                    <Link href={PORTFOLIO} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Portfolio
                        </NavigationMenuLink>
                    </Link>

                </NavigationMenuItem>


                <NavigationMenuItem>
                    <Link href={STOCKS} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Stocks
                        </NavigationMenuLink>
                    </Link>

                </NavigationMenuItem>

                <NavigationMenuItem>

                    {session?.user?.image ?
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>

                                <span className=" transition-colors flex items-center gap-4  ">
                            <Image width={'35'} height={'15'} alt={session.user.name || "User image"}
                                   referrerPolicy={"no-referrer"} className={'h-8 rounded-full'}
                                   src={session.user.image}/>
                            <span>{session.user.name}</span>
                        </span>


                        </NavigationMenuLink>
                        : <Link href="/login" legacyBehavior passHref><NavigationMenuLink
                            className={navigationMenuTriggerStyle()}>Login</NavigationMenuLink></Link>}
                </NavigationMenuItem>
                <NavigationMenuItem>
                    {session?.user &&
                        <SignOutButton/>


                    }
                </NavigationMenuItem>


            </NavigationMenuList>
        </NavigationMenu>)


}


export default Navigation;