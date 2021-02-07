import React from 'react';
import styled from 'styled-components';
import skyview from '../../assets/images/skyview.jpg'


const Bread = styled.div`

    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.7)), url(${skyview});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 320px;
    

    h1 {
        font-size: 60px;
        margin-top: 100px;
        font-family: Ridin Dirty;
        color: #fff;
    }

    @media (min-width: 320px) and (max-width: 767px) {
        
        h1 {
          font-size: 45px;
        }
    }
`


const Band = ({ title }: any) => {
    
    return (
        <Bread>
            <h1>{title}</h1>
        </Bread>
    )
}

export default Band;
