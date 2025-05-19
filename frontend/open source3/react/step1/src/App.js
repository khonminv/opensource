import ProductList from './ProductList';
import './css/style.css';

function App(){
	return(
		<div className="container">
			<div className="title">
				<h2>슬로우에이징을 위한 뷰티템 : 레티놀편</h2>
			</div>
			<div className="product">
				<ul>
					<ProductList />
					<ProductList />
					<ProductList />
					<ProductList />
				</ul>
			</div>
			<div className="controller">
				<ul>
					<li><a href="">1</a></li>
					<li><a href="">2</a></li>
				</ul>
			</div>
		</div>
	);
}

export default App;