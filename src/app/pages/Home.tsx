import { Hero as HeroSection } from "../components/Sections/Hero";
import { About as AboutSection } from "../components/Sections/About";
import { Skills as SkillsSection } from "../components/Sections/Skills";
import { Projects as ProjectSection } from "../components/Sections/Projects";
import { Experience as ExperienceSection } from "../components/Sections/Experience";
import { Contact as ContactSection } from "../components/Sections/Contact";
import { projects } from "../../utils/data";

const HomePage = () => {

    return (
        <main className="relative">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection projects={projects} />
            <ExperienceSection />
            <ContactSection />
        </main>
    )
}

export default HomePage;