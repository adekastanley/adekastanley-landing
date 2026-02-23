import HeroSection from "@/components/homepage/heroSection";
import Projects from "@/components/homepage/projects";
import LiveProjects from "@/components/homepage/liveProjects";
import EngineeringApproach from "@/components/homepage/engineeringApproach";
import TechnicalStack from "@/components/homepage/technicalStack";
import CurrentFocus from "@/components/homepage/currentFocus";
import ContactSection from "@/components/homepage/contactSection";

export default function Home() {
	return (
		<main className="min-h-screen w-full mx-auto overflow-hidden">
			<HeroSection />
			<Projects />
			<LiveProjects />
			<EngineeringApproach />
			<TechnicalStack />
			<CurrentFocus />
			<ContactSection />
		</main>
	);
}
