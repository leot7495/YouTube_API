import React , { useState , useEffect } from 'react'
import { AiTwotoneStar } from "react-icons/ai"

function Collectitem ({element , collect , setCollect }) {
    const [star , setStar] = useState(0)
    console.log(element)

    
    function clickstar() {

        if (star === 0 ) {
            let collect = JSON.parse(localStorage.getItem('Collect')) || [];
            collect.push(element[0].id);
            localStorage.setItem('Collect' , JSON.stringify(collect))
            console.log(element[0].id)
            setCollect(collect)
            setStar(1)
        }else{
            let collect = JSON.parse(localStorage.getItem('Collect')) || [];
            //過濾 videoId 
            const newCollect = collect.filter((e)=> e !== element[0].id);
            console.log(element[0].id)
            localStorage.setItem('Collect' , JSON.stringify(newCollect))
            setCollect(newCollect)
            setStar(0)
        }
    }
    
    function getStar () {
        let collect = JSON.parse(localStorage.getItem('Collect')) || [];
        if (collect.indexOf(element[0].id) !== -1) setStar(1);
      }


    useEffect (()=>{
        getStar();
    },[star])

    return (
        <>
            <div className="videoitems">
                <div className="videoImg">
                {/* 影片 */}
                    <a href={"/VideoDetail/" + element[0].id} ><img src={element[0].snippet.thumbnails.high.url} alt="videoImg" width="100%"/></a>
                </div>

                {/* 影片名稱 */}
                <a href="##" className="titleHref"><h4 className="vodeoTitle">{element[0].snippet.title}</h4></a>
                
                {/* 影片頻道名稱 */}
                <p>{element[0].snippet.channelTitle}</p>

                {/* 影片內容 */}
                <p>發布時間 : {element[0].snippet.publishedAt.substring(0,10)} </p>

                {/* 收藏星星 */}
                <a href="##">{star == 0 ? <AiTwotoneStar className="NoStar" onClick={clickstar}/> : <AiTwotoneStar className="star" onClick={clickstar}/>}</a>
            </div>        
        </>
    )
}
export default Collectitem;