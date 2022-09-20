import axios from "axios";
import { ContentType } from "./fetchContents";

const fetchContent = async (url: string): Promise<ContentType> => {
  const res = await axios.get(url)
  const parser = new DOMParser()
  const dom = parser.parseFromString(res.data, "text/html")
  const metas = dom.head.querySelectorAll("meta")

  let title = ""
  let description = ""
  let imageUrl = ""

  for (const meta of Array.from(metas)) {
    const property = meta.getAttribute("property")
    const content = meta.getAttribute("content")
    if (property === "og:title") {
      title = content
    }
    if (property === "og:description") {
      description = content
    }
    if (property === "og:image") {
      imageUrl = content
    }
  }

  return {
    title: title,
    description: description,
    image: imageUrl
  }
}

export default fetchContent
