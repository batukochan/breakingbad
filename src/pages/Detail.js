import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from '../components/Loading'
import { Card } from 'react-bootstrap';


const Detail = () => {
    const { char_id } = useParams()
    const [char, setchar] = useState(null)

    useEffect(() => {
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
            .then(res => res.data)
            .then(data => setchar(data[0]))
    }, [char_id])

    return (
        <div style={{ margin: '5px auto' }}>
            {char ? (<div style={{ textAlign: 'center' }} >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`${char.img}`} />
                    <Card.Body>
                        <Card.Title>{char.name}</Card.Title>
                        <Card.Text>
                            Birthday: {char.birthday}
                        </Card.Text>
                        <Card.Text>
                            Nick Name: {char.nickname}
                        </Card.Text>
                    </Card.Body>
                </Card></div>)
                :
                <Loading type="spin" color="green" />}
        </div>
    )
}

export default Detail
