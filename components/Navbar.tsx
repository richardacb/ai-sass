import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/MobileSidebar";
import { getApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {

    const apiLimitCount = await getApiLimit()
    const isPro = await checkSubscription()

    return (
        <div className="flex items-center p-4">
            <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
            <div className="flex justify-end w-full">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
}

export default Navbar;
