import CoinSlider from "@/app/Components/CoinSlider";
import { get } from '@/utils/request'

export default async function Coins() {
    async function getCoins() {
        const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10', {method: 'GET' , headers:{'x-cg-demo-api-key': ''}});
        return await data.json()
    }

    const coins = await getCoins()
    return (
        <div className="my-32">
            <CoinSlider coins={coins}/>
        </div>
    )
}