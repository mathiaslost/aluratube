import React from "react";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";

export default function VideosPage() {
    const contexto = React.useContext(ColorModeContext);
    return (
        <>
            <div>
                <h2>Bem vindo à página de vídeos.</h2>
                <iframe width="840" height="630" src="https://www.youtube.com/embed/QK8mJJJvaes">
                </iframe>
            </div>        
        </>
    )
}