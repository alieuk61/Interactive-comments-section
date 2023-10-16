import './index.css'
import data from './data.json'
import { useState } from 'react'

function CommentsSection(){
    return(
        <section className="main w-full h-screen justify-center flex-col bg-Very-light-gray">
            
            {/* div wrapper and divs for the actual comments */}

            {/* div for the input */}
            
            <section className='input w-[600px] h-[150px] flex bg-White rounded-lg p-5'>
                <img src={data.currentUser.image.png} alt="User-profile-picture" />
                <textarea 
                className="resize-none h-[100px] w-[500px] border-2 border-Grayish-blue rounded-md"
                name="juliusomo"
                id="juliusomo"
                placeholder='Add a comment...'
                // value={}
                // onChange={}
                onClick={(e) => {
                    
                }}
                ></textarea>
                <div className='btn rounded-lg bg-Moderate-blue w-[90px] h-[47px] flex justify-center items-center text-White cursor-pointer'>SEND</div>

                
            </section>
            
        </section>
    )
}

export default CommentsSection