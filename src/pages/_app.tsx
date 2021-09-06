import "tailwindcss/tailwind.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Food Suggestion</title>
				<link rel="icon" sizes="48x48" href="/favicon.png" />
				<meta name="description" content="Minecraft host a um preço super gostoso." />
				<meta name="author" content="Coco Blanco" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@700&family=Lexend+Giga:wght@500&family=Old+Standard+TT:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<link href="https://fonts.googleapis.com/css2?family=Old+Standard+TT&display=swap" rel="stylesheet"/> 
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
