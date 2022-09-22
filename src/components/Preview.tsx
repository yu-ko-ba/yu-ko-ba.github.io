import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import Link from "next/link"
import { useEffect, useState } from "react"
import fetchContent from "../utils/fetchContent"

type PreviewPropsType = {
  src: string
}

const Preview = ({ src }: PreviewPropsType) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  // 必要なデータを取得する
  useEffect(() => {
    fetchContent(src)
      .then((c) => {
        setTitle(c.title)
        setDescription(c.description)
        setImageUrl(c.image)
      })
  }, [])

  return (
    <Link href={src}>
      <a target="_blank" rel="noopener noreferrer">
        <Card>
          <CardMedia
            component="img"
            alt={description}
            image={imageUrl}
          />
          <CardContent>
            <Typography variant="subtitle2">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </a>
    </Link>
  )
}

export default Preview
