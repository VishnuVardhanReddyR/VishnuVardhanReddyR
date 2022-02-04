import React from 'react';
import styled from "styled-components";

const Screen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: #000000;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Balls = styled.div`
  display: flex;
  position: absolute;
  top: 45%;
  left: 50%;

  .ball {
    height: 100px;
    width: 100px;
  }
  }
`;

function Preloader() {
  return (
    <Screen>
      <Balls>
        <div className="bg-preloader ball" />
      </Balls>
    </Screen>
    );
}

export default Preloader;
