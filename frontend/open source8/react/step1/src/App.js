import ProductBanner from './ProduceBanner';
import data from './data';
import './css/style.css';

function App(){
	return(
		<div className="wrapper">
			<section id="portfolio">
				<div className="inner">
					<div className="title">
						<h3>OUR PORTFOLIO</h3>
					</div>
					<div className="content clearfix">
						<div className="tab_menu">
							<ul>
								<li id="title"><a href="">제목으로 정렬</a></li>
								<li id="date"><a href="">날짜로 정렬</a></li>
							</ul>
						</div>
						<div className="banner">
							<ul>
								{/*
								<ProductBanner />
								<ProductBanner />
								<ProductBanner />
								<ProductBanner />
								<ProductBanner />
								<ProductBanner />
								*/}

								{
									data.map((d, i) =>
										<ProductBanner key={i+1} propsValue={d} />
									)
								}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;