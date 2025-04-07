"use client";

import {Button} from "@/components/ui/button";
import Image from 'next/image'
import {FC} from "react";
import {signInAction} from "@/app/_lib/actions";
import {useSearchParams} from "next/navigation";

const SignInButton: FC = () => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams)
    const callbackUrlParam = params.get('callbackUrl')?.toString() || "";

    return (
        <form action={signInAction}>
            <input type={'hidden'} name={"callbackUrl"} defaultValue={callbackUrlParam}/>
            <Button className='flex items-center gap-6 text-lg  px-10 py-4 font-medium'>
                <Image
                    src='https://authjs.dev/img/providers/google.svg'
                    alt='Google logo'
                    height='24'
                    width='24'
                />
                <span>Continue with Google</span>
            </Button>
        </form>

    );
}

export default SignInButton;
