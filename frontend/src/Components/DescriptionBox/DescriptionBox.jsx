import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dicta veniam, doloremque labore numquam suscipit tempora maiores laudantium nesciunt molestiae aperiam fugit repellendus, placeat repudiandae ipsum quae totam rem fuga.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat earum quibusdam possimus sequi adipisci quos molestiae odio ut nobis? Quod quo magnam quos sit soluta delectus omnis natus laboriosam possimus.</p>
            </div>
        </div>
    );
};

export default DescriptionBox;