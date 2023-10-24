import fetchGit from "@/lib/fetch";
import { myQuery } from "@/lib/queries";
import Projects from "@/components/Projects";
import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import getSocials from "@/lib/getSocials";
import Contact from "@/components/Contact";
import Form from "@/components/Form";
import SectionTitle from "@/components/SectionTitle";

const Main = async () => {
  const data: QueryType = await fetchGit(myQuery);
  const socials = await getSocials();
  return (
    <main className="relative h-screen w-full select-none snap-y snap-mandatory overflow-x-hidden overflow-y-scroll !scroll-smooth   ">
      {/* <Home background={data.avatarUrl} name={data.name} /> */}
      {/* <AboutMe data={data.profileREADME} /> */}
      {/* <Experiences /> */}
      {/* <Projects data={data.pinnedItems.nodes} />
      <ContactMe
        whatsapp={data.whatsAppUrl}
        github={data.githubUrl}
        socials={data.socialAccounts}
      /> */}
      <Contact socials={socials}>
        <Form />
      </Contact>
    </main>
  );
};

export default Main;
