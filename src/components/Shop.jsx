import Sub_heading from './common-section/Sub-header';
import { Link } from 'react-router-dom';

const Shop = () =>{
    return (
       <>
				<Sub_heading/>
		

		<div className="untree_co-section product-section before-footer-section">
		    <div className="container">
		      	<div className="row">

					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<Link className="product-item" to="/shop/nordic-chair-1">
							<img src="images/product-3.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</Link>
					</div> 
					
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<Link className="product-item" to="/shop/nordic-chair-2">
							<img src="images/product-1.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</Link>
					</div> 
					
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<Link className="product-item" to="/shop/kruzo-aero-1">
							<img src="images/product-2.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Kruzo Aero Chair</h3>
							<strong className="product-price">$78.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</Link>
					</div>
					
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<Link className="product-item" to="/shop/ergonomic-chair-1">
							<img src="images/product-3.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</Link>
					</div>
					
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<Link className="product-item" to="/shop/nordic-chair-3">
							<img src="images/product-3.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</Link>
					</div> 
					
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<Link className="product-item" to="/shop/nordic-chair-4">
							<img src="images/product-1.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</Link>
					</div> 
					
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<Link className="product-item" to="/shop/kruzo-aero-2">
							<img src="images/product-2.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Kruzo Aero Chair</h3>
							<strong className="product-price">$78.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</Link>
					</div>
					
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<Link className="product-item" to="/shop/ergonomic-chair-2">
							<img src="images/product-3.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</Link>
					</div>					

		      	</div>
		    </div>
		</div>
       </>
    )
}
export default Shop;

