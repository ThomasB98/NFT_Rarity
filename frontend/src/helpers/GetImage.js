/**
 * It takes the metadata of a token and returns the image of the token
 * @param metadata - The metadata of the token.
 * @returns The image url
 */
export const getImage = function(metadata){

    const data = JSON.parse(metadata);
    
    if(data.image.includes("ipfs://")){
        return(`https://ipfs.moralis.io:2053/ipfs/${data.image.replace("ipfs://", "")}`);
    }else{
        return(data.image)
    }
}