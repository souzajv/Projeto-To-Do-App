'use client'
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";

type Props = {
    user: Session['user']
}

export function UserInfo({ user }: Props) {
    if (!user) return
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Avatar>
                <AvatarFallback>
                    U
                </AvatarFallback>
            </Avatar>
            <span>{user.email}</span>
            <Button onClick={() => signOut()}
                className="font-black uppercase">
                Sair
            </Button>
        </div>
    )
}