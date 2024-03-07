import React, { useState } from 'react'
import {AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment} from 'react-icons/ai'
import { FaRegSmileWink } from "react-icons/fa";
import myImage from '../image/1.jpg'
import { RiEmotionUnhappyLine, RiEmotionHappyLine } from "react-icons/ri";

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
                <div className="card card-dark m-auto" style={{width:500, cursor:"pointer"}} >
                    <div className="card-header text-center">
                        {like ?  <RiEmotionHappyLine className='mx-2' style={{ fontSize: '34px', color: 'red' }} /> : <RiEmotionUnhappyLine className='mx-2' style={{ fontSize: '34px' }} />}
                        <strong>Photo</strong>
                    </div>
                    <img src={myImage} alt="img" style={{ height:"fit-content"}} onDoubleClick={toggleLike} />
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        {like ? <AiOutlineComment style={{ fontSize: '34px', color: 'red' }} />:  <AiOutlineComment style={{ fontSize: '34px' }} />}
                        {like ? <AiFillHeart className="text-danger" onClick={toggleLike} style={{ fontSize: '34px', color: 'red' }}  /> : <AiOutlineHeart onClick={toggleLike} style={{ fontSize: '34px' }}  />}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default LikeMyPhoto
