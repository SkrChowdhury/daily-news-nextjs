import { getCategoryNews } from '@/utils/getCategoryNews';
import React from 'react';

const DynamicNewsPage = async ({params, searchParams}) => {
    const {data} = await getCategoryNews(searchParams.category)
    return (
        <div className='my-5'>
            <h1>Total {searchParams.category} News : {data.length}</h1>
        </div>
    );
};

export default DynamicNewsPage;