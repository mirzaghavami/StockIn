"use client"

import {Button} from "@/components/ui/button";

type Props = {
    error: Error & { digest?: string }
    reset: () => void
}

export default function Error({error, reset}: Props) {
    return (
        <main className='flex justify-center items-center flex-col gap-6'>
            <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
            <p className='text-lg'>{error.message}</p>

            <Button onClick={reset}>
                Try again
            </Button>
        </main>
    );
}