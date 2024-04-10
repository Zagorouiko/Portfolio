
import NFTRenderer from '../components/NFT_Components/NFTRenderer'
import MintButton from "../components/NFT_Components/MintButton"
import { ConnectWallet, useAddress } from "@thirdweb-dev/react"
import GET_NFT_DATA from '../constants/subgraphQueries'
import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { generateImage } from '../lib/helpers'
import { ClipLoader } from 'react-spinners';

export default function NFTpage() {
  let nftUpdated = ""

  const userAddress = useAddress()
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageURI, setImageURI] = useState("") 
  const [NFTData, setNFTData] = useState([])
  const { loading, data } = useQuery(GET_NFT_DATA)
  const [iFrameIndex, setiFrameIndex] = useState(0)

  useEffect(() => {
    const handleMessage = (event) => {
      // Check if the event origin is trusted (for security reasons)
      if (event.origin !== 'http://localhost:3000' || !Number.isInteger(event.data)) {
        return;
      }

      // Handle the received data
      const data = event.data;
      setiFrameIndex(data + 1)
    };
    window.addEventListener('message', handleMessage)

    if (!loading) {
      let NFTDataArray = []
      try {   
        data.nftCreates.map((nft) => {
          const { minterAddress, tokenID, uri } = nft
          let nftObj = {
            minterAddress: minterAddress,
            tokenID: tokenID,
            uri: uri
          }
          NFTDataArray.push(nftObj)
        })
      } catch (err) {
        console.log(err)
      }
      setNFTData(NFTDataArray)
      
    }
  }, [data, loading, nftUpdated])
  
    const handleButtonClick = async () => {
      setIsLoaded(true)
      const image = await generateImage()
      if (image) {
        setImageURI(image)
      }
    }

    // REALLY COOOL - How to pass data from child to parent component
    // the onMintSuccess function is passed to the MintButton component as an attribute 
    // then on the onSuccess in the mint - the onMintSuccess function is called (with the data from there)
    // which actually calls back to the handleMintSucess here
    // Which then propagates back up to the parent component into the handleMintSuccess function
    const handleMintSuccess = (result) => {     
      console.log('Received result in parent component:', result.receipt.transactionHash)
      nftUpdated = result.receipt.transactionHash
      setIsLoaded(false)
    };

    const handleNFTLoaded = () => {
      // window.scrollTo(0, iFrameIndex * 2200);
    }

  return (
    <>
    <div className='flex items-center justify-center max-h-full overflow-auto'>
      <div className='grid grid-cols-2'>
      <ConnectWallet className='walletConnect'/>

      { userAddress && imageURI ? 
      (<MintButton className='AIGenerateButton' imageURI={imageURI} userAddress={userAddress} onMintSuccess={handleMintSuccess}/>) 
      : 
      (<button className='AIGenerateButton' onClick={handleButtonClick}>
        {isLoaded ? (
          <ClipLoader color="#ffffff" loading={isLoaded} size={15} />
        ) : "AI Generate"}
      </button>)}
    
     
        {NFTData ? NFTData.map((nft, index) => {
          if (index % 8 === 0 && index !== 0) { 
            return (
              <NFTRenderer key={index} {...nft} onNFTLoaded={handleNFTLoaded} />   
            )
          }
          return <NFTRenderer key={index} {...nft} onNFTLoaded={handleNFTLoaded} />
        })
        : <div key={`empty-div-${index}`} />
      }
    </div>
   </div>
   <style>
    {`
    .AIGenerateButton {
      align-items: center;
       background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
       border: 0;
       border-radius: 8px;
       box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
       box-sizing: border-box;
       color: #FFFFFF;
       display: flex;
       font-family: Phantomsans, sans-serif;
       font-size: 14px;
       justify-content: center;
       line-height: 1em;
       max-width: 100%;
       min-width: 140px;
       padding: 3px;
       text-decoration: none;
       user-select: none;
       -webkit-user-select: none;
       touch-action: manipulation;
       white-space: nowrap;
       cursor: pointer;
       transition: all .3s;
      }
      
      .AIGenerateButton:active,
      .AIGenerateButton:hover {
       outline: 0;
      }
      
      .AIGenerateButton:active {
       transform: scale(0.9);
      }
    `}
   </style>
   </>
  )
}
