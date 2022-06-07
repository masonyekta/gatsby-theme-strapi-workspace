import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'

const TagTemplate = ({ data }) => {
	const { title } = data.strapiTag

	return (
		<Layout>
			<article>Title of the tag: {title}</article>
		</Layout>
	)
}

export const query = graphql`
	query ($slug: String!) {
		strapiTag(slug: { eq: $slug }) {
			id
			title
			slug
		}
	}
`

export default TagTemplate
