import Checkbox from "react-custom-checkbox"
import { FiCheck } from "react-icons/fi"
import { BiTimeFive } from "react-icons/bi"
import { BsLightning } from "react-icons/bs"
import { RiMedalLine } from "react-icons/ri"
import { IconType } from "react-icons/lib"

export default function RightBody({ food }) {
	return (
		<div style={{ height: "85vh" }} className="bg-white rounded-3xl w-2/3 mx-auto p-14 py-20">
			<div className="mb-10 flex gap-5 flex-col">
				<TopMobile text="20 minutes" icon={BiTimeFive} />
				<TopMobile text="630 Calories" icon={BsLightning} />
				<TopMobile text="Beginner" icon={RiMedalLine} />
			</div>
			<div>
				<div className="font-Kaisei font-bold text-4xl">Ingredientes</div>
				<div
					style={{ scrollbarColor: "#F59E0B #444" }}
					className="p-3 flex flex-col gap-3 mt-5 overflow-y-auto 2xl:h-64">
					{Object.values(filterFromIngredientes(food) as string[])
						.filter((e) => e != "")
						.map((e, i) => {
							if (i >= 13) return
							return <Ingredientes text={e} key={i} />
						})}
				</div>
			</div>
		</div>
	)
}

type IngredientesProps = {
	text: string
}

function Ingredientes(props: IngredientesProps) {
	return (
		<div className="flex gap-3 items-center">
			<Checkbox
				icon={
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flex: 1,
							backgroundColor: "#ffb560",
							alignSelf: "stretch",
						}}>
						<FiCheck color="white" size={15} />
					</div>
				}
				borderColor="#aaa"
				// borderWidth={0}
				borderRadius={20}
				style={{ overflow: "hidden" }}
				size={23}
			/>
			<div>{props.text}</div>
		</div>
	)
}

function filterFromIngredientes(teste) {
	return Object.keys(teste)
		.filter((key) => key.startsWith("strIngredient"))
		.reduce((obj, key) => {
			obj[key] = teste[key]
			return obj
		}, {})
}

type TopMobileProps = {
	icon: IconType
	text: string
}

function TopMobile(props: TopMobileProps) {
	return (
		<div className="flex items-center gap-3 font-Lexend2">
			<props.icon className="text-gray-500 text-2xl" />
			<div>{props.text}</div>
		</div>
	)
}
