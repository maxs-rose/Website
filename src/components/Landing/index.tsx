import DisplayButton from "@components/DisplayButton";
import SocialButton from "@components/SocialButton";
import { AiFillIdcard, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Landing = () => {
    return (
            <div className="max-w-xs ">
                <DisplayButton>
                    <h1>Max Rose</h1>
                </DisplayButton>
                <div className="flex w-fill items-center justify-between pt-4">
                    <SocialButton link="https://github.com/maxs-rose">
                        <AiOutlineGithub/>
                    </SocialButton>
                    <SocialButton title="CV" link="cv" target="_self">
                        <AiFillIdcard />
                    </SocialButton>
                    <SocialButton link="https://www.linkedin.com/in/maximilanrose/">
                        <AiFillLinkedin/>
                    </SocialButton>
                </div>
            </div>
    );
}

export default Landing;