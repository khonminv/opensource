import data from "./data";

function News(){
	let {news}=data;

	return(
		<div className="news_list">
			<ul>
				{/*
				<li>
					<a href="">코로나19 관련 일부 영업점 중단 및 영업시간 변경 안내</a>
					<span>2021-11-15</span>
				</li>
				<li>
					<a href="">10월 26일, 주요기능을 중심으로 인터넷뱅킹이 새단장합니다!</a>
					<span>2021-10-20</span>
				</li>
				<li>
					<a href="">영업점 통폐합 일정안내(2021.10.25)</a>
					<span>2021-07-23</span>
				</li>
				*/}

				{
					news.map(d =>
						<li key={d.idx}>
							<a href="">{d.text}</a>
							<span>{d.date}</span>
						</li>
					)
				}
			</ul>
		</div>
	);
}

export default News;