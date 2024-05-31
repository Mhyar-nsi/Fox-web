import { get } from "@/utils/request";

export default async function Articles(){
    const newsList = await get('/articles/' );

    return(
        <>
            <div className="flex items-center p-4">
                {
                    newsList.map((article)=> (
                        <div key={article.id} className="bg-slate-800 rounded mx-2 p-5 text-white">
                            <h1>{article.title}</h1>
                            {article.content}
                        </div>
                    ))}
            </div>
        </>
    )
}