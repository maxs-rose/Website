import DisplayButton from "@components/DisplayButton";
import SocialButton from "@components/SocialButton";
import { githubLink, linkedinLink } from "@constants/*";
import useKeybindings from "@hooks/useKeybindings";
import { useRouter } from "next/router";
import { AiFillIdcard, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Landing = () => {
    const router = useRouter();
    useKeybindings("cv", () => router.push("cv").then());

    return (
            <div className="max-w-xs ">
                <DisplayButton>
                    <h1>Max Rose</h1>
                </DisplayButton>
                <div className="flex w-fill items-center justify-between pt-4">
                    <SocialButton link={githubLink}>
                        <AiOutlineGithub/>
                    </SocialButton>
                    <SocialButton title="CV" link="cv" target="_self">
                        <AiFillIdcard />
                    </SocialButton>
                    <SocialButton link={linkedinLink}>
                        <AiFillLinkedin/>
                    </SocialButton>
                </div>
            </div>
    );
}

export default Landing;