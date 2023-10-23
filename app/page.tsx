import fetchGit from "@/lib/fetch";
import { myQuery } from "@/lib/queries";
import Projects from "@/components/Projects";
import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";

const Main = async () => {
  const data: QueryType = await fetchGit(myQuery);

  return (
    <main className="relative h-screen w-full select-none snap-y snap-mandatory overflow-x-hidden overflow-y-scroll !scroll-smooth   ">
      <Home background={data.avatarUrl} name={data.name} />
      {/* <AboutMe data={data.profileREADME} /> */}
      {/* <Experiences /> */}
      <Projects data={data.pinnedItems.nodes} />
      <ContactMe
        whatsapp={data.whatsAppUrl}
        github={data.githubUrl}
        socials={data.socialAccounts}
      />
    </main>
  );
};

export default Main;
