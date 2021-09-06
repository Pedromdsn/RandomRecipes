import axios from "axios"
import { GetStaticProps } from "next"
import LeftBody from "../components/Body"
import MainHeader from "../components/Header"
import RightBody from "../components/Mobile"

export default function Home({ food }) {
	return (
		<div
			style={{ background: "linear-gradient(128deg, #424750 33%, #1c1d22 100%)" }}
			className="flex bg-gray-600 h-screen">
			<div className="text-white w-4/5 justify-center xl:w-11/12">
				<MainHeader />
				<LeftBody food={food} />
			</div>
			<div className="w-2/5 flex items-center xl:hidden">
				<RightBody food={food} />
			</div>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const res = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
	const foods = res.data

	const food = foods.meals[0]

	return {
		props: {
			food,
		},
		revalidate: 40,
	}
}

// background: rgb(55,65,81);
// background: linear-gradient(128deg, rgba(55,65,81,1) 33%, rgba(0,0,0,1) 100%);
