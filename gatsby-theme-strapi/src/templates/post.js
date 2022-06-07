import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'

const PostTemplate = ({ data }) => {
	const { title } = data.strapiPost

	return (
		<Layout>
			<article>Title of the post: {title}</article>
		</Layout>
	)
}

export const query = graphql`
	query ($slug: String!) {
		strapiPost(slug: { eq: $slug }) {
			id
			title
			slug
		}
	}
`

export default PostTemplate
