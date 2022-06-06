import React from 'react'
import Footer from '../footer/footer'
import Navbar from '../header/navbar'

const Layout = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
			<div>
				<Navbar />
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout
