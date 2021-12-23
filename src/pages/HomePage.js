import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../redux/bbSlice/charactersSlice'
import Masonry from 'react-masonry-css'
import './style.css'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const characters = useSelector(state => state.characters.items)
    const status = useSelector(state => state.characters.status)
    const error = useSelector(state => state.characters.error)
    const nextPage = useSelector(state => state.characters.page)
    const hasNextPage = useSelector(state => state.characters.hasNextPage)

    const dispatch = useDispatch()
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCharacters())
        }
    }, [dispatch,status])


    return (
        <>
            <div style={{ textAlign: 'center' }}>Characters</div>
            {status === 'failed' && <Error error={error} />}

            <Masonry
                breakpointCols={3}
                className="my-masonry-grid "
                columnClassName="my-masonry-grid_column">

                {characters.map((character, i) => <div key={i}>
                    <Link to={`/char/${character.char_id}`}>
                        <img alt={character.name} className='character' src={character.img} />
                        <div className="char_name">{character.name}</div>
                    </Link>
                </div>)}

            </Masonry>

            {status === 'loading' && <Loading type="spin" color="green" />}

            {hasNextPage && status !== 'loading' && (<div style={{ padding: "20px 0 40px 0", textAlign: 'center' }}>
                <button onClick={() => dispatch(fetchCharacters(nextPage))}>Load More {nextPage}</button></div>)}

            {!hasNextPage && <div>There is nothing to be shown</div>}



        </>


    )
}

export default HomePage
