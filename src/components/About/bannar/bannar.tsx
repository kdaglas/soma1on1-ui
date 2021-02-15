import React from 'react';
import styled from 'styled-components';
import Band from '../../../shared/band/band';
import video from '../../../assets/images/splash/faded-splash.svg';

const Brand = styled.div`

    .the-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 0;
        text-align: center;
    }

    .the-content hr {
        width: 100px;
        border: 1px solid #E23744;
        margin: 35px 0;
    }

    .the-content .the-inside {
        display: flex;
        width: 75%;
        justify-content: space-between;
        align-items: center;
    }

    .the-video,
    .the-text {
        width: 48%;
    }

    .the-text {
        padding: 37px;
    }

    @media (min-width: 320px) and (max-width: 914px) {
        .the-head {
          margin-top: 100px;
        }

        .the-head h1 {
          font-size: 45px;
        }

        .the-content .the-inside {
            width: 100%;
            flex-direction: column;
            margin-top: 0;
        }

        .the-video,
        .the-text {
            width: 90%;
            margin: 0 auto;
        }
    }
`;

const Bannar = () => (
  <Brand>
    <Band title="About" />
    <div className="the-content">
      <h2>About the Lodge</h2>
      <hr />
      <div className="the-inside">
        <p className="the-text">
          Being strongly attached to Uganda and Murchison Falls National Park in particular, for more than 20 years,
          Nile Safari Lodge is a family project that aspires to offer the most environmental friendly eco-lodge in Uganda while providing our guests with outstanding hospitality and adventures.
          <br />
          <br />
          Nile Safari Lodge is a luxurious lodge that provides an unforgettable wildlife experience within the scenic beauty of the Murchison Falls National Park.
        </p>

        <video
          src={video}
          className="the-video"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  </Brand>
);

export default Bannar;
