import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

type AppData = {
  appData: {
    name: string;
    url: string;
    screenshotUrl: string;
  }
}

export default function AppCard({ appData }: AppData) {
  return (
    <ImageListItem>
      <a href={appData.url}>
        <img
          src={appData.screenshotUrl}
          style={{
            width: "40vw",
            height: "30vw",
            objectFit: "contain",
          }}
        />
        <ImageListItemBar
          title={appData.name}
          position='below'
        />
      </a>
    </ImageListItem>
  );
}
