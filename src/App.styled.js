import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const stableScrollbar = css`
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    &::-webkit-scrollbar { width: 12px; height: 12px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb { background: transparent; border: 3px solid transparent; border-radius: 8px; background-clip: content-box; }
    @media (hover: hover) {
        &:hover { scrollbar-color: #58677d transparent; }
        &:hover::-webkit-scrollbar-thumb { background: #58677d; }
        &::-webkit-scrollbar-thumb:hover { background: #7e8ea5; }
    }
    @media (hover: none) {
        scrollbar-color: #58677d transparent;
        &::-webkit-scrollbar-thumb { background: #58677d; }
    }
`;

const Wrapper = styled.div`position: relative; min-height: 100vh;`;

const Header = styled.header`
    position: fixed;
    inset: 0 0 auto;
    z-index: 10000;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px clamp(15px, 3vw, 30px);
    border-bottom: 1px solid #263449;
    background: rgba(1, 4, 9, .97);
`;

const Brand = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #f4f7fb;
    text-decoration: none;
    transition: color .2s ease, text-shadow .2s ease;
    &:hover { color: #9bd8ff; text-shadow: 0 0 14px rgba(155, 216, 255, .22); }
    img { width: 38px; height: 38px; border: 1px solid #263449; border-radius: 10px; background: #0c1420; }
    span { display: grid; font-size: 14px; font-weight: 700; line-height: 1.1; }
    small { margin-bottom: 3px; color: #7f91a8; font-size: 9px; letter-spacing: .18em; }
`;

const MenuButton = styled.button`
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    color: #dce8f7;
    border: 1px solid #263449;
    border-radius: 8px;
    background: transparent;
    cursor: pointer;
    transition: color .2s ease, border-color .2s ease, box-shadow .2s ease;
    &:hover { color: #9bd8ff; border-color: #9bd8ff; box-shadow: 0 0 0 3px rgba(155, 216, 255, .12); }
`;

const Main = styled.main`
    height: 100vh;
    display: flex;
    align-items: stretch;
    overflow: hidden;
    padding-top: 70px;
`;

const NavWrapper = styled.aside`
    width: 0;
    flex: 0 0 0;
    z-index: 9999;
    overflow: hidden;
    border-right: 1px solid #263449;
    background: #010409;
    transition: width .2s ease, flex-basis .2s ease;
    &.active { width: 250px; flex-basis: 250px; }
    .navInner { width: 250px; height: 100%; overflow-y: auto; ${stableScrollbar}; padding: 15px 10px; }
    a { display: flex; align-items: center; min-height: 40px; padding: 0 10px; color: #8998aa; border: 1px solid transparent; border-radius: 7px; text-decoration: none; white-space: nowrap; transition: color .2s ease, border-color .2s ease, box-shadow .2s ease; }
    a:hover, a.active { color: #f4f7fb; border-color: #344962; box-shadow: 0 0 0 3px rgba(155, 216, 255, .08); }
    @media (max-width: 999px) { position: fixed; top: 70px; left: 0; height: calc(100vh - 70px); }
`;

const ContentWrapper = styled.section`
    width: 100%;
    overflow: auto;
    padding: 15px clamp(15px, 3vw, 30px);
    scroll-behavior: smooth;
    ${stableScrollbar};
`;

const RoutesWrapper = styled.div`min-height: calc(100vh - 100px);`;
const Footer = styled.div`padding: 15px 0 0;`;
const Loading = styled.div`min-height: 40vh; display: grid; place-items: center; color: #9bd8ff;`;

export const Styled = { Wrapper, Header, Brand, MenuButton, Main, NavWrapper, ContentWrapper, RoutesWrapper, Footer, Loading };