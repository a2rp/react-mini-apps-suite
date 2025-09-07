import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
`;

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 15px;
`;

const NavLinkWrapper = styled.div`
    /* border: 1px solid #333; */
    box-shadow: 0 0 1px 1px #333 inset;
    border-radius: 6px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Heading = styled.h1`
    font-size: 14px;
    a {
        color: #aaa;
        text-decoration: none;
        padding: 2px;
        &:hover {
            border-bottom: 1px solid #aaa;
        }
    }
`;

const Main = styled.div`
    height: 100vh;
    padding-top: 70px;
    display: flex;
    align-items: stretch;
    overflow: hidden;
`;

const NavWrapper = styled.div`
    /* border: 1px solid #333; */
    box-shadow: 0 0 1px 1px #333 inset;
    width: 0;
    flex: 0 0 0;
    transition: 0.2s ease;
    transition-property: width, flex;
    overflow: hidden;
    z-index: 9999;
    background-color: #000;

    &.active {
        flex: 0 0 250px;
        width: 250px;
    }

    @media (width<1000px) {
        position: fixed;
        top: 70px;
        left: 0;
        height: calc(100vh - 70px);
    }

    .navInner {
        width: 250px;
        height: 100%;
        overflow-y: auto;

        a {
            display: flex;
            align-items: center;
            color: #666;
            text-decoration: none;
            height: 40px;
            padding: 0 15px;
            white-space: nowrap;
            &:hover {
                color: #fff;
            }
            &.active {
                color: #fff;
            }
        }
    }
`;

const Tuts = styled.div``;

const ContentWrapper = styled.div`
    /* border: 1px solid #f00; */
    box-shadow: 0 0 1px 1px #333 inset;
    /* flex: 1 1 100%; */
    width: 100%;
    /* height: calc(100vh - 100px); */
    overflow: auto;
    padding: 15px;
    scroll-behavior: smooth !important;
`;

const RoutesWrapper = styled.div`
    min-height: 100vh;
    /* height: calc(100vh - 100px); */
`;

const Footer = styled.div`
    padding: 15px;
`;

export const Styled = {
    Wrapper,
    Header,
    NavLinkWrapper,
    Heading,
    Main,
    ContentWrapper,
    RoutesWrapper,
    NavWrapper,
    Tuts,
    Footer,
};
