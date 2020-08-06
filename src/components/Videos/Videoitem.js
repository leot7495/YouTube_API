import React , { useState , useEffect } from 'react'
import { AiTwotoneStar } from "react-icons/ai"

import './Videos.css'

function Videoitem ({element , collectArray , setCollect , pageToken}) {

    const [star , setStar] = useState(0)

    
    function clickstar() {

        if (star === 0 ) {
            let collect = JSON.parse(localStorage.getItem('Collect')) || [];
            collect.push(element.contentDetails.videoId);
            localStorage.setItem('Collect' , JSON.stringify(collect))
            console.log(element.contentDetails.videoId)
            setCollect(collect)
            setStar(1)
        }else{
            let collect = JSON.parse(localStorage.getItem('Collect')) || [];
            //過濾 videoId 
            const newCollect = collect.filter((e)=> e !== element.contentDetails.videoId);
            console.log(element.contentDetails.videoId)
            localStorage.setItem('Collect' , JSON.stringify(newCollect))
            setCollect(newCollect)
            setStar(0)
        }
    }
    
    function getStar () {
        let collect = JSON.parse(localStorage.getItem('Collect')) || [];
        if (collectArray.indexOf(element.contentDetails.videoId) !== -1) setStar(1);
      }


    useEffect (()=>{
        getStar();
    },[star,pageToken])

    return (
        <>
            <div className="videoitems">
                <div className="videoImg">
                {/* 影片 */}
                    <a href={"/VideoDetail/" + element.contentDetails.videoId} ><img src={element.snippet.thumbnails.high.url} alt="videoImg" width="100%"/></a>
                </div>

                {/* 影片名稱 */}
                <a href="##" className="titleHref"><h4 className="vodeoTitle">{element.snippet.title}</h4></a>
                
                {/* 影片頻道名稱 */}
                <p>{element.snippet.channelTitle}</p>

                {/* 影片內容 */}
                <p>發布時間 : {element.contentDetails.videoPublishedAt.substring(0,10)} </p>

                {/* 收藏星星 */}
                <a href="##">{star == 0 ? <AiTwotoneStar className="NoStar" onClick={clickstar}/> : <AiTwotoneStar className="star" onClick={clickstar}/>}</a>
            </div>        
        </>
    )
}
export default Videoitem;