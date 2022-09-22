import ContentType from "../types/ContentType"
import fetchContent from "./fetchContent"


const fetchContents = async (urls: string[]): Promise<ContentType[]> => {
  const result: ContentType[] = []
  for await (const url of urls) {
    fetchContent(url)
      .then((c: ContentType) => {
        result.push({
          url: c.url,
          title: c.title,
          description: c.description,
          image: c.image
        })
      })
  }

  return result
}

export default fetchContents
