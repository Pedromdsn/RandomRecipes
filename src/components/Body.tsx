import Image from "next/image"

export default function LeftBody({ food }) {
	return (
		<div className="px-20 mt-10 md:px-5">
			<div className="flex justify-between relative">
				<div>
					<div className="text-sm text-yellow-600 font-Lexend">Main Foods</div>
					<div className="text-5xl font-bold py-8 font-Standard xl:text-4xl">{food.strMeal}</div>
					<div className="font-Standard font-light mt-5">⭐ ⭐ ⭐ ⭐ ⭐ stars</div>
				</div>
				<div className="items-center absolute -right-20 md:hidden">
					<Image src={food.strMealThumb} width={300} height={300} className="rounded-full"/>
				</div>
			</div>
			<div className="mt-32 md:mt-10 2xl:mt-20">
				<div className="font-Standard font-bold text-2xl">Method</div>
				<div className="h-96 overflow-y-auto mt-10 px-5 flex flex-col gap-10 md:h-52">
					{food.strInstructions.split(". ").map((text, index) => {
						return <Paragraphs text={text} id={index} />
					})}
				</div>
			</div>
		</div>
	)
}

type ParagraphsProps = {
	id: number
	text: string
}

function Paragraphs(props: ParagraphsProps) {
	return (
		<div className="flex items-center">
			<div
				style={{ writingMode: "vertical-rl", textOrientation: "sideways" }}
				className="rotate-180 whitespace-nowrap justify-center px-4 font-Standard font-light text-yellow-500 text-sm">
				Step {props.id + 1}
			</div>
			<div>{props.text}.</div>
		</div>
	)
}
