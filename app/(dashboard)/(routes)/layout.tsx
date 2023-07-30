import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

    const apiLimitCount = await getApiLimit()
    const isPro = await checkSubscription()
    
    return (
        <div className="relative h-full">
            <div className="hidden h-full bg-gray-900 md:flex md:flex-col md:fixed md:w-72 md:inset-y-0">
                <Sidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;
