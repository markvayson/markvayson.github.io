import cheerio from "cheerio";

export default function cheerioText(data: string) {
  const $ = cheerio.load(data);
  const extractedText: { [key: string]: string } = {};

  $("h1 + p").each((index, element) => {
    const key = $(element).prev("h1").text().trim();
    const value = $(element).text().trim();
    extractedText[key] = value;
  });
  return extractedText;
}
