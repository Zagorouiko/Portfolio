import NFTRenderer from '../components/NFT_Components/NFTRenderer'
import { ConnectWallet, useAddress } from "@thirdweb-dev/react"
import GET_NFT_DATA from '../constants/subgraphQueries'
import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { generateImage } from '../lib/helpers'
import { Web3Button } from "@thirdweb-dev/react";
import networkMapping from "../constants/networkMapping"
import gumABI from "../constants/NFTABI.json"
import EnterScreen from '../components/NFT_Components/EnterScreen'

export default function NFTpage() {
  const { loading, data, refetch } = useQuery(GET_NFT_DATA)
  const gumAddress = networkMapping[11155111].Degen[0]
  const userAddress = useAddress()

  const [entered, setEntered] = useState(false)
  const [NFTData, setNFTData] = useState([])

  useEffect(() => {
    const handleMessage = (event) => {
      // Check if the event origin is trusted (for security reasons)
      if (event.origin !== 'http://zagorouiko.com' || !Number.isInteger(event.data)) {
        return;
      }

      // Handle the received data
      // const data = event.data;
      // setiFrameIndex(data + 1)
    }
    window.addEventListener('message', handleMessage)

    if (data) {
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
  }, [data, loading])
  

    // REALLY COOOL - How to pass data from child to parent component
    // the onMintSuccess function is passed to the MintButton component as an attribute 
    // then on the onSuccess in the mint - the onMintSuccess function is called (with the data from there)
    // which actually calls back to the handleMintSucess here
    // Which then propagates back up to the parent component into the handleMintSuccess function

    const handleEnter = () => {
      setEntered(true)
    }

  return (
    <>   
    {entered ?  
    <div className='flex flex-col items-center justify-center h-full z-50'>

      <div className='flex flex-row w-[512px] justify-center'>
          <ConnectWallet style={{width: '512px', fontWight: '800', fontSize: '2rem'}}  className=' hover:bg-[#00ff84] h-32'/>
          {userAddress ?         
          <Web3Button
            style={{flexGrow: '1', fontWight: '800', fontSize: '1.75rem'}}
            className='hover:bg-[#00ff84]'
            contractAddress={gumAddress}
            contractAbi={gumABI} 
            action={async (contract) => {
            try {
                let imageURI = await generateImage()
                console.log('Image URI:', imageURI)
                const transaction = await contract.call('safeMint', [userAddress, imageURI])
                return transaction
              } catch (error) {
                console.log(error)
              }
            }}
            onSuccess={async () => {
              await refetch()
            }}
          >
          Mint
          </Web3Button> : <></>}
        </div>

      <div className='grid grid-cols-2'>
         
        {NFTData ? NFTData.map((nft, index) => {
          return <NFTRenderer key={index} {...nft} />
        })
        : <div key={`empty-div-${index}`} />
      }
    </div>
   </div>
   : <EnterScreen onEnterSuccess={handleEnter}/> }

   <style>
    {`
    .tw-connected-wallet > div > img {
      margin-left: 100px;
    }

    .tw-connected-wallet {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    .css-bi7z90, .css-1kgliau, .css-1kgliau, .css-ascgim, .css-1h2nxg5, .css-d9ufcg, .css-1drgly1, .css-14k66z6, .css-e6avxu, .css-7v9cbl, .css-u5lkp0, .css-as278y, .css-ynotd8 {
      font-size: 30px;
    }

    button > .css-1h2nxg5 {
      font-size: 30px;
    }

    .tw-web3button {
      margin-right: 5px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 0px;
      background-color: #8044cf;
      color: white;
    }



      .hover-img {
        background-color: #000;
        color: #fff;
        display: inline-block;

        position: relative;
        text-align: center;
        width: 100%;
    }
    
    .hover-img * {
        box-sizing: border-box;
        transition: all 0.45s ease;
    }

    .hover-img::before,
    .hover-img::after {
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: '';
        transition: all 0.3s ease;
        z-index: 1;
        opacity: 0;
        transform: scaleX(1);
    }
    
    .hover-img img {
        vertical-align: top;
        max-width: 100%;
        backface-visibility: hidden;
    }
    
    .hover-img figcaption {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        align-items: center;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 1.1em;
        opacity: 0;
        z-index: 2;
        transition-delay: 0.1s;
        font-size: 24px;
        font-family: sans-serif;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    
    .hover-img:hover::before,
    .hover-img:hover::after {
        transform: scale(1);
        opacity: 1;
    }
    
    .hover-img:hover > img {
        opacity: 0.7;
    }
    
    .hover-img:hover figcaption {
        opacity: 1;
    }

    body {
      overflow: visible;
    }
    `}
   </style>
   </>
  )
}
