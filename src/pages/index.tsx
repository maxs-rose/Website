import About from "@components/About";
import Landing from "@components/Landing";
import { KeyboardContext } from "@pages/_app";
import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useEffect, useRef } from "react";

const Home: NextPage = () => {
    const context = useContext(KeyboardContext);
    const about = useRef<HTMLElement>(null);
    const landing = useRef<HTMLElement>(null);

    const scrollDown = () => about.current?.scrollIntoView({ block: "start", behavior: "smooth" });
    const scrollUp = () => landing.current?.scrollIntoView({ block: "start", behavior: "smooth" });

    useEffect(() => {
        context.add("about", scrollDown);
        context.add("home", scrollUp);

        return () => {
            context.remove("about");
            context.remove("home")
        }
    }, [context])

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
                <span onClick={scrollDown} ref={about} id="scrollDown"/>
                <section className="w-full flex flex-col justify-center items-center select-none">
                    <About/>
                </section>
                <div style={{ "padding": "2rem" }}/>
            </>
    )
}

export default Home