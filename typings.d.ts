type ReadMe = {
  object: ReadMeText;
};

type ReadMeText = {
  text: string;
};

type SocialAccounts = {
  nodes: SocialAccount[];
};

type PinnedItems = {
  totalCount: number;
  nodes: PinnedItem[];
};

type PinnedItem = {
  name: string;
  url: string;
  description: string;
  homepageUrl: string;
  openGraphImageUrl: string;
  repositoryTopics: RepositoryTopics;
};

type TopicsType = {
  name: string;
};

type SocialAccount = {
  provider: string;
  url: string;
};

type Node = {
  id: string;
  name: string;
  description: string;
  url: string;
};

type ExperienceType = {
  year: string;
  name: string;
  school?: string;
  company?: string;
  where: string;
  type: string;
};

type TransitionType = {
  duration: number;
};

type SocialAccounts = {
  nodes: SocialAccount[];
};

type SocialAccount = {
  provider: string;
  url: string;
};

type QueryType = {
  name: string;
  avatarUrl: string;
  githubUrl: string;
  whatsAppUrl: string;
  profileREADME: READMEType;
  pinnedItems: PinnedItems;
  socialAccounts: SocialAccounts;
};

type READMEType = {
  object: READMETEXT;
};

type READMETEXT = {
  text: string;
};

type NavigationType = {
  name: string;
  link: string;
};

type SubNavType = {
  name: string;
  sublink: string;
};

type Path = ["home", "about", "projects", "experiences"];
