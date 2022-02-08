import '../styles/globals.css';
import PreLoader from "../components/loaders/Preloader";
import { Fragment, useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  const[loading, setLoading] = useState(false); 

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });

  return (
      <>
        <RecoilRoot>
            {!loading ? (
              <Fragment>
                <Component {...pageProps} />
              </Fragment>
            ):(
                <PreLoader />
              )     
            }
        </RecoilRoot>            
      </>
    );
}

export default MyApp

