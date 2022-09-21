import { Card, CardMedia } from "@mui/material"
import { useEffect, useState } from "react"
import fetchContent from "../utils/fetchContent"

type PreviewPropsType = {
  src: string
}

const Preview = ({ src }: PreviewPropsType) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  useEffect(() => {
    fetchContent(src)
      .then((c) => {
        setTitle(c.title)
        setDescription(c.description)
        setImageUrl(c.image)
      })
  }, [])
  return (
    <a href={src}>
      <Card>
        <CardMedia
          component="img"
          image={imageUrl}
        />
      </Card>
    </a>
  )
}

export default Preview
