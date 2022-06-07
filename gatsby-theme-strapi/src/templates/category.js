import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'

const CategoryTemplate = ({ data }) => {
	const { title } = data.strapiCategory

	return (
		<Layout>
			<article>Title of the category: {title}</article>
		</Layout>
	)
}

export const query = graphql`
	query ($slug: String!) {
		strapiCategory(slug: { eq: $slug }) {
			id
			title
			slug
		}
	}
`

export default CategoryTemplate
