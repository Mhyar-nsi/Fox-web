import NewsSlider from "@/app/Components/NewsSlider";
import { get } from '@/utils/request'

export default async function News() {
    const news = await get('/articles/' );

    return (
        <>
            <NewsSlider news={news}/>
        </>
    );
}