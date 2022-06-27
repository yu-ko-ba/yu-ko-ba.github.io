import React from 'react';
import ImageList from '@mui/material/ImageList';
import AppCard from './components/AppCard';
import { textAlign } from '@mui/system';
import { AppBar, Toolbar, Typography } from '@mui/material';

export type AppData = {
  name: string;
  url: string;
  screenshotUrl: string;
}

function App() {
  const apps: AppData[] = [
    {
      name: "今日の日付",
      url: "https://yu-ko-ba.github.io/what-is-the-date-today/",
      screenshotUrl: "https://raw.githubusercontent.com/yu-ko-ba/what-is-the-date-today/main/screenshot.png",
    },
    {
      name: "年齢の計算",
      url: "https://yu-ko-ba.github.io/how-old-am-i/",
      screenshotUrl: "https://raw.githubusercontent.com/yu-ko-ba/how-old-am-i/main/screenshot.png",
    },
    {
      name: "クリップボードへコピー",
      url: "https://yu-ko-ba.github.io/copy-to-clipboard/",
      screenshotUrl: "https://raw.githubusercontent.com/yu-ko-ba/copy-to-clipboard/main/screenshot.png",
    },
    {
      name: "乱数の生成",
      url: "https://yu-ko-ba.github.io/get-random-int/",
      screenshotUrl: "https://raw.githubusercontent.com/yu-ko-ba/get-random-int/main/screenshot.png",
    },
  ];
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h4'>{document.title}</Typography>
        </Toolbar>
      </AppBar>
      <ImageList sx={{textAlign: "center"}}>
        {apps.map((v: AppData) => <AppCard appData={v}></AppCard>)}
      </ImageList>
    </>
  );
}

export default App;
