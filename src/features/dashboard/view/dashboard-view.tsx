import { Background } from "../components/background";
import { PageHeader } from "../../../components/page-header";


export function DashboardView() {
    return (
        <div className="relative">
            <PageHeader title="Dashboard" className="lg:hidden" />
            <Background />
        </div>
    )
}