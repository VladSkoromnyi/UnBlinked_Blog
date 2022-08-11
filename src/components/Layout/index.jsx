import { Footer } from "../Footer"
import { Logo } from "../Logo"
import { Navigation } from "../Navigation"
import { PageTitle } from "../PageTitle"

export const Layout = ({ children }) => {
	return (
		<>
			<Logo />

			<div className="wrapper">
				<Navigation />
				<PageTitle />

				{children}
			</div>

			<Footer />
		</>
	)
}
