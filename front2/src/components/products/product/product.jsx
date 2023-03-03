import "./product.scss"

import { useNavigate } from 'react-router-dom'

const Product = ({ item }) => {
    const navigate = useNavigate()
    if (!item) return

    const URL = import.meta.env.VITE_STRAPI_TOKEN

    return (
        <div className="product-card" onClick={() => navigate('/product/' + item.id)}>
            <div className="thumbnail">
                <img src={URL + item.attributes.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-details">
                <span className="category-name">{item.attributes.categoryName}</span>
                <span className="name">{item.attributes.title}</span>
                <span className="price">&#8377;{item.attributes.price}</span>
            </div>
        </div>
    )
}

export default Product