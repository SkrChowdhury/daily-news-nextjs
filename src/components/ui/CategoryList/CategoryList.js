import { getAllCategories } from '@/utils/getAllCategories';
import React from 'react';

const CategoryList = async () => {
    const {data: allCategories} = await getAllCategories()
    // console.log("🚀 ~ CategoryList ~ allCategories:", allCategories)
    return (
        <div>
            <h1>Categories</h1>
        </div>
    );
};

export default CategoryList;