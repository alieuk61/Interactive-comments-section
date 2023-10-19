import './index.css'
import data from './data.json'
import { useState } from 'react'
import minus from './images/icon-minus.svg'
import plus from './images/icon-plus.svg'
import reply from './images/icon-reply.svg'
import myProPic from './images/avatars/image-juliusomo.png'

function CommentsSection(){
    const [amyLikeCount, setAmyLikes] = useState(data.comments[0].score)
    const [amyName, setAmyName] = useState(data.comments[0].user.username)
    const [maxName, setmaxName] = useState(data.comments[1].user.username)
    const [maxLikeCount, setMaxLikes] = useState(data.comments[1].score)
    const [amyReplyDate, setAmyRDate] = useState(data.comments[0].createdAt)
    const [maxReplyDate, setMaxDate] = useState(data.comments[1].createdAt)
    
    return(
        <section className="main w-full h-screen flex items-center flex-col bg-Very-light-gray box-border p-10">
            
            {/* div wrapper and divs for the actual comments */}

            {/* div for the input */}

            <div className='comments w-[600px] h-[150px] bg-White mb-5 rounded-lg flex flex-wrap float-right p-5'>
                <div className='bg-Light-grayish-blue w-[30px]'>
                    <img src={plus} alt="plus-image" className='' />
                    {amyLikeCount}
                    <img src={minus} alt="subtract-image" />
                </div>
                <div className='flex'>
                    <p>{amyName}</p>
                    <p>{amyReplyDate}</p>
                    <p className=''>{reply}</p>
                </div>
                <textarea 
                name="amyrobson" 
                id="amyrobson" 
                readOnly='true'
                    className='resize-none w-[500px] h-[100px] bg-White'
                >
                    Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
                </textarea>
            </div>
            <div className='comments w-[600px] h-[150px] bg-White mb-5 rounded-lg flex flex-wrap float-right p-5'>
                <div className='bg-Light-grayish-blue w-[30px]'>
                    <img 
                    src={plus}
                    alt="plus-image"
                    className=''
                    // onClick={}
                    />
                    {maxLikeCount}
                    <img src={minus} alt="subtract-image" />
                </div>
                <div className='flex'>
                    <p>{maxName}</p>
                    <p>{maxReplyDate}</p>
                    <p className='grid items-end'>{reply}</p>
                </div>
                <textarea
                    name="maxblagun"
                    id="maxblagun"
                    readOnly='true'
                    className='resize-none w-[500px] h-[100px] bg-White'
                >
                   Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dice into React as well soon. Perhaps you can give me an insight on where i can learn React? Thanks!
                </textarea>
            </div>
            
            <section className='main-input w-[600px] h-[150px] flex bg-White rounded-lg p-5'>
                <img src={myProPic} alt="User-profile-picture" />
                <textarea 
                className="resize-none h-[100px] w-[500px] border-2 border-Grayish-blue rounded-md bg-White"
                name="juliusomo"
                id="juliusomo"
                placeholder='Add a comment...'
                // value={}
                onClick={(e) => {
                    
                }}
                ></textarea>
                <div className='btn rounded-lg bg-Moderate-blue w-[90px] h-[47px] flex justify-center items-center text-White cursor-pointer'>SEND</div>

                
            </section>
            
        </section>
    )
}

export default CommentsSection