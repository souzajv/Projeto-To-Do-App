import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/dashboard/page";

export default function Page() {
    return (
        <DashboardPage className="h-screen">
            <DashboardPageHeader>
                <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
            </DashboardPageHeader>
            <DashboardPageMain>
                <h1>Tarefas</h1>
            </DashboardPageMain>
        </DashboardPage>
    )
}