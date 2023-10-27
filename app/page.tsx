import fetchGit from "@/lib/fetch";
import { myQuery } from "@/lib/queries";
import Home from "@/components/Home";
import getSocials from "@/lib/getSocials";
import { QueryType } from "@/typings";
import MyProjects from "@/components/MyProjects";
import MyContact from "@/components/MyContact";

const Main = async () => {
  const data: QueryType = await fetchGit(myQuery);
  const socials = await getSocials();
  return (
    <main className="relative flex h-screen w-full select-none snap-y snap-mandatory flex-col gap-1 overflow-x-hidden overflow-y-scroll !scroll-smooth px-5   ">
      <Home background={data.avatarUrl} name={data.name} />
      <MyProjects data={data.pinnedItems.nodes} />
      <MyContact socials={socials} />
    </main>
  );
};

export default Main;
