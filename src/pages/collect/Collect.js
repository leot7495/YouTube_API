import React from 'react'
import CollectList from '../../components/Collect/CollectList'

import './Collect.css'

function Collect () {
    return (
        <>
            <div className="videos">
                <div className="container">
                    <CollectList />
                </div>
            </div>
        </>
    )
}
export default Collect;