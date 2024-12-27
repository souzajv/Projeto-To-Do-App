import { cn } from "@/lib/utils"

export type DashboardPageGenericProps<T = unknown> = {
    children: React.ReactNode
    className?: string
} & T

export function DashboardPage({ children, className }: DashboardPageGenericProps) {
    return (
        <section className={cn(['w-full', className])}>
            {children}
        </section>
    )
}

export function DashboardPageHeader({ children, className }: DashboardPageGenericProps) {
    return (
        <header className={cn(['px-6 py-3 h-20 border-b border-border flex items-center', className])}>
            {children}
        </header>
    )
}

export function DashboardPageHeaderTitle({ children, className }: DashboardPageGenericProps) {
    return (
        <span className={cn(['text-xl text-muted-foreground uppercase', className])}>
            {children}
        </span>
    )
}

export function DashboardPageHeaderNav({ children, className }: DashboardPageGenericProps) {
    return (
        <nav className={cn(['', className])}>
            {children}
        </nav>
    )
}

export function DashboardPageMain({ children, className }: DashboardPageGenericProps) {
    return (
        <main className={cn(['p-6', className])}>
            {children}
        </main>
    )
}