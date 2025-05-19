import data from "./data";

function Link(){
	let {category}=data;

	return(
		<div className="link_box">
			<ul>
				{/*
				<li><a href="">상품공시실</a></li>
				<li><a href="">서식·약관자료실</a></li>
				<li><a href="">하나소비자세상</a></li>
				<li><a href="">손님의소리</a></li>
				<li><a href="">서민대출</a></li>
				<li><a href="">영업점찾기</a></li>
				*/}

				{
					category.map(d =>
						<li key={d.idx}><a href="">{d.text}</a></li>
					)
				}
			</ul>
		</div>
	);
}

export default Link;