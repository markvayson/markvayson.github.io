export default async function fetchGit(query: string) {
  const { data } = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query,
    }),
  }).then((res) => {
    return res.json();
  });

  const viewer = data.viewer;

  return viewer;
}
