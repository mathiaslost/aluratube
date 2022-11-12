import { createClient } from "@supabase/supabase-js";
import React from "react";
import { videoService } from "../../services/videoService";
import { StyledRegisterVideo } from "./styles";

// get youtube thumbnail from video url
function getThumbnail(url) {
    return `http://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

// Whiteboarding
// Custom hook
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);
    return {
        values,
        handleChange: (e) => {
            const value = e.target.value;
            const name = e.target.name;
            setValues({
                 ...values,
                 [name]: value
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

const PROJECT_URL = "https://xqcafhinwyplyttnrpbj.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxY2FmaGlud3lwbHl0dG5ycGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMjEwMzYsImV4cCI6MTk4Mzc5NzAzNn0.wHcrXplJw5fEPmtOIj0wob9ZREYQu7Bjc-OHmucWOZQ";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export default function RegisterVideo() {
    const formCadastro = useForm({
        // initialValues: { titulo: "Teste", url: "https://youtube.com/..."}
        initialValues: { titulo: "", url: "", playlist: ""}
    });
    const [formVisivel, setFormVisivel] = React.useState(false);
    const service = videoService();

    // console.log(supabase.from("video").insert());

    /* O que precisamos para o form funcionar?
        - título
        - url do vídeo
        - Precisamos ter um onSubmit do form
        - limpar o formulário após o submit
    */
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {/* Ternário */}
            {/* Operadores de Curto-circuito */}
            {formVisivel
                ? (
                    <form onSubmit={(e) => {
                        // Evita o funcionamento padrão de uma tag
                        // Exemplo: elemento <a> não será redirecinado
                        e.preventDefault();

                        // Realizava a inserção de todos os videos do json
                        // --> service.insertFromJson(config.playlists);

                        // Contrato entre o nosso Front e o backend
                        supabase.from("video").insert({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: getThumbnail(formCadastro.values.url),
                            playlist: formCadastro.values.playlist
                        })
                        .then((oqueveio) => {
                            // console.log(oqueveio);
                        })
                        .catch((err) => {
                            // console.log(err);
                        })

                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input 
                                placeholder="Título do Vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}></input>
                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}></input>
                            <input
                                placeholder="Nome da Playlist"
                                name="playlist"
                                value={formCadastro.values.playlist}
                                onChange={formCadastro.handleChange}></input>
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : null}
        </StyledRegisterVideo>
    )
}

// [X] Falta o botão para adicionar
// [X] Modal
// -> [X] Precisamos controlar o state
// -> [X] Formulário em si