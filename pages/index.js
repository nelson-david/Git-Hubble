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