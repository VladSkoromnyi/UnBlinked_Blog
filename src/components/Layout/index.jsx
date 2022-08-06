import { Footer } from "../Footer"
import { Logo } from "../Logo"
import { Navigation } from "../Navigation"

export const Layout = ({ children }) => {
	return (
		<>
			<Logo />

			<div className="wrapper">
				<Navigation />

				{children}
			</div>

			<Footer />
		</>
	)
}
