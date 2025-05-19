import './css/style.css';

function App(){
	return(
		<>
			<h1 className="title">basic :: Frontend Coding Test</h1>
			<div className="container">
				<nav id="nav">
					<ul>
						<li>
							<a href="">main1</a>
							<ul className="sub">
								<li><a href="">sub11</a></li>
								<li><a href="">sub12</a></li>
								<li><a href="">sub13</a></li>
								<li><a href="">sub14</a></li>
								<li><a href="">sub15</a></li>
							</ul>
						</li>
						<li>
							<a href="">main2</a>
							<ul className="sub">
								<li><a href="">sub21</a></li>
								<li><a href="">sub22</a></li>
								<li><a href="">sub23</a></li>
							</ul>
						</li>
						<li>
							<a href="">main3</a>
							<ul className="sub">
								<li><a href="">sub31</a></li>
								<li><a href="">sub32</a></li>
								<li><a href="">sub33</a></li>
								<li><a href="">sub34</a></li>
								<li><a href="">sub35</a></li>
							</ul>
						</li>
						<li>
							<a href="">main4</a>
							<ul className="sub">
								<li><a href="">sub41</a></li>
								<li><a href="">sub42</a></li>
								<li><a href="">sub43</a></li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}

export default App;