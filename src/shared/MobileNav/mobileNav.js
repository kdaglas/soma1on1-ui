import styled from 'styled-components'

const MobileNav = styled.div`
    .overlay__links {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .overlay__links a {
        padding: 15px;
        font-family: Montserrat-Bold;
        font-size: 27px;
        display: block;
        transition: all 0.3s ease 0s;
        color: #fff;
        text-decoration: none;
    }

    .overlay__links a:hover,
    .overlay__links a:focus,
    button:hover {
        color: #000; 
    }
    
    button {
        position: absolute;
        transition: all 0.3s ease 0s;
        background: transparent;
        border: none;
        outline: none;
        top: 15px;
        right: 40px;
        font-size: 50px;
        color: #fff;
        cursor: pointer;
    }

    .overlay__links a img {
        width: 220px;
        margin: 30px;
        text-align: center;
    }

    @media screen and (max-width: 420px) {
        .overlay__links a img {
            width: 130px;
            margin: 20px;
            text-align: center;
        }

        .overlay__links a {
            font-size: 20px;
        }
    }
`

export default MobileNav;
