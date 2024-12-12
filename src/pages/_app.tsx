import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/src/store/store';
import { SidebarProvider } from '@/src/context/sidebar-provider';

function App({ Component, pageProps }: AppProps<{}>) {
  return (
    <>
      <Head>
        <title>Base</title>
        <meta name="description" content="" />
        <meta name="viewport" content="height=device-height ,width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <main>
            <Toaster
              position="top-right"
              containerStyle={{
                top: 6,
                right: 20,
              }}
            />
            <SidebarProvider>
              <Component {...pageProps} />
            </SidebarProvider>
          </main>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
