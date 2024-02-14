import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "src/components/ContainerBlock";
// import Projects from "@/components/Projects";
// import LatestCode from "@/components/LatestCode";
import Hero from "src/components/Hero";
import userData from "src/constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock title="Jenna Martin - Software Developer">
      <Hero />
      {/* <Projects /> */}
      {/* <LatestCode repositories={repositories} /> */}
    </ContainerBlock>
  );
}

// export const getServerSideProps = async () => {
//   console.log(process.env.GITHUB_AUTH_TOKEN);
//   let token = process.env.GITHUB_AUTH_TOKEN;

//   const repositories = await getLatestRepos(userData, token);

//   return {
//     props: {
//       repositories,
//     },
//   };
// };
