

export default function EnterScreen(props) {
    const { onEnterSuccess } = props

    return (
        <>
            <div className='h-screen w-full flex flex-col items-center font-semibold'>

            <div className="h-full w-full flex flex-col items-end justify-center">
                <div className="shared sent mr-10 text-xl">             
                    Blockchain is hard for the regular user
                </div>
                <div className="shared sent mr-10 text-xl">             
                    With a few clicks you can mint your own NFT
                </div>
                <div className="shared received ml-10 text-xl">             
                    You don't say, tell me more
                </div>
                <div className="shared sent mr-10 text-xl">             
                    Using Metamask you can connect to my app with your email
                </div>
                <div className="shared received ml-10 text-xl">             
                    Ah you mean here? 
                    <a className="underline text-blue-600" href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer" aria-label="Navigates Metamask download">Metamask</a>
                </div>

                <div className="shared sent mr-10 text-xl">             
                    Yep! Then click "mint" to create your own NFT from AI generated art
                </div>
                <div className="shared sent mr-10 text-xl">             
                    That's it, no fumbling with gas fees or wallets
                </div>
                <div className="shared received ml-10 text-xl">             
                    I'll try it out!
                </div>
            </div>

                <div className="enter text-8xl h-[150px] w-full flex justify-center items-end mb-20 border-solid border-t-[2px] border-[#333333]" onClick={() => onEnterSuccess()}>ENTER</div>           
            </div>
            <style>
                {`
                .shared {
                    position: relative; /* Setup a relative container for our psuedo elements */
                    max-width: 255px;
                    margin-bottom: 15px;
                    padding: 10px 20px;
                    line-height: 24px;
                    word-wrap: break-word; /* Make sure the text wraps to multiple lines if long */
                    border-radius: 25px;
                  
                    &:before {
                      width: 20px;
                    }
                  
                    &:after {
                      width: 26px;
                      background-color: #222222; /* All tails have the same bg cutout */
                    }
                  
                    &:before,
                    &:after {
                      position: absolute;
                      bottom: 0;
                      height: 25px; /* height of our bubble "tail" - should match the border-radius above */
                      content: '';
                    }
                  }

                  .sent {
                    align-self: flex-end;
                    color: white;
                    background: #027fff;
                  
                    &:before {
                      right: -7px;
                      background-color: #027fff;
                      border-bottom-left-radius: 16px 14px;
                    }
                  
                    &:after {
                      right: -26px;
                      border-bottom-left-radius: 10px;
                    }
                  }

                  .received {
                    align-self: flex-start;
                    color: black;
                    background: #e5e5ea;
                  
                    &:before {
                      left: -7px;
                      background-color: #e5e5ea;
                      border-bottom-right-radius: 16px 14px;
                    }
                  
                    &:after {
                      left: -26px;
                      border-bottom-right-radius: 10px;
                    }
                  }

                  .enter:hover {
                    color: #027fff;
                  }
                `}
            </style>
        </>
    )
}