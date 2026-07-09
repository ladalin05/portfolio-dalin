import { ProjectDetail as ProjectDetailSection } from '../components/Sections/ProjectDetail';
import { projects } from '../../utils/data';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const projectData = projects.find((p) => p.id === parseInt(id ?? "0"));
    if (!projectData) {                          // ← this guard MUST be here
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
                <p className="text-2xl">Project not found.</p>
            </div>
        );
    }
    return (
            <div className="relative z-10">
                <ProjectDetailSection project={projectData} index={parseInt(id ?? "1")} />
            </div>
    );
}

export default ProjectDetailPage;