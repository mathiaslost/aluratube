import React from "react";
import styled from "styled-components";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";

export const StyledVideo = styled.div`
    margin: 0 auto;
    text-align: center;
    padding: 1rem;

    video,
    iframe {
        // width: 100% !important;
        // height: auto !important;
        width: 560px;
        height: 315px;
    }
`

export default function VideosPage(props) {
    const contexto = React.useContext(ColorModeContext);
    return (
        <StyledVideo>
            <h2>Bem vindo à página de vídeos.</h2>
            <iframe src="https://www.youtube.com/embed/QK8mJJJvaes">
            </iframe>
        </StyledVideo>
    )
}