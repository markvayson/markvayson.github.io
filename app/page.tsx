import fetchGit from "@/lib/fetch";
import { myQuery } from "@/lib/queries";
import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import getSocials from "@/lib/getSocials";
import Contact from "@/components/Contact";
import Form from "@/components/Form";
import { QueryType } from "@/typings";
import MyProjects from "@/components/MyProjects";
import MyContact from "@/components/MyContact";
import SectionTitle from "@/components/SectionTitle";

const Main = async () => {
  const data: QueryType = await fetchGit(myQuery);
  const socials = await getSocials();
  return (
    <main className="relative flex h-screen w-full select-none snap-y snap-mandatory flex-col gap-1 overflow-x-hidden overflow-y-scroll !scroll-smooth px-5   ">
      <Home background={data.avatarUrl} name={data.name} />
      {/* <AboutMe data={data.profileREADME} /> */}
      {/* <Experiences /> */}
      <MyProjects data={data.pinnedItems.nodes} />
      <MyContact socials={socials} />
    </main>
  );
};

export default Main;
