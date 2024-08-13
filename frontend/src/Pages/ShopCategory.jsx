import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = all_product.filter(item => {
        if (selectedCategory === 'all') {
            return item.name.toLowerCase().includes(searchQuery.toLowerCase());
        } else {
            return item.name.toLowerCase().includes(searchQuery.toLowerCase()) && item.category === selectedCategory;
        }
    });

    return (
        <div className='shop-category'>
            
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexsort">
                <p>
                    <span><div className="shopcategory-search">
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchQuery} 
                    onChange={handleSearchInputChange} 
                />
            </div></span>
                </p>
                <div className="shopcategory-sort">
                    <label htmlFor="category-select">Category :</label>
                    <select id="category-select" onChange={handleCategoryChange} value={selectedCategory}>
                        <option value="all">All</option>
                        <option value="Laki">Laki</option>
                        <option value="Perempuan">Perempuan</option>
                        <option value="Lainnya">Lainnya</option>
                        {/* Add other options according to your categories */}
                    </select>
                </div>
            </div>
            <div className="shopcategory-products">
                {filteredProducts.map((item, i) => (
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                ))}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
};

export default ShopCategory;
