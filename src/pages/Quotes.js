import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetcAllhQuotes, quotesSelector, statusSelector, errorSelector } from '../redux/bbSlice/quotesSlice'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import Error from '../components/Error'

const Quotes = () => {
    const dispatch = useDispatch()
    const data = useSelector(quotesSelector)
    const status = useSelector(statusSelector)
    const error = useSelector(errorSelector)
    console.log(data)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetcAllhQuotes())
        }

    }, [dispatch, status])

    return (
        <>
            {status === 'failed' && <Error error={error}/>}
            {status === 'loading' && <Loading type={"spin"} color={"green"} />}
            {data.map(character =>
               <Link to={`/quotes/${character.quote_id}`} className="quotesLink" ><ListGroup style={{ textAlign: 'center' }}>
                  <ListGroup.Item variant="">{character.quote} | <b>{character.author}</b>  </ListGroup.Item>
                </ListGroup></Link> 
            )}
        </>
    )
}

export default Quotes
