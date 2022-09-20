import ContentType from "../types/ContentType"
import fetchContent from "./fetchContent"


const fetchContents = async (urls: string[]): Promise<ContentType[]> => {
  const result: ContentType[] = []
  for (const url of urls) {
    result.push(await fetchContent(url))
  }

  return result
}

export default fetchContents
