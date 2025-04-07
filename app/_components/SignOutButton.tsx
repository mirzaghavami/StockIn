"use client"
import {MouseEvent} from 'react';
import {signOutAction} from "@/app/_lib/actions";
import {Button} from "@/components/ui/button";

function SignOutButton() {
    return (
        <Button variant={'destructive'} onClick={(event: MouseEvent<HTMLButtonElement>): Promise<void> => signOutAction()}>
            Sign out
        </Button>
    );
}

export default SignOutButton;
