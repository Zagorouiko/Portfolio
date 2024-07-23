import { useState } from "react";

export default function NFTRenderer({ ...props}) {

    const [imageUri, setImageURI] = useState("")
    const { minterAddress, tokenID, uri } = props

    const truncateStr = (fullStr, strLen) => {
        if (fullStr.length <= strLen) return fullStr
        const seperator = "..."
        const seperatorLength = seperator.length
        const charsToShow = strLen - seperatorLength
        const frontChars = Math.ceil(charsToShow / 2)
        const backChars = Math.floor(charsToShow / 2)
        return fullStr.substring(0, frontChars) + seperator + fullStr.substring(fullStr.length - backChars)
    }

    getImageSize(uri)

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
    </>
    )
}
