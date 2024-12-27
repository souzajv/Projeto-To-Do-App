import { RocketIcon } from "@radix-ui/react-icons";

export function Logo() {
    return(
        <div className="bg-primary h-12 w-12 flex items-center justify-center rounded-md">
            <RocketIcon className="size-5 text-primary-foreground" />
        </div>
    )
}