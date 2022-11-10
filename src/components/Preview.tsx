import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material"
import NextLink from "next/link"

type PreviewPropsType = {
  title: string
  description: string
  imageUrl: string
  website: string
}

const Preview = ({ title, description, imageUrl, website }: PreviewPropsType) => {
  return (
    <NextLink href={website} passHref>
      <Link target="_blank" rel="noopener noreferrer">
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
      </Link>
    </NextLink>
  )
}

export default Preview
