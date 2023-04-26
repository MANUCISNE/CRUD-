import { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
import More from '../../images/more.svg'
import { useParams } from 'react-router-dom'
import axios from 'axios'
interface Read {
    id: number;
    title: string;
    content: string;
}
export function ReadMore(){

    const [readMore, setReadMore] = useState<Read>()

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
        .then((response) => {
            setReadMore(response.data)
        })

    }, [id])

    return(
        <div>
            <Header />
            <main>
            <div className="cards">
                <div className="card">
                    <header>
                        <h2>{readMore?.title}</h2>
                        <img src={More} />
                    </header>

                    <div className="line"></div>

                    <p>{readMore?.content}</p>
                </div>
            </div>
            </main>
    </div>
    )
}