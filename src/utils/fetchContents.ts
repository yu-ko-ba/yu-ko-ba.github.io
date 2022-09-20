import fetchContent from "./fetchContent"

export type ContentType = {
  title: string
  description: string
  image: string
}

export const fetchContents = async (urls: string[]): Promise<ContentType[]> => {
  const result: ContentType[] = []
  for (const url of urls) {
    result.push(await fetchContent(url))
  }

  return result
}
