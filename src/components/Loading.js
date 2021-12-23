import React from 'react'
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => {
    return (
        <>
            <div>
                <ReactLoading className="centers" type={type} color={color} height={40} width={40} />
            </div>
            <div style={{textAlign:"center"}}>
                Loading...
            </div></>
    )
}

export default Loading
