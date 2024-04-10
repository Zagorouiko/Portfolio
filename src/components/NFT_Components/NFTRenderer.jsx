import { useState, useEffect} from "react";

export default function NFTRenderer({ ...props}) {

    const [imageUri, setImageURI] = useState("")
    const { minterAddress, tokenID, uri, onNFTLoaded } = props

    const truncateStr = (fullStr, strLen) => {
        if (fullStr.length <= strLen) return fullStr
        const seperator = "..."
        const seperatorLength = seperator.length
        const charsToShow = strLen - seperatorLength
        const frontChars = Math.ceil(charsToShow / 2)
        const backChars = Math.floor(charsToShow / 2)
        return fullStr.substring(0, frontChars) + seperator + fullStr.substring(fullStr.length - backChars)
    }
    
    if (imageUri) {
        onNFTLoaded()
    }
    

    useEffect(() => {
        if (uri) {
            getImageSize(uri)
            }         
        }, []      
    )

    async function getImageSize(url) {
        const NFTresponse = await fetch(url)
        const IPFSURIResponse = await fetch(NFTresponse.url)
        const responseJSON = await IPFSURIResponse.json()
        setImageURI(responseJSON.image)
    }

    return (
        <>
        <figure className="hover-img">
            <img src={imageUri}/>
        <figcaption>
            <h3>ID: {tokenID} <br/>{truncateStr(minterAddress, 15)}</h3>
        </figcaption>
        </figure>

        <style>
            {`
            .hover-img {
                background-color: #000;
                color: #fff;
                display: inline-block;
                max-width: 320px;
                min-width: 240px;
                overflow: hidden;
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
                transform: scaleY(2);
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
            `}
        </style>
    </>
    )

}
