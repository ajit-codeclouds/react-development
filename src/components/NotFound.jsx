import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
    useEffect(() => {
        // Add a class to body for the special background
        document.body.classList.add('not-found-page');
        
        // Cleanup
        return () => {
            document.body.classList.remove('not-found-page');
        };
    }, []);

    return (
        <div className="page-404">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-8">
                        <div className="error-content">
                            <h1 className="error-title">4<span className="zero bounce">0</span>4</h1>
                            <div className="error-message">
                                <h2>Oops! Page Not Found</h2>
                                <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                            </div>
                            <div className="error-actions mt-4">
                                <Link to="/" className="btn btn-primary me-3">
                                    <i className="fa fa-home me-2"></i>
                                    Back to Home
                                </Link>
                                <Link to="/shop" className="btn btn-outline-primary">
                                    <i className="fa fa-shopping-bag me-2"></i>
                                    Continue Shopping
                                </Link>
                            </div>
                            <div className="furniture-animation">
                                <div className="chair"></div>
                                <div className="shadow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
