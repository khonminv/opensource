import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import data from './data';
import './css/style.css';

function App(){
	let [count, setState]=useState(0);

	// let outArray=Array.from([1, 2, 3], (item, i) => item+item);

	// console.log(outArray); // [2, 4, 6]

	useEffect(() => {
		let controlList=document.querySelectorAll(".controller ul li");

		controlList[count].classList.add("on");

		controlList.forEach(function(item1, i){
			item1.addEventListener("click", function(e){
				e.preventDefault();

				if(i === count) return;

				setState(i);

				controlList.forEach(function(item2, j){
					if(j === i){
						controlList[j].classList.add("on");
					}
					else{
						controlList[j].classList.remove("on");
					}
				})
			});
		});
	});

	return(
		<div className="container">
			<div className="title">
				<h2>슬로우에이징을 위한 뷰티템 : 레티놀편</h2>
			</div>
			<div className="product">
				<ul>
					{
						data.map((d, i) => {
							if(i < (count+1)*4 && i >= count*4){ // 0, 1, 2, 3 / 4, 5, 6, 7
								return(
									<ProductList key={i+1} propsValue={d} />
								);
							}
						})
					}
				</ul>
			</div>
			<div className="controller">
				<ul>
					{/*
					<li><a href="">1</a></li>
					<li><a href="">2</a></li>
					*/}

					{
						Array.from({ length: Math.ceil(data.length/4) }, (item, i) => (
							<li key={i+1}><a href="">{i+1}</a></li>
						))
					}
				</ul>
			</div>
		</div>
	);
}

export default App;