import { Link } from 'react-router-dom'
import axios from 'axios'
import './headerMain.css'
import { useState } from 'react';

interface QueryParam {
    title?: string
    description?: string
    content?: string
}

export function HeaderMain({ setPosts }: any) {
    const [inputTitle, setInputTitle] = useState<string>('')
    const [inputDescription, setInputDescription] = useState<string>('')
    const [inputContent, setInputContent] = useState<string>('')

    function FilterPost() {
        if(!inputTitle && !inputDescription && !inputContent){
            return alert('Selecione algum filtro')
        }

        const queryParam: QueryParam = {}

        if(inputTitle){
            queryParam.title = inputTitle
        }

        if(inputDescription){
            queryParam.description = inputTitle
        }

        if(inputContent){
            queryParam.content = inputTitle
        }

        axios.get(`http://localhost:3000/posts`, {
            params: queryParam
        })
        .then(res => {
            if(res.data.length > 0){
                setPosts(res.data)
            } else {
                alert('Nenhum post correspondente')
            }
        })
        .catch(err => console.log(err))
    }

    return (

        <header>
            <div className="container">
                <div className="logo" >
                    <h1>CRUD</h1>
                </div>

                <div>
                    <input placeholder="Procure um título" onChange={(event) => {
                        setInputTitle(event.target.value)
                    }} />
                </div>

                <div>
                    <input placeholder="Procure uma descrição" onChange={(event) => {
                        setInputDescription(event.target.value)
                    }}/>
                </div>

                <div>
                    <input placeholder="Procure um conteúdo" onChange={(event) => {
                        setInputContent(event.target.value)
                    }}/>
                </div>

                <div className="btn-filter" >

                    <Link to="/" >
                        <button onClick={FilterPost}>Filtrar</button>
                    </Link>

                </div>

                <div className="btn-newPost" >

                    <Link to="/post" >
                        <button>Add new Card</button>
                    </Link>

                </div>

            </div>
        </header>

    )
}
