import { Link } from 'react-router-dom'

import './headerMain.css'

export function HeaderMain() {
    return (

        <header>
            <div className="container">
                <div className="logo" >
                    <h1>CRUD</h1>
            </div>
            
            <div>
                <input placeholder="Procure um título"></input>
                </div>

            <div>
                <input placeholder="Procure uma descrição"></input>
            </div>

            <div>
                <input placeholder="Procure um conteúdo"></input>
            </div>

            <div className="btn-filter" >

                <Link to="/" >
                    <button>Filtrar</button>
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
