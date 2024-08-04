import { Provider } from 'react-redux';
import store from './redux/store'; // Adjust the path if needed
import '../styles/globals.css';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: any) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
