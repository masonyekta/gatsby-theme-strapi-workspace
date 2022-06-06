import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'

const PageTemplate = ({ data }) => {
	const { title } = data.strapiPage

	return (
		<Layout>
			<article>{title}</article>
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
