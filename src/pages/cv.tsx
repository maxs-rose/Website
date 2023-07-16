import {githubLink, linkedinLink} from "@constants/*";
import useKeybindings from "@hooks/useKeybindings";
import styles from "@styles/cv.module.css";
import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
import {RefObject, useRef} from "react";
import {AiFillLinkedin, AiOutlineGithub} from "react-icons/ai";
import {BsPhoneFill} from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import {MdWebAsset} from "react-icons/md";

const h2 = "text-4xl mb-2 text-center";
const h3 = "text-2xl";
const h4 = "text-xl";

const contactItem = "flex justify-center items-center space-x-1 mx-3 hover:italic";

const sectionStart = "flex flex-col justify-start mt-2 w-full space-y-2";
const sectionItemHeader = "flex flex-col space-y-2";
const sectionHeading = "flex items-center space-x-4";

const sectionBody = "flex flex-col space-y-2 mt-2 list-list-disc"

const CV = () => {
    const router = useRouter();
    const title = useRef<HTMLElement>(null);
    const contact = useRef<HTMLElement>(null);
    const employment = useRef<HTMLElement>(null);
    const projects = useRef<HTMLElement>(null);
    const education = useRef<HTMLElement>(null);
    const tech = useRef<HTMLElement>(null);

    const scrollTo = (ref: RefObject<HTMLElement>) => () => ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });

    useKeybindings("home", () => {
        router.push("/").then();
    });
    useKeybindings("title", scrollTo(title));
    useKeybindings("contact",scrollTo(contact));
    useKeybindings("emp", scrollTo(employment));
    useKeybindings("prod", scrollTo(projects));
    useKeybindings("edu", scrollTo(education));
    useKeybindings("tech", scrollTo(tech));

    return (
            <>
                <Head>
                    <meta charSet="utf-8"/>
                    <title>Max Rose: CV</title>
                    <meta name="description" content="Max Rose's CV"/>
                </Head>
                <div className={styles.container}>
                    <Link href="/"><a className="print:hidden absolute hover:italic">&lt; Home</a></Link>
                    <section ref={title}>
                        <h1 className="text-center p-8 text-6xl">Maximilian Rose</h1>
                        <p>
                            I am an ambitious and responsible individual highly motivated to pursue a career in the
                            technology field currently working as a full stack engineer software engineer.
                            I am a fast learner and a comprehensive person.
                            I have an interest in cyber-physical systems with my dissertation concerning improving the
                            design space exploration techniques available within the INTO-CPS co-modelling
                            toolchain.
                        </p>
                    </section>
                    <section className="flex flex-col justify-center mt-2" ref={contact}>
                        <h2 className={h2}>Contact</h2>
                        <div className="flex flex-row flex-wrap justify-evenly max-w-lg">
                            <span className={contactItem}><BsPhoneFill/> <span>07753 660179</span></span>
                            <a href="mailto:max.rose366@gmail.com?subject=Contact from Website" className={contactItem}><GrMail/> <span>max.rose366@gmail.com</span></a>
                            <Link href="/"><a target="_blank" rel="noreferrer" className={contactItem}><MdWebAsset/> <span>max-rose.com</span></a></Link>
                            <a href={githubLink} target="_blank" rel="external" className={contactItem}><AiOutlineGithub/> <span>github.com/maxs-rose</span></a>
                            <a href={linkedinLink}  target="_blank" rel="external" className={contactItem}><AiFillLinkedin/> <span>linkedin.com/in/maximilanrose</span></a>
                        </div>
                    </section>
                    <section className={sectionStart} ref={employment}>
                        <h2 className={h2}>Employment</h2>
                        <div>
                            <span className={sectionItemHeader}>
                                <div className={sectionHeading}>
                                    <h3 className={h3}>Strive Gaming</h3>
                                    <small>May 2023 - present</small>
                                </div>
                                <small>Title: Software Engineer</small>
                                <small>Role: Backend .NET engineer</small>
                            </span>
                            {/*<span className={sectionBody}>*/}
                            {/*    <div>*/}
                            {/*        <p>sfsdfsd</p>*/}
                            {/*    </div>*/}
                            {/*</span>*/}
                        </div>
                        <div>
                            <span className={sectionItemHeader}>
                                <div className={sectionHeading}>
                                    <h3 className={h3}>MRI Software</h3>
                                    <small>August 2021 - April 2023</small>
                                </div>
                                <small>Title: Software Engineer</small>
                                <small>Role: Fullstack software engineer and lead for small internal projects</small>
                            </span>
                            <span className={sectionBody}>
                                <h4 className={h4}>Projects</h4>
                                <ul className={styles.sectionList}>
                                    <li><a href="https://www.mrisoftware.com/uk/products/income-analytics/" target="_blank" rel="noreferrer">Income Analytics</a>
                                        <ul>
                                            <li>Income Analytics is a system to identify when tenants of a housing provider are likely not miss a rent payment and alert the provider before the payment is missed</li>
                                            <li>Worked on integrations with other software</li>
                                            <li>Implemented custom features for clients upon request</li>
                                            <li>Rebuilt CI pipeline to improve efficiency</li>
                                            <li>Handled various technical support issues as 3rd line support</li>
                                            <li>Worked on implementing e2e performance testing</li>
                                            <li>Investigated and implemented Server Sent Events after comparison with alternative options</li>
                                            <li>Tech: Java (Dropwizard API), Angular, TypeScript, PostgreSQL, Auth0, GitLab CI</li>
                                        </ul>
                                    </li>
                                    <li>Income Analytics: Data Generator
                                        <ul>
                                            <li>This is a project that I took the lead on</li>
                                            <li>Project was to generate random but repeatable test data that can be used during development of the system to endure that all features worked as intended</li>
                                            <li>Tech: Java, Bash</li>
                                        </ul>
                                    </li>
                                    <li>Renovate Bot
                                        <ul>
                                            <li>Another project that I have taken the lead on</li>
                                            <li>The team uses GitLab to host their repos and to allow for automatic dependency updates I setup <a href="https://www.whitesourcesoftware.com/free-developer-tools/renovate/">Renovate Bot</a> in GitLab to handle this automatically</li>
                                            <li>After it was setup for my team I demoed the bot to other teams in the company and they are now using it as well</li>
                                            <li>Tech: GitLab CI, JS</li>
                                        </ul>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </section>
                    <section className={sectionStart} ref={projects}>
                        <h2 className={h2}>Projects</h2>
                        <div>
                            <span className={sectionHeading}><h3 className={h3}><a href="https://www.envtree.net/" target="_blank" rel="noreferrer" className="hover:italic">Env Tree</a></h3></span>
                            <span className={sectionBody}>
                                <p>A simple system to help facilitate the sharing of .env like files between team members and production deployments.</p>
                                <p>
                                    I created this due to an influx of new team members and also due to issues in production from .env settings files which would have
                                    been caught if there was higher visibility throughout the development and DevOps teams over what was set and where.
                                </p>
                                <ul className={styles.sectionList}>
                                    <li>Features
                                        <ul>
                                            <li>Projects to group configurations together</li>
                                            <li>Projects can be shared with other users allowing easy onboarding of new team members</li>
                                            <li>Configurations can be linked to each other</li>
                                            <li>CLI tool to allow easy downloading of configuration files in both general purpose and headless environments</li>
                                            <li>Selfhostable with provided docker image</li>
                                        </ul>
                                    </li>
                                    <li>Tech: Typescript, NextJS, Prisma, TRPC, Turborepo</li>
                                </ul>
                            </span>
                        </div>
                    </section>
                    <section className={sectionStart} ref={education}>
                        <h2 className={h2}>Education</h2>
                        <div>
                            <span className={sectionItemHeader}>
                                <div className={sectionHeading}>
                                    <h3 className={h3}>Newcastle University (BSc)</h3>
                                    <small>2018 - 2021</small>
                                </div>
                                <small>Result: First Class Degree with Honours (80.1%)</small>
                            </span>
                            <span className={sectionBody}>
                                <h4 className={h4}>Projects</h4>
                                <ul className={styles.sectionList}>
                                    <li>Genetic Algorithms for Design Space Exploration of Cyber-Physical Systems: an Implementation in INTO-CPS
                                        <ul>
                                            <li>Research Paper: <a target="_blank" rel="noreferrer"
                                                                   href="https://arxiv.org/abs/2110.09371">Proceedings of the 19th International Overture Workshop</a></li>
                                            <li>Tech: Python</li>
                                        </ul>
                                    </li>
                                    <li>Fruit Wizard
                                        <ul>
                                            <li>This was a project that gave me valuable experience writing performant, modular, and generic code in C++</li>
                                            <li>Tech: C++</li>
                                        </ul>
                                    </li>
                                </ul>
                                <h4 className={h4}>Other Experience</h4>
                                <ul className={styles.sectionList}>
                                    <li>Newcastle University Archery Club Equipment Officer
                                        <ul>
                                            <li>Inspect the range and keep it maintained</li>
                                            <li>Help any member with any equipment issues or questions they may have</li>
                                            <li>Budget for new club equipment and maintenance costs</li>
                                            <li>Create all risk assessments for archery related activities</li>
                                        </ul>
                                    </li>
                                    <li>Newcastle University Rifle Club Secretary
                                        <ul>
                                            <li>Liaise with the police and other official bodies about members joining and leaving the club and any other issues that may arise</li>
                                            <li>Organization of competitions with the club captain</li>
                                            <li>Liaise with other clubs and AU/SU to propose ideas and changes that could be made within the club</li>
                                            <li>Oversee the maintenance of the range and all equipment within it</li>
                                            <li>Organization of club meetings</li>
                                        </ul>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </section>
                    <section className={sectionStart} ref={tech}>
                        <h2 className={h2}>Tech</h2>
                        <div>
                            <span>
                                <h3 className={h3}>Industry experience</h3>
                                <p className="mt-2 mb-2 indent-4">Java, API Design, Angular, TypeScript</p>
                            </span>
                            <span>
                                <h3 className={h3}>Interested in (no industry experience)</h3>
                                <p className="mt-2 mb-2 indent-4">C#, C++, React, NextJS, NestJS, Microservices & Monorepos, Prisma, Serverless Functions</p>
                            </span>
                        </div>
                    </section>
                    <section className={sectionStart} ref={tech}>
                        <h2 className={h2}>Other Skills & Qualifications</h2>
                        <div>
                            <ul>
                                <li></li>
                                <li>Certified SolidWorks mechanical design professional</li>
                                <li>Archery</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </>
    )
}

export default CV;
