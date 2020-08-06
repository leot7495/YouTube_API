/* eslint-disable jsx-a11y/iframe-has-title */
import React , {useState , useEffect} from 'react'
import { withRouter } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai"

import './VideoDetail.css'


function VideoDetail (props) {
    const [videoPlayer , setVideoPlayer] = useState("")
    const [star , setStar] = useState(0)

    // 抓取url參數前 要先使用高級路由 withRouter
    const videoID = props.match.params.VideoID
    
    
  
    async function getVideoPlayer() {

        const url = "https://www.googleapis.com/youtube/v3/videos?id=" + videoID + "&part=snippet%2CcontentDetails&maxResults=1&key=AIzaSyDop59f4_tgvVDTZWtPSoF6iJaBEZIItII";
    
        const request = new Request(url, {
            method: "GET",
            headers: new Headers({
                Accept: "application/json",
                "Content-Type": "appliaction/json",
            }),
        });
        const response = await fetch(request);
        const data = await response.json();
        setVideoPlayer(data.items[0].snippet)
    }

    function clickstar() {

        if (star === 0 ) {
            let collect = JSON.parse(localStorage.getItem('Collect')) || [];
            collect.push(videoID);
            localStorage.setItem('Collect' , JSON.stringify(collect))
            setStar(1)
        }else{
            let collect = JSON.parse(localStorage.getItem('Collect')) || [];

            //過濾 videoId 
            const newCollect = collect.filter((e)=> e !== videoID);
            localStorage.setItem('Collect' , JSON.stringify(newCollect))
            setStar(0)
        }
    }

    function getStar () {
        let collect = JSON.parse(localStorage.getItem('Collect')) || [];
        if (collect.indexOf(videoID) !== -1) setStar(1);
      }


    useEffect (()=>{
        getStar();
    },[star])

    useEffect(()=>{
        getVideoPlayer()
    },[])
    return (
        <>
        <div className="videoBox">
            <div className="video">
                <iframe width="100%" height="100%" src={"//www.youtube.com/embed/" + videoID} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </div>
            <div className="videoDescription">
                <h3>{videoPlayer == "" ?  "" : videoPlayer.title + videoPlayer.publishedAt.substring(0,10)} 
                <a href="##">{star === 0 ? <AiTwotoneStar className="DetailNoStar" onClick={clickstar}/> : <AiTwotoneStar className="Detailstar" onClick={clickstar}/>}</a>
                </h3>
                {console.log(videoPlayer)}
                <p className="videoDetailP">{videoPlayer.channelTitle}</p>
                <p className="videoDetailDescriptionP">{videoPlayer.description}</p>
            </div>
        </div>
        </>
    )
}

export default withRouter(VideoDetail);