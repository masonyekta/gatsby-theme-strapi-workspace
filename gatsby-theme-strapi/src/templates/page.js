import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'

const PageTemplate = ({ data }) => {
	const { title } = data.strapiPage

	return (
		<Layout>
			<article>Title of the page: {title}</article>
		</Layout>
	)
}

export const query = graphql`
	query ($slug: String!) {
		strapiPage(slug: { eq: $slug }) {
			id
			title
			slug
		}
	}
`

export default PageTemplate
