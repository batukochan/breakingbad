import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { fetcAllhQuotes,quotesSelector } from '../redux/bbSlice/quotesSlice';
import Quotes from './Quotes';

const QuotesDetail = () => {

    const {quote_id} = useParams();
    const quotes = useSelector(quotesSelector)
    const quote = quotes.find(item => item.quote_id === Number(quote_id))
    console.log("lelele",quote)


    return (
        <div>
            {JSON.stringify(quote,null,2)}
        </div>
    )
}

export default QuotesDetail
