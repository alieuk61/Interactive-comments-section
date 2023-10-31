import './index.css'
import data from './data.json'
import { useState } from 'react'
import minus from './images/icon-minus.svg'
import plus from './images/icon-plus.svg'
import reply from './images/icon-reply.svg'
import juliusPic from './images/avatars/image-juliusomo.png'


function CommentsSection(){
    // ADDED THINGS TO THE JSON FILE, NOW ALL WE NEED TO DO IS WORK OUT WHY ITS NOT CREATING DIVS FOR THE NEW DATA
    //AFTER THAT WE CAN WORK ON THE REPLIES TASK
    //THEN WE CAN WORK ON THE UPDATE PART OF CRUD, (IM GUESSING WE ALTER THE CONTENT ON THE DATA IN JSON FILE)
    //THEN WE CAN FINISH STIYLING 
    //AFTER ALL OF THIS, WE'RE DONE!! IF WE WANT WE CAN INTRODUCE NEW ANIMATION STUFF

    const [jsonData, SetJsonData] = useState(data.comments)
    const [comment, setComment] = useState('')
    const [list, addToList] = useState([])
    // const [score, setScore] = useState(0)

    function saveData (){
        const newComment = {
            "id": data.comments[data.comments.length - 1].id+1,
            "content": comment,
            "createdAt": 'working on this...',
            "score": 0,
            "user": data.currentUser,
            "replies": []
    }

    SetJsonData([...jsonData, newComment])

    console.log(jsonData)

    setComment('')
    }

    function Comment(props) {
        return (
            <div className='comments-wrapper w-fit h-fit mb-5'>
                <div id={props.id} className='comments w-[735px] h-[162px] bg-White rounded-lg flex flex-row float-right box-border p-25px space-x-4'>
                    <section className='likes'>
                        <div className='bg-Very-light-gray w-[44px] h-[90px] rounded-lg grid justify-center items-center'>
                            <button className='dislike-btn w-[20px] h-[20px]'>
                                <img 
                                src={plus} 
                                alt="plus-image" 
                                className=''
                                onClick={() => {
                                    
                                }}
                                />
                            </button>
                            <span className='text-Moderate-blue font-bold'>{props.score}</span>
                            <img src={minus} alt="subtract-image" />
                        </div>
                    </section>

                    <section className='text-section w-full'>
                        <div className='flex'>
                            <img src={props.image} alt="user-icon" />
                            <p className='font-medium text-Dark-blue'>{props.username}</p>
                            <p>{props.createdAt}</p>
                            <p className='flex cursor-pointer'><img src={reply} alt="reply-icon" /><span className='font-bold text-Moderate-blue'>reply</span></p>
                        </div>
                        <textarea
                            name="amyrobson"
                            id="amyrobson"
                            readOnly='true'
                            className='resize-none w-full h-[100px] bg-White'
                        >
                            {props.content}
                        </textarea>
                    </section>
                </div>
                {props.replies.map((reply, index) => {
                    {console.log(reply)}
                    // <div key={index} className='reply-wrapper pt-[20px] pl-[35px] h-[144px] w-full bg-slate-500'>
                    //     <div className='reply-comment-container'>
                    //         <div className='reply'>
                    //             <h1>{reply.content}</h1>
                    //             <h1>{reply.replyingTo}</h1>
                    //         </div>
                    //     </div>
                    // </div>

                    
                })}
            </div>
        );
    }
    
    return(
        <section className="main w-full h-full flex items-center flex-col bg-Very-light-gray box-border p-10 font-Rubik text-Grayish-blue">
            
            {jsonData.map((comments, index) => (
                <Comment 
                key={index}
                id={index+1}
                image={comments.user.image.png}
                score={comments.score}
                username={comments.user.username}
                createdAt={comments.createdAt}
                content={comments.content}
                replies={comments.replies}
                />
                

            )
            )}

            
            <section className='main-input w-[735px] h-[162px] flex justify-evenly bg-White rounded-lg p-5'>
                <img src={juliusPic} alt="User-profile-picture" className='w-[36px] h-[36px]' />
                <textarea 
                className="resize-none h-[100px] w-[500px] border-2 border-Grayish-blue rounded-md bg-White"
                name="juliusomo"
                id="juliusomo"
                placeholder='Add a comment...'
                value={comment}
                onChange={(e) => {
                    console.log(e.target.value)
                    setComment(e.target.value)
                }}
                ></textarea>
                <div 
                className='btn rounded-lg bg-Moderate-blue w-[90px] h-[47px] flex justify-center items-center text-White cursor-pointer'
                onClick={() => {
                    {/* we want to save it in a data structure so that we can create things with that data */}
                    saveData()
                }
                }
                >SEND</div>

                
            </section>
            
        </section>
    )
}

export default CommentsSection