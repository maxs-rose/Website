import DisplayButton from "@components/DisplayButton";
import SocialButton, {socialStyles} from "@components/SocialButton";
import {githubLink, linkedinLink} from "@constants/*";
import useKeybindings from "@hooks/useKeybindings";
import {useRouter} from "next/router";
import {AiFillIdcard, AiFillLinkedin, AiOutlineGithub} from "react-icons/ai";
import React from "react";
import Link from "next/link";

const CvButton: React.FC = () => {
    return (
            <Link href="/cv" prefetch={true} legacyBehavior={true}>
                <a title="CV" className={socialStyles.social} >
                    <AiFillIdcard />
                </a>
            </Link>
    );
}

const Landing = () => {
    const router = useRouter();
    useKeybindings("cv", () => {
        router.push("cv").then();
    });

    return (
            <div className="max-w-xs ">
                <DisplayButton>
                    <h1>Max Rose</h1>
                </DisplayButton>
                <div className="flex w-fill items-center justify-between pt-4">
                    <SocialButton link={githubLink}>
                        <AiOutlineGithub/>
                    </SocialButton>
                    <CvButton />
                    <SocialButton link={linkedinLink}>
                        <AiFillLinkedin/>
                    </SocialButton>
                </div>
            </div>
    );
}

export default Landing;