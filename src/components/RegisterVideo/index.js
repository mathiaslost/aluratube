import React from "react";
import { StyledRegisterVideo } from "./styles";

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

export default function RegisterVideo() {
    const formCadastro = useForm({
        // initialValues: { titulo: "Teste", url: "https://youtube.com/..."}
        initialValues: { titulo: "", url: ""}
    });
    const [formVisivel, setFormVisivel] = React.useState(false);    

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
                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input 
                                placeholder="Título do vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}></input>
                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
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