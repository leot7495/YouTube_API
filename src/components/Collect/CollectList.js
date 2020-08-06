import React , {useState , useEffect} from 'react'
import Collectitem from './Collectitem'

import './Collect.css'

function CollectList () {

    const [collectVideos , setCollectVideos] = useState([]);
    const [collect , setCollect] = useState([])
    
    async function getVideoPlayer() {
        let collect = JSON.parse(localStorage.getItem('Collect')) || [];
        let collectVideo = []
        
        for (const collectvideo of collect ) {
            const url = "https://www.googleapis.com/youtube/v3/videos?id=" + collectvideo + "&part=snippet%2CcontentDetails&maxResults=1&key=AIzaSyDop59f4_tgvVDTZWtPSoF6iJaBEZIItII";
            const request = new Request(url, {
                method: "GET",
                headers: new Headers({
                    Accept: "application/json",
                    "Content-Type": "appliaction/json",
                }),
            });
            const response = await fetch(request);
            const data = await response.json();
            collectVideo.push(data.items)
        }
        setCollectVideos(collectVideo)      
    }


    useEffect(()=>{
        setCollect(JSON.parse(localStorage.getItem('Collect')) || [])
        getVideoPlayer()
    },[])

    return (
        <>
            <h1>收藏影片</h1>
            <div className="videolist">
        {console.log(collectVideos)}
                    {collectVideos !== [] ? collectVideos.map((element , index)=>{
                        return (
                            <Collectitem element={element} key={index} collect={collect} setCollect={setCollect} />
                        )
                    }) : ''}
            </div>
        </>
    )
}

export default CollectList;