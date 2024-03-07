import React, { useState } from 'react'
import {AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment} from 'react-icons/ai'
import myImage from '../image/1.png'


const LikeMyPhoto = () => {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);
    
    const toggleLike = () => {
        if(!like){
            setLike(true);
            setCount(count + 1);
        }else{
            setLike(false);
            setCount(count - 1);
        }
    };
    
    return (
        <div>
            <div className="container photo-container">
                <h2 className='text-center'>Like My Photo</h2>
                <h3 className='text-center'>{`Likes ${count}`}</h3>
                <div className="card card-dark m-auto" style={{width:300, cursor:"pointer"}} onDoubleClick={toggleLike}>
                    <div className="card-header text-center">
                        <AiFillSmile className='mx-2' />
                        Photo
                    </div>
                    <img src={myImage} alt="img" style={{ height:"fit-content"}} />
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <AiOutlineComment />{like ? <AiFillHeart className="text-danger" onClick={toggleLike} /> : <AiOutlineHeart onClick={toggleLike} />}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default LikeMyPhoto
