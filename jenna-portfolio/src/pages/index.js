import Head from "next/head";
import ContainerBlock from "@/components/ContainerBlock";
// import Projects from "@/components/Projects";
// import LatestCode from "@/components/LatestCode";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <ContainerBlock
            title="Jenna Martin - Software Developer"
        >
            <Hero />
            {/* <Projects /> */}
            {/* <LatestCode /> */}
        </ContainerBlock>
    );
}