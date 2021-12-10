import 'styles/index.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useStore } from 'store/store';
import { useEffect } from 'react';
import { initialBoardData } from 'initialData';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'utils/createEmotionCache';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from 'styles/theme';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  const store = useStore(pageProps.initialState);

  useEffect(() => {
    //@ts-ignore
    window['__react-beautiful-dnd-disable-dev-warnings'] = true;

    if (!localStorage.boardData) {
      localStorage.boardData = JSON.stringify(initialBoardData);
    }
  }, []);

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default MyApp;
