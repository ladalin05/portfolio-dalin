import { Projects as ProjectsSection } from "../components/Sections/Projects";
import { projects } from "../../utils/data";

const ProjectPage = () => {

    return (
        <div className="relative z-10">
            <ProjectsSection projects={projects} />
        </div>
    )
}

export default ProjectPage;