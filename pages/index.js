import Header from "../layout/Header";
import Page from "../layout/Page";
import Script from 'next/script';
import { Suspense, useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import AppLoader from "../utils/appLoader";

const LandingPage = dynamic(() => import('../components/page/LandingPage'), {
	suspense: true,
})

const Home = () => {

	const [loading, setLoading] = useState(true);

    useEffect(() => {
		setTimeout(function(){
			setLoading(false);
		}, 1000)

        if (window.location.hash){
            document.getElementById(`${window.location.hash.split("#")[1]}`).scrollIntoView()
        }

		const accentColors = ["#A770EF", "#4ecdc4", "#2980b9",
			"#f8b500", "#f46b45", "#ba8b02", "#00bf8f", "#b993d6",
			"#3a7bd5", "#50c9c3", "#007991", "#f8ffae", "#ec6ead",
			"#c0c0aa", "#4568DC", "#6190E8", "#F7971E", "#E44D26",
			"#E100FF", "#7303c0", "#6D6027", "#96c93d", "#a17fe0",
			"#FF416C", "#8360c3"
		]
		
		function changeColor(){
			setInterval(function(){
				let selectedColor = accentColors[Math.floor(Math.random() * accentColors.length)];
				document.documentElement.style.setProperty('--accent-color', selectedColor);
				document.documentElement.style.setProperty('--accent-transparent', `${selectedColor}33`);
			}, 1500);
		}
		changeColor();
    }, [])

	return (
		<>
			<Header />
			<Suspense fallback={<AppLoader />}>
				{loading&&(<AppLoader />)}
				<Page>
					<LandingPage />
				</Page>
			</Suspense>
		</>
	)
}

export default Home;