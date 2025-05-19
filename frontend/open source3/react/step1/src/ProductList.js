function ProductList(){
	return(
		<li>
			<a href="">
				<div className="photo"><img src="/images/product1.jpg" alt="product1" /></div>
				<div className="desc">
					<strong>타나자나</strong>
					<span className="discount">40%</span>
					<span className="dollar">$24</span>
					<span className="won">33,478원</span>
				</div>
			</a>
		</li>
	);
}

export default ProductList;