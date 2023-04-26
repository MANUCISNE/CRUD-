import { HeaderMain } from '../../components/HeaderMain/HeaderMain'
import More from '../../images/more.svg'
import { Link } from 'react-router-dom'

import './feed.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Post {
	id: number;
  title: string;
  description: string;
  content: string;
}

export function Feed() {
	const [posts, setPosts] = useState<Post[]>([])

	useEffect(() => {
		axios.get("http://localhost:3000/posts")
			.then((response) => {
				setPosts(response.data)
			})
			.catch(() => {
				console.log("Error")
			})
	}, [])

	function deletePost(id: number) {

        axios.delete(`http://localhost:3000/posts/${id}`)

        setPosts(posts.filter(post => post.id !== id ))

    }
																																																																																																																																								''
	return (
		<div>
			<HeaderMain setPosts={setPosts}/>

			<main>
				<div className="cards">
					{posts.map((post) => {
						return (
							<div key={post.id} className="card">
								<header>
									<h2>{post.title}</h2>
									<img src={More} />
								</header>

								<div className="line"></div>

									<p>{post.description}</p>

								<div className="btns" >

									<div className="btn-edit" >
										<Link to={`/edit/${post.id}`}>
											<button>editar</button>
										</Link>
									</div>

									<div className="btn-readmore" >
										<Link to={`/readMore/${post.id}`}>
											<button>ler mais</button>
										</Link>
									</div>

									<div className="btn-delete" >
										<button onClick={() => {
											deletePost(post.id)
										}}>delete</button>
									</div>

								</div>
							</div>
						)
					})}

				</div>
			</main>
		</div>
	)
}
