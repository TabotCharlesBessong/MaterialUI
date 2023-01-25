import { Html, Head, Main, NextScript } from 'next/document'
import Theme from '../ui/Theme'

export default function Document() {
  return (
		<Html lang="en">
			<Head />
			<head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Raleway:100,400,400i,700|Roboto:300,400,500,700&display=swap"
				/>
			</head>
			<body style={{backgroundColor:'#fff'}} >
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

