import DisplayButton from "@components/DisplayButton";
import SocialButton from "@components/SocialButton";
import type { NextPage } from 'next'
import Head from 'next/head'
import { AiFillIdcard, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Home: NextPage = () => {
    return (
            <>
                <Head>
                    <meta charSet="utf-8"/>
                    <title>Max Rose</title>
                    <meta name="description" content="Max Rose's Portfolio website!"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <section className="w-full h-screen flex flex-col justify-center items-center select-none">
                    <div className="max-w-xs ">
                        <DisplayButton text="Max Rose"/>
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
                </section>
            </>
    )
}

export default Home
