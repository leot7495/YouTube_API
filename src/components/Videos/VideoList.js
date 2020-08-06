import React , { useState , useEffect } from 'react'
import $ from 'jquery'
import Videoitem from './Videoitem'
import VideoPage from './VideoPage'

import './Videos.css'

function VideoList () {
    const [videos , setVideos] = useState([])
    const [videototal , setVideototal] = useState(0)
    const [pageToken , setPageToken] = useState('')
    const [collect , setCollect] = useState([])
    //CAwQAQ 第一頁
    //CAwQAA 第二頁
    //CBgQAA 第三頁
    //CCQQAA 第四頁
    //CBwQAA 第五頁
    async function getYouTubeApi() {

                // 連接的伺服器資料網址
                // const url = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&maxResults=1&id=yU644phPM3E&id=TfpUB8sAheI&id=x3bDhtuC5yk&key=AIzaSyDop59f4_tgvVDTZWtPSoF6iJaBEZIItII";
                const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=PLD9w_4C7fzm6pHsMvoTuASMQcT0CGMKt4&maxResults=12&pageToken=" + pageToken + "&key=AIzaSyDop59f4_tgvVDTZWtPSoF6iJaBEZIItII";

                // 注意header資料格式要設定，伺服器才知道是json格式
                const request = new Request(url, {
                method: "GET",
                headers: new Headers({
                    Accept: "application/json",
                    "Content-Type": "appliaction/json",
                }),
                });
                const response = await fetch(request);
                const data = await response.json();
                console.log(data)
                setVideototal(data.pageInfo.totalResults)
                setVideos(data.items)
        }

    
    //向上滾動
    function scrollYTop () {
        if (window.pageYOffset > 0) {
            $([document.documentElement, document.body]).animate({ //animate JQuery 動畫較果
                scrollTop: 0 
              }, 600); //0.6滾動時間0.6秒
        }
    }

    useEffect(()=>{
        getYouTubeApi()
        setCollect(JSON.parse(localStorage.getItem('Collect')) || [])
    },[pageToken])

    useEffect(()=>{
        getYouTubeApi()
    },[pageToken,collect])

    useEffect(()=>{
        scrollYTop()
    },[pageToken])

    return (
        <>
            <h1>推薦影片</h1>
                <div className="videolist">
                    {videos.map((element , index)=>{
                        return (
                            <Videoitem element={element} key={index} collect={collect} collectArray={collect} setCollect={setCollect} pageToken={pageToken}/>
                        )
                    })}
                </div>
                    <VideoPage videototal={videototal} setPageToken={setPageToken}/>
        </>
    )
}
export default VideoList;