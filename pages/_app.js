import '../styles/globals.css';
import PreLoader from "../components/Preloader";
import { Fragment, useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {

  const[loading, setLoading] = useState(false); 

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  });

  return (
      <>
        {!loading ? (
            <Fragment>
              <Component {...pageProps} />
            </Fragment>
          ):(
            <PreLoader />
          )
        }
      </>
    );
}

export default MyApp
