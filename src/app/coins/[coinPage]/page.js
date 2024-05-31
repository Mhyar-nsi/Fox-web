'use client'

export default function CoinPage( {params} ){
    const coin = params.CoinPage
    console.log(coin)
    return(
        <>
            <p>Hello :D {coin}</p>
        </>
    )
}