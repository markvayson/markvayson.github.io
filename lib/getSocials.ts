import { SocialType } from "@/typings";
import fetchGit from "./fetch";
import { mySocials } from "./queries";

export default async function getSocials() {
  const data: SocialType = await fetchGit(mySocials);

  const accounts: { [key: string]: string } = {
    github: data.githubUrl,
    whatsapp: `https://wa.me/${data.whatsAppUrl}`,
  };
  data.socialAccounts.nodes.forEach((social) => {
    if (social.provider === "GENERIC") {
      const key = social.url.split("//")[1].split(".");
      social.provider = key.length > 1 ? key[1] : social.url;
    }
    accounts[social.provider.toLowerCase()] = social.url;
  });

  return accounts;
}
