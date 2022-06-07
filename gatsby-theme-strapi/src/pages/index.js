import React from 'react'
import Layout from '../components/layout/layout'
import { useHomeQuery } from '../hooks/use-home-query'

const HomePage = () => {
	// get the data specifc for the home page
	const { title } = useHomeQuery()

	return (
		<Layout>
			<article>Title of the post: {title}</article>
		</Layout>
	)
}

export default HomePage
