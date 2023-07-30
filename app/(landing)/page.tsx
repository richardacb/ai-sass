import LandingContent from "@/components/LandingContent";
import LandingNavbar from "@/components/LandingNavbar";
import LnadingHero from "@/components/LnadingHero";

const LandingPage = () => {
    return (
        <div className="h-full">
            <LandingNavbar />
            <LnadingHero />
            <LandingContent />
        </div>
    );
}

export default LandingPage;
