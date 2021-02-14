import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/logos/normal-logo.svg';

const Container = styled.div`
    {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    img {
        width: 250px;
        margin: 0 0 20px;
    }

    h1 {
        font-size: 250px;
        margin: 0;
    }

    p {
        color: #A2A3B3;
        font-size: 20px;
        width: 550px;
        margin: 0;
    }

    .btn-not-found {
        margin-top: 30px;
        font-size: 15px;
    }

    @media screen and (max-width: 480px) {
        img {
            width: 120px;
        }
    
        h1 {
            font-size: 120px;
        }
    
        p {
            font-size: 15px;
            width: 250px;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        h1 {
            font-size: 220px;
        }
    
        p {
            font-size: 20px;
            width: 370px;
        }
    }
`;

const Notfoundpage = () => {
  const history = useHistory();
  return (
    <Container className="notfoundbg">
      <img src={logo} alt="not-found" />
      <h1>404</h1>
      <p>This page might be under contruction or is not available but please keep calm and thanks for trying to access it</p>
      <button onClick={() => history.goBack()} className="btn btn-bg btn-not-found">Go back</button>
    </Container>
  );
};

export default Notfoundpage;
