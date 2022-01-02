import About from "@components/About";
import Landing from "@components/Landing";
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from "react";

const Home: NextPage = () => {
    const about = useRef(null);

    const scrollDown = () => (about.current! as { scrollIntoView: (_: { block: string, behavior: string }) => void }).scrollIntoView({ block: "start", behavior: "smooth" });

    return (
            <>
                <Head>
                    <meta charSet="utf-8"/>
                    <title>Max Rose</title>
                    <meta name="description" content="Max Rose's Portfolio website!"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <section className="w-full h-screen flex flex-col justify-center items-center select-none">
                    <Landing />
                </section>
                <span onClick={scrollDown} ref={about} id="scrollDown"/>
                <section className="w-full flex flex-col justify-center items-center select-none">
                        <About />
                </section>
            </>
    )
}

export default Home
