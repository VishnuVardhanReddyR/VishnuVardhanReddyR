import Head from 'next/head';
import LandingPage from "../components/LandingPage";
import Header from "../components/LandingPageComponents/Header";
import About from "../components/About";
import styled from "styled-components";

const Screen = styled.div`
.page{
  box-sizing: border-box;
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-size: 85px;
  box-shadow: 0 10px 15px #00000060;
}
.page a{
  text-decoration: underline;
  color: #efefffcc;
  mix-blend-mode: overlay;
/*   border: 5px solid #000000; */
}
.fs {
  z-index: 5;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.sc {
  background-color: yellow;
  z-index: 4;
  background-size: cover;
  background-position: 0% 70%;
  background-repeat: no-repeat;
}
.sc a{
  color: #00b386;
}
.th {
  background-color: green;
  z-index: 3;
  background-size: cover;
  background-position: 0% 70%;
  background-repeat: no-repeat;
}
.th a{
  color: #00ace6;
}
.fr {
  background-color: red;
  z-index: 2;
  background-size: cover;
  background-position: 0% 30%;
  background-repeat: no-repeat;
}
.fr a{
  color: #ff9999;
}
`;

export default function Home() {
  return (
    <div className="bg-black scrollbar-hide">
      <Head>
        <title>Vishnu Vardhan Reddy R</title>
        <link rel="icon" href="/VR-logo.png" />
      </Head>
      
      <Screen>
        <Header />        
        <div className="page fs">
          <LandingPage />
        </div>
        <div className="page sc min-h-screen">
          <About />
        </div>
      </Screen>
    </div>
  )
}
