import { BURGUER } from "../icons"

export default function MainHeader() {
	return (
		<div className="flex justify-between h-20 items-center pl-20 md:px-10">
			<div>{BURGUER}</div>
			<div className="text-3xl font-bold font-Kaisei md:hidden">Recipes</div>
			<div className="w-1/2 md:w-2/3">
				<input
					type="text"
					placeholder="Search recipes"
					className="bg-gray-500 text-gray-700 rounded px-5 py-2 outline-none text-lg w-full placeholder-gray-700"
				/>
			</div>
		</div>
	)
}
