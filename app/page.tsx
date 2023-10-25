import fetchGit from "@/lib/fetch";
import { myQuery } from "@/lib/queries";
import Projects from "@/components/Projects";
import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import getSocials from "@/lib/getSocials";
import Contact from "@/components/Contact";
import Form from "@/components/Form";
import { QueryType } from "@/typings";
import MyProjects from "@/components/MyProjects";

const Main = async () => {
  const data: QueryType = await fetchGit(myQuery);
  const socials = await getSocials();
  return (
    <main className="relative h-screen w-full select-none snap-y snap-mandatory overflow-x-hidden overflow-y-scroll !scroll-smooth   ">
      <Home background={data.avatarUrl} name={data.name} />
      {/* <AboutMe data={data.profileREADME} /> */}
      {/* <Experiences /> */}
      <MyProjects data={data.pinnedItems.nodes} />
      <Contact socials={socials}>
        <Form />
      </Contact>
    </main>
  );
};

export default Main;
