import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sub_heading from './common-section/Sub-header';

const Wishlist = () => {
    // This would typically come from a global state management solution like Redux
    const [wishlistItems] = useState([
        {
            id: 'nordic-chair-1',
            name: 'Nordic Chair',
            price: '50.00',
            image: 'images/product-1.png',
            stock: true
        },
        {
            id: 'kruzo-aero-1',
            name: 'Kruzo Aero Chair',
            price: '78.00',
            image: 'images/product-2.png',
            stock: true
        },
        {
            id: 'ergonomic-chair-1',
            name: 'Ergonomic Chair',
            price: '43.00',
            image: 'images/product-3.png',
            stock: false
        }
    ]);

    const removeFromWishlist = (id) => {
        // This would typically update the global state
        console.log(`Removing item ${id} from wishlist`);
    };

    const addToCart = (item) => {
        // This would typically update the global state
        console.log(`Adding item ${item.id} to cart`);
    };

    return (
        <>
            <Sub_heading />
            <div className="untree_co-section wishlist-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wishlist-header text-center mb-5">
                                <h2 className="section-title">My Wishlist</h2>
                                <p className="text-muted">
                                    {wishlistItems.length} items in your wishlist
                                </p>
                            </div>

                            {wishlistItems.length > 0 ? (
                                <div className="row">
                                    {wishlistItems.map((item) => (
                                        <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4">
                                            <div className="wishlist-item card border-0 shadow-sm">
                                                <div className="position-relative">
                                                    <Link to={`/shop/${item.id}`}>
                                                        <img 
                                                            src={item.image} 
                                                            alt={item.name} 
                                                            className="card-img-top p-4"
                                                        />
                                                    </Link>
                                                    <button 
                                                        className="btn-remove"
                                                        title="Remove from wishlist"
                                                        onClick={() => removeFromWishlist(item.id)}
                                                    >
                                                        <i className="fa fa-times"></i>
                                                    </button>
                                                </div>
                                                
                                                <div className="card-body">
                                                    <Link 
                                                        to={`/shop/${item.id}`}
                                                        className="text-decoration-none"
                                                    >
                                                        <h3 className="card-title h5 text-dark">
                                                            {item.name}
                                                        </h3>
                                                    </Link>
                                                    
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <p className="price mb-0">
                                                            <strong>${item.price}</strong>
                                                        </p>
                                                        <span className={`stock-badge ${item.stock ? 'in-stock' : 'out-of-stock'}`}>
                                                            {item.stock ? 'In Stock' : 'Out of Stock'}
                                                        </span>
                                                    </div>
                                                    
                                                    <button 
                                                        className="btn btn-primary w-100"
                                                        disabled={!item.stock}
                                                        onClick={() => addToCart(item)}
                                                    >
                                                        <i className="fa fa-shopping-cart me-2"></i>
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="empty-wishlist text-center py-5">
                                    <i className="fa fa-heart text-muted mb-4" style={{ fontSize: '4rem' }}></i>
                                    <h3>Your wishlist is empty</h3>
                                    <p className="text-muted mb-4">
                                        Browse our shop and add items you love to your wishlist
                                    </p>
                                    <Link to="/shop" className="btn btn-primary">
                                        Continue Shopping
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .wishlist-section {
                    padding: 5rem 0;
                }
                .wishlist-item {
                    transition: all 0.3s ease;
                    border-radius: 15px;
                    overflow: hidden;
                }
                .wishlist-item:hover {
                    transform: translateY(-5px);
                }
                .wishlist-item img {
                    height: 200px;
                    object-fit: contain;
                    transition: transform 0.3s ease;
                }
                .wishlist-item:hover img {
                    transform: scale(1.05);
                }
                .btn-remove {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background: #fff;
                    border: none;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .btn-remove:hover {
                    background: #dc3545;
                    color: #fff;
                }
                .stock-badge {
                    font-size: 0.875rem;
                    padding: 4px 8px;
                    border-radius: 4px;
                }
                .stock-badge.in-stock {
                    background-color: #d4edda;
                    color: #155724;
                }
                .stock-badge.out-of-stock {
                    background-color: #f8d7da;
                    color: #721c24;
                }
                @media (max-width: 768px) {
                    .wishlist-item {
                        margin-bottom: 1.5rem;
                    }
                    .wishlist-item img {
                        height: 180px;
                    }
                }
            `}</style>
        </>
    );
};

export default Wishlist;
