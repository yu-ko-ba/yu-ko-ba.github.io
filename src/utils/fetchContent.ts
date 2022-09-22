import axios from "axios";
import ContentType from "../types/ContentType";
import { parse } from "node-html-parser";

const fetchContent = async (url: string): Promise<ContentType> => {
  const res = await axios.get(url)
  const dom = parse(res.data)
  const metas = dom.querySelectorAll("meta")

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
    url: url,
    title: title,
    description: description,
    image: imageUrl
  }
}

export default fetchContent
