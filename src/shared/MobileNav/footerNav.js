import styled from 'styled-components'

const FooterNav = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    a {
        padding: 8px 0 0;
        font-family: Montserrat-Medium;
        font-size: 17px;
        display: block;
        transition: all 0.3s ease 0s;
        color: #fff;
        text-decoration: none;
    }

    a:hover,
    a:focus,
    button:hover {
        color: #000; 
    }

    img {
        width: 150px;
        margin-top: 15px;
        text-align: center;
    }

    @media screen and (max-width: 420px) {
        img {
            width: 130px;
        }

        a {
            font-size: 16px;
            font-weight: 500;
        }
    }
`

export default FooterNav;
