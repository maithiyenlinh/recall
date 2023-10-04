import '@/styles/globals.css';
import type { AppProps } from 'next/app'
import {Amplify} from "@aws-amplify/core";
import amplifyExport from '../aws-exports';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "@/utils/theme";
import createEmotionCache from "@/utils/createEmotionCache";
import {EmotionCache} from "@emotion/cache";
import {CacheProvider} from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
Amplify.configure({ ...amplifyExport, ssr: false })
const queryClient = new QueryClient();
const clientSideEmotionCache = createEmotionCache();
export interface MyAppProps extends AppProps { emotionCache?: EmotionCache }
export default function App(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
      <CacheProvider value={emotionCache}>
          <QueryClientProvider client={queryClient}>
              <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Component {...pageProps} />
              </ThemeProvider>
          </QueryClientProvider>
      </CacheProvider>
  )
}