import styled from "styled-components";

const Wrapper = styled.footer`
    margin-top: 35px;
    padding: 28px clamp(18px, 4vw, 50px) 18px;
    color: #9aa8ba;
    border: 1px solid #263449;
    border-radius: 14px;
    background: #010409;
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding-bottom: 22px;
    @media (max-width: 760px) { flex-direction: column; }
`;
const Heading = styled.h2`margin-bottom: 7px; color: #f4f7fb; font-size: 1.35rem;`;
const Text = styled.p`max-width: 360px; color: #7f91a8; line-height: 1.6;`;
const Groups = styled.div`display: flex; flex-wrap: wrap; gap: 25px;`;
const Label = styled.span`display: block; margin-bottom: 8px; color: #cbd7e6; font-size: .72rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;`;
const IconLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    a { width: 32px; height: 32px; display: grid; place-items: center; color: #9aa8ba; border: 1px solid #344962; border-radius: 8px; transition: color .2s ease, border-color .2s ease, box-shadow .2s ease; }
    a:hover { color: #9bd8ff; border-color: #9bd8ff; box-shadow: 0 0 0 3px rgba(155, 216, 255, .12); }
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding-top: 16px;
    color: #7f91a8;
    border-top: 1px solid #263449;
    font-size: .78rem;
    a { color: #f4f7fb; font-weight: 700; text-decoration: none; }
    a:hover { color: #9bd8ff; }
    @media (max-width: 560px) { flex-direction: column; }
`;

export const Styled = { Wrapper, Top, Heading, Text, Groups, Label, IconLinks, Bottom };