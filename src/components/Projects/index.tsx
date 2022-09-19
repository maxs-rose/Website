import SectionHeader from "@components/SectionHeader";
import { AiOutlineGithub } from "react-icons/ai";
import { MdWebAsset } from "react-icons/md";

const Projects = () => {
    const projectLinkIcon = "flex justify-center items-center space-x-1 mx-3 hover:italic";

    return (
            <div className="w-full max-w-2xl space-y-4">
                <SectionHeader>
                    <h2 className="text-4xl">Projects</h2>
                </SectionHeader>
                <section>
                    <div>
                        <SectionHeader><h3 className="text-xl">Env Tree</h3></SectionHeader>
                        <div className="bg-background-alt rounded p-4 space-y-4">
                            <p>A simple system to store, manage, and share .env like files across environments and development teams.</p>
                            <p>
                                I created this due to an influx of new team members and also due to issues in production from .env settings files which would have been caught if there was higher visibility throughout the development and DevOps teams over what was set and where.
                                This has now become a valued tool within the teams workflow.
                            </p>
                            <div className="flex gap-2">
                                <a href="https://www.envtree.net" target="_blank" rel="external" className={projectLinkIcon}><MdWebAsset /> <span>Website</span></a>
                                <a href="https://github.com/maxs-rose/env-tree" target="_blank" rel="external" className={projectLinkIcon}><AiOutlineGithub/> <span>github.com/env-tree</span></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    )
}

export default Projects;
