import { get } from '@/utils/request.js';
import Header from "@/app/Sections/Header";
import Detail from "@/app/news/[singleNews]/Detail";


export default async function Articles( {params} ){
    const slug = params.singleNews
    const detail = await get('/articles/' + slug)

    return (
        <>
            <Header/>
            <Detail data={detail}/>
        </>
    );
}