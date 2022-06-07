import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'

const AuthorTemplate = ({ data }) => {
	const { title } = data.strapiAuthor

	return (
		<Layout>
			<article>Title of the author: {title}</article>
		</Layout>
	)
}

export const query = graphql`
	query ($slug: String!) {
		strapiAuthor(slug: { eq: $slug }) {
			id
			title
			slug
		}
	}
`

export default AuthorTemplate
