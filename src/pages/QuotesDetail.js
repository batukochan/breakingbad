import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { fetcAllhQuotes, quotesSelector } from '../redux/bbSlice/quotesSlice';
import Quotes from './Quotes';

const QuotesDetail = () => {

    const { quote_id } = useParams();
    const quotes = useSelector(quotesSelector)
    const quote = quotes.find(item => item.quote_id === Number(quote_id))

    return (
        <div>

            <ListGroup style={{textAlign:'center'}}>
                <ListGroup.Item >{quote.author}</ListGroup.Item>
                <ListGroup.Item>{quote.quote}</ListGroup.Item>
                <ListGroup.Item>  {quote.series}</ListGroup.Item>
            </ListGroup>

            
            
          

        </div>
    )
}

export default QuotesDetail
