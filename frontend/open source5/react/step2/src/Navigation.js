import { useEffect } from 'react';
import { gsap } from 'gsap';

function Navigation(){
	useEffect(() => {
		let nav=document.getElementById("nav");
		let depth1Li=nav.firstElementChild.children;

		for(let i=0; i<depth1Li.length; i++){
			depth1Li[i].addEventListener("mouseenter", function(e){
				let link=e.target.firstElementChild;
				link.classList.add("over");

				let sub=e.target.lastElementChild;

				gsap.fromTo(sub, { display: "block", height: 0 }, { height: "auto", duration: 0.3 });
			});

			depth1Li[i].addEventListener("mouseleave", function(e){
				let link=e.target.firstElementChild;
				link.classList.remove("over");

				let sub=e.target.lastElementChild;

				gsap.to(sub, { height: 0, duration: 0.3, onComplete: function(){
					if(sub.hasAttribute("style")){
						sub.removeAttribute("style");
					}
				}});
			});

			depth1Li[i].firstElementChild.addEventListener("focusin", function(e){
				e.target.classList.add("over");

				let sub=e.target.nextElementSibling;
				sub.style.display="block";
			});

			let depth2Li=depth1Li[i].lastElementChild.children;

			for(let j=0; j<depth2Li.length; j++){
				if(j === (depth2Li.length-1)){
					depth2Li[j].firstElementChild.addEventListener("focusout", function(e){
						let link=e.target.parentElement.parentElement.previousElementSibling;
						link.classList.remove("over");

						let sub=e.target.parentElement.parentElement;
						sub.removeAttribute("style");
					});
				}
			}
		}
	});

	return(
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
	);
}

export default Navigation;