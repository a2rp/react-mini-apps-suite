import React from 'react'
import { Styled } from './styled'

const Home = () => {
    return (
        <>
            <Styled.Wrapper>
                <fieldset >
                    <legend><h3>ReactJS Mini Apps - last updated: Sep 07, 2025</h3></legend>
                    <p>
                        **React Mini Apps Suite** is a router-based collection of small, focused React apps you can use as building blocks or learning references.
                    </p>
                    <p>
                        Every app is frontend-only (no backend), built with **Vite**, **React Router**, and **styled-components**, and deployed to **GitHub Pages**.
                    </p>
                </fieldset>

            </Styled.Wrapper>
        </>
    )
}

export default Home

