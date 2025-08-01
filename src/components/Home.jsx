import Crafted_with_excellent from './common-section/Crafted-with-excellent';
import Testimonials from './common-section/Testimonials';
import Why_choose_us from './common-section/Why-choose-us';
import Recent_blog from './common-section/Recent-blog';
import {Link} from 'react-router-dom';
const Home = () =>{
    return (
        <>			
			
		<div className="hero">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-5">
						<div className="intro-excerpt">
							<h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
							<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
							<p><Link to="shop" className="btn btn-secondary me-2">Shop Now</Link>
							<Link to="shop" className="btn btn-white-outline">Explore</Link></p>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="hero-img-wrap">
							<img src="images/couch.png" className="img-fluid"/>
						</div>
					</div>
				</div>
			</div>
		</div>
				
		<Crafted_with_excellent />

		<Why_choose_us/>
		
		<div className="we-help-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-7 mb-5 mb-lg-0">
						<div className="imgs-grid">
							<div className="grid grid-1"><img src="images/img-grid-1.jpg" alt="Untree.co"/></div>
							<div className="grid grid-2"><img src="images/img-grid-2.jpg" alt="Untree.co"/></div>
							<div className="grid grid-3"><img src="images/img-grid-3.jpg" alt="Untree.co"/></div>
						</div>
					</div>
					<div className="col-lg-5 ps-lg-5">
						<h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
						<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

						<ul className="list-unstyled custom-list my-4">
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
						</ul>
						<p><Link to="shop" className="btn">Explore</Link></p>
					</div>
				</div>
			</div>
		</div>
		
		<div className="popular-product">
			<div className="container">
				<div className="row">

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="images/product-1.png" alt="Image" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Nordic Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><a href="#">Read More</a></p>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="images/product-2.png" alt="Image" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Kruzo Aero Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><a href="#">Read More</a></p>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="images/product-3.png" alt="Image" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Ergonomic Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><a href="#">Read More</a></p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		
		<Testimonials/>
		
		<Recent_blog />
        </>
    )
}
export default Home;