import About from "@components/About";
import Landing from "@components/Landing";
import Projects from "@components/Projects";
import useKeybindings from "@hooks/useKeybindings";
import type { NextPage } from 'next'
import Head from 'next/head'
import { RefObject, useRef } from "react";

const Home: NextPage = () => {
    const about = useRef<HTMLElement>(null);
    const landing = useRef<HTMLElement>(null);
    const projects = useRef<HTMLElement>(null);

    const scrollTo = (ref: RefObject<HTMLElement>) => () => ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });

    useKeybindings("about", scrollTo(about));
    useKeybindings("home", scrollTo(landing));
    useKeybindings("prod", scrollTo(projects));

    return (
            <>
                <Head>
                    <meta charSet="utf-8"/>
                    <title>Max Rose</title>
                    <meta name="description" content="Max Rose's Portfolio website!"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <section className="w-full h-screen flex flex-col justify-center items-center select-none" ref={landing}>
                    <Landing/>
                </section>
                <span onClick={scrollTo(about)} ref={about} id="scrollDown"/>
                <section className="w-full flex flex-col justify-center items-center select-none">
                    <About/>
                    <span ref={projects} />
                    <Projects/>
                </section>
                <div style={{ "padding": "2rem" }}/>
            </>
    )
}

export default Home;