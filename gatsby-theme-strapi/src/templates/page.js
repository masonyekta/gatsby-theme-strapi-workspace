import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'

const PageTemplate = ({ data }) => {
	const { Title } = data.strapiPage

	return (
		<Layout>
			<article>Title of the page: {Title}</article>
		</Layout>
	)
}

export const query = graphql`
	query ($slug: String!) {
		strapiPage(Slug: { eq: $slug }) {
			id
			Title
			Slug
		}
	}
`

export default PageTemplate
