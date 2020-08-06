import React from 'react'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Pagination from "react-bootstrap/Pagination";

function VideoPage ({videototal , setPageToken}) {
    let display = []
    let pageTotalNum = Math.ceil(videototal / 12);
    
        for (let i = 1 ; i <= pageTotalNum ; i++) {
            display.push(<Link className="videoPageItem" to="/" onClick={()=>{
                if (i === 1) {setPageToken('')} 
                if (i === 2) {setPageToken('CAwQAA')}
                if (i === 3) {setPageToken('CBgQAA')} 
                if (i === 4) {setPageToken('CCQQAA')} 
            }}> {i} </Link>)
        }

    return (
        <>
                <nav className="Pagination" >
                    <Link className="videoPageItem" to="/">＜</Link>
                    {display}
                    <Link className="videoPageItem" to="/">＞</Link>
                </nav>
        </>
    )
}
export default VideoPage;