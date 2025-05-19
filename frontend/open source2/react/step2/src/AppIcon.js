import data from "./data";

function AppIcon(){
	let {banner}=data;

	return(
		<div className="app_icon">
			<ul>
				{/*
				<li>
					<a href=""><img src="/images/hana_app1.png" alt="hana_app1" /></a>
				</li>
				<li>
					<a href=""><img src="/images/hana_app2.png" alt="hana_app2" /></a>
				</li>
				<li>
					<a href=""><img src="/images/hana_app3.png" alt="hana_app3" /></a>
				</li>
				<li>
					<a href=""><img src="/images/hana_app4.png" alt="hana_app4" /></a>
				</li>
				<li>
					<a href=""><img src="/images/hana_app5.png" alt="hana_app5" /></a>
				</li>
				<li>
					<a href=""><img src="images/hana_app6.png" alt="hana_app6" /></a>
				</li>
				*/}

				{
					banner.map(d =>
						<li key={d.idx}>
							<a href=""><img src={`images/${d.src}`} alt={`hana_app${d.idx+1}`} /></a>
						</li>
					)
				}
			</ul>
		</div>
	);
}

export default AppIcon;