import data from "./data";

function TableList(){
	return(
		<div className="table_list">
			<form>
				<div className="search">
					<input type="text" placeholder="제목 + 내용" />
					<input type="image" src="/images/btn_search.gif" alt="btn search" />
				</div>
			</form>
			<div className="table">
				<table>
					<thead>
						<tr>
							<th scope="row" className="num">번호</th>
							<th scope="row" className="divide">구분</th>
							<th scope="row" className="title">제목</th>
							<th scope="row" className="date">등록일</th>
						</tr>
					</thead>
					<tbody>
						{
							data.map((d, i) =>
								<TdList key={i+1} category="notice" propsValue={d} />
							)
						}
					</tbody>
				</table>
			</div>
		</div>
	);
}

function TdList(props){
	let {category, propsValue}=props;
	let {num, text, date}=propsValue;

	return(
		<tr>
			<td className="num">{num}</td>
			{
				category === "notice" ?
					<td className="divide"><img src="/images/news_notice_icon.gif" alt="icon" /></td> :
					<td className="divide"></td>
			}
			<td className="title"><a href="">{text}</a></td>
			<td className="date">{date}</td>
		</tr>
	);
}

export default TableList;