import ContentType from "../types/ContentType"
import fetchContent from "./fetchContent"


const fetchContents = async (urls: string[]): Promise<ContentType[]> => {
  const result: ContentType[] = []
  for await (const url of urls) {
    await fetchContent(url)
      .then((c: ContentType) => {
        result.push({
          url: c.url,
          title: c.title,
          description: c.description,
          image: c.image
        })
      })
      .catch((err: Error) => {
        if (process.env.NODE_ENV !== "production") {
          console.log(err);
        }
      })
  }

  return result
}

export default fetchContents
