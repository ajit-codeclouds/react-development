import {Link} from 'react-router-dom';

const Sub_heading = () =>{
    const pathName = window.location.pathname;
    const path = pathName.split("/");
    const pageName = path[path.length - 1];

    return (
        <>
        <div className="hero">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-5">
						<div className="intro-excerpt">
							<h1>{pageName}</h1>
							<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
							<p><Link to="shop"className="btn btn-secondary me-2">Shop Now</Link>
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
        </>
    )
}
export default Sub_heading;