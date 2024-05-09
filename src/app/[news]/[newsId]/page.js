import { getSingleNews } from '@/utils/getSingleNews';
import React from 'react';

const NewsDetailPage = async ({params}) => {
    const data = await getSingleNews(params.newsId)
    return (
        <div>
            {params.newsId}
        </div>
    );
};

export default NewsDetailPage;