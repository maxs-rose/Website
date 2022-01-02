import SectionHeader from "@components/SectionHeader";
import SocialButton from "@components/SocialButton";
import { BiTestTube } from "react-icons/bi";
import { DiAngularSimple, DiJava, DiPostgresql } from "react-icons/di";
import { FaGitAlt, FaHatWizard, FaNodeJs, FaReact } from "react-icons/fa";
import { GiBowman } from "react-icons/gi";
import { SiCsharp, SiDassaultsystemes, SiDotnet, SiTypescript } from "react-icons/si";

const About = () => {
    const aboutBadgeContainer = "w-full max-w-[20em] bg-background-alt rounded p-4 flex flex-row flex-wrap justify-evenly items-center badgeContainer";

    return (
            <div className="w-full max-w-2xl space-y-4">
                <SectionHeader>
                    <h2 className="text-4xl">About</h2>
                </SectionHeader>
                <div className="bg-background-alt rounded p-4 space-y-4">
                    <p>I am an ambitious and responsible individual highly motivated to pursue a career in the technology field.</p>
                    <p>Throughout my work I have proven myself to be a fast learner and self motivated with an interest in Cyber-Physical Systems but the ability to apply myself fully in any role.</p>
                </div>
                <section className="flex flex-row flex-wrap justify-evenly">
                    <div>
                        <SectionHeader><h3 className="text-xl">Languages</h3></SectionHeader>
                        <div className={aboutBadgeContainer}>
                            <SocialButton title="Java">
                                <DiJava />
                            </SocialButton>
                            <SocialButton title="TypeScript">
                                <SiTypescript />
                            </SocialButton>
                            <SocialButton title="PosgreSQL">
                                <DiPostgresql />
                            </SocialButton>
                            <SocialButton title="C#">
                                <SiCsharp />
                            </SocialButton>
                        </div>
                    </div>
                    <div>
                        <SectionHeader><h3 className="text-xl">Frameworks</h3></SectionHeader>
                        <div className={aboutBadgeContainer}>
                            <SocialButton title="Angular">
                                <DiAngularSimple />
                            </SocialButton>
                            <SocialButton title="React">
                                <FaReact />
                            </SocialButton>
                            <SocialButton title="NodeJS">
                                <FaNodeJs />
                            </SocialButton>
                            <SocialButton title="Dropwizard">
                                <FaHatWizard />
                            </SocialButton>
                            <SocialButton title=".NET 5/6">
                                <SiDotnet />
                            </SocialButton>
                        </div>
                    </div>
                    <div>
                        <SectionHeader><h3 className="text-xl">Misc</h3></SectionHeader>
                        <div className={aboutBadgeContainer}>
                            <SocialButton title="Git">
                                <FaGitAlt />
                            </SocialButton>
                            <SocialButton title="Unit Testing">
                                <BiTestTube />
                            </SocialButton>
                            <SocialButton title="Archery">
                                <GiBowman />
                            </SocialButton>
                            <SocialButton title="SolidWorks">
                                <SiDassaultsystemes />
                            </SocialButton>
                        </div>
                    </div>
                </section>
            </div>
    )
}

export default About;