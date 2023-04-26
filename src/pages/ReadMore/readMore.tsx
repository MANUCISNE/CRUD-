import { Header } from '../../components/Header/Header'
import More from '../../images/more.svg'

export function ReadMore(){
    return(
        <div>
            <Header />
            <main>
            <div className="cards">
                <div className="card">
                    <header>
                        <h2>Curso de API</h2>
                        <img src={More} />
                    </header>

                    <div className="line"></div>

                    <p>
                        Nesse curso eu ensino vcs a consumirem uma api
                        Nesse curso eu ensino vcs a consumirem uma api
                        Nesse curso eu ensino vcs a consumirem uma api
                    </p>
                </div>
            </div>
            </main>
    </div>
    )
}