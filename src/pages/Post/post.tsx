import axios from 'axios'
import { Header } from '../../components/Header/Header'

import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import './post.css'

interface Form {
    title: string;
    description: string;
    content: string;
}

const validationPost = yup.object().shape({
    title: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
    description: yup.string().required("A descrição é obrigatório").max(150, "A descrição precisa ter menosde 150 caracteres"),
    content: yup.string().required("O conteúdo é obrigatório").max(500, "O conteúdo precisa ter menosde 500 caracteres")
})

export function Post(){
        const navigate = useNavigate()

        const { register, handleSubmit, formState: { errors } } = useForm<Form>({
            resolver: yupResolver(validationPost)
        })

    const addPost = (data: Form) => axios.post("http://localhost:3000/posts", data)
    .then(() =>{
        console.log("DEU TUDO CERTO")
        navigate('/');
    })
    .catch(() => {
        console.log("DEU TUDO ERRADO")
    })



    return(
        <div>
            <Header />

            <main>
                <div className="card-post">
                    <h1>Criar Postagem</h1>
                    
                    <div className="line-post"></div>

                    <div className="card-body-post">
                        <form onSubmit={handleSubmit(addPost)}>
                            <div className="fields">
                                <label>Título</label>
                                <input type="string" id="title" {...register("title")}/>
                                <p className="error-message">{errors.title?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Descrição</label>
                                <input type="string" id="description" {...register("description")}/>
                                <p className="error-message">{errors.description?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Conteúdo</label>
                                <textarea typeof="string" id="content" {...register("content")}/>
                                <p className="error-message">{errors.content?.message}</p>
                            </div>

                            <div className="btn-post">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}