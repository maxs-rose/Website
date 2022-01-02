import SectionHeader from "@components/SectionHeader";

const About = () => {
    return (
            <div className="w-full max-w-2xl space-y-4">
                <SectionHeader>
                    <h2 className="text-4xl">About</h2>
                </SectionHeader>
                <div className="bg-background-alt rounded p-4 space-y-4">
                    <p>I am an ambitious and responsible individual highly motivated to pursue a career in the technology field.</p>
                    <p>Throughout my work I have proven myself to be a fast learner and self motivated with an interest in Cyber-Physical Systems but the ability to apply myself fully in any role.</p>
                </div>
            </div>
    )
}

export default About;