import { useParams } from 'react-router-dom';
import Sub_heading from './common-section/Sub-header';
import { useState } from 'react';

const ProductDetail = () => {
    useParams();
    const [quantity, setQuantity] = useState(1);

    const product = {
        name: "Nordic Chair",
        price: "50.00",
        description: "Donec vitae odio quis nisl dapibus malesuada.",
        image: "images/product-3.png",
        features: [
            "Premium quality materials",
            "Modern ergonomic design",
            "Durable construction",
            "Easy maintenance"
        ],
        specifications: [
            { label: "Material", value: "Premium Fabric" },
            { label: "Weight", value: "12 kg" },
            { label: "Dimensions", value: "24\" x 28\" x 35\"" },
            { label: "Color", value: "Forest Green" }
        ]
    };

    const handleQuantity = (action) => {
        if (action === 'decrease' && quantity > 1) {
            setQuantity(prev => prev - 1);
        } else if (action === 'increase') {
            setQuantity(prev => prev + 1);
        }
    };

    return (
        <>
            <Sub_heading />
            <div className="untree_co-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-5">
                            <div className="product-image-container">
                                <img 
                                    src={`../${product.image}`} 
                                    alt={product.name} 
                                    className="img-fluid rounded product-image"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="product-info">
                                <h2 className="section-title mb-3">{product.name}</h2>
                                
                                <div className="mb-4">
                                    <div className="d-flex align-items-center mb-2">
                                        <p className="h3 price mb-0">$<span>{product.price}</span></p>
                                        <span className="badge bg-success ms-3">In Stock</span>
                                    </div>
                                    <div className="ratings">
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star-half-alt text-warning"></i>
                                        <span className="ms-2 text-muted">(4.5/5)</span>
                                    </div>
                                </div>
                                
                                <div className="mb-4">
                                    <p className="product-description">{product.description}</p>
                                </div>

                                {/* <div className="mb-4">
                                    <h4 className="h5 mb-3">Key Features</h4>
                                    <ul className="list-unstyled feature-list">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="mb-2">
                                                <i className="fa fa-check text-success me-2"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div> */}

                                <div className="mb-4">
                                    <h4 className="h5 mb-3">Specifications</h4>
                                    <div className="specs-table">
                                        {product.specifications.map((spec, index) => (
                                            <div key={index} className="spec-row">
                                                <span className="spec-label">{spec.label}:</span>
                                                <span className="spec-value">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="quantity-section mb-4">
                                    <label className="form-label">Quantity:</label>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="input-group" style={{width: '200px'}}>
                                            <button 
                                                className="btn btn-outline-secondary" 
                                                type="button"
                                                onClick={() => handleQuantity('decrease')}
                                            >−</button>
                                            <input 
                                                type="text" 
                                                className="form-control text-center" 
                                                value={quantity}
                                                readOnly
                                            />
                                            <button 
                                                className="btn btn-outline-secondary" 
                                                type="button"
                                                onClick={() => handleQuantity('increase')}
                                            >+</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-grid gap-2">
                                    <button className="btn btn-primary btn-lg">
                                        <i className="fa fa-shopping-cart me-2"></i>
                                        Add to Cart
                                    </button>
                                    <button className="btn btn-outline-secondary btn-lg">
                                        <i className="fa fa-heart me-2"></i>
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>{`
                .product-image-container {
                    background: #fff;
                    padding: 2rem;
                    border-radius: 10px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                .product-image {
                    max-height: 400px;
                    object-fit: contain;
                }
                .price {
                    color: #3b5d50;
                    font-weight: 600;
                }
                .feature-list li {
                    color: #6a6a6a;
                }
                .specs-table {
                    background: #f8f9fa;
                    border-radius: 8px;
                    padding: 1rem;
                }
                .spec-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.5rem 0;
                    border-bottom: 1px solid #dee2e6;
                }
                .spec-row:last-child {
                    border-bottom: none;
                }
                .spec-label {
                    font-weight: 500;
                    color: #6a6a6a;
                }
                .spec-value {
                    color: #2f2f2f;
                }
                .quantity-section .input-group {
                    max-width: 200px;
                }
                .form-control:focus {
                    box-shadow: none;
                    border-color: #3b5d50;
                }
                .btn-outline-secondary:hover {
                    background-color: #3b5d50;
                    border-color: #3b5d50;
                }
            `}</style>
        </>
    );
};

export default ProductDetail;
