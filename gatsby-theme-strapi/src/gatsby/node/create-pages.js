const query = require('../data/query')

module.exports = async ({ graphql, actions }) => {
	const { createPage } = actions

	const pageTemplate = require.resolve(`../../templates/page.js`)
	const postTemplate = require.resolve(`../../templates/post.js`)

	// Create a single page for each "page"
	const pagesQuery = await graphql(query.data.pages)
	const pages = pagesQuery.data.allStrapiPage.nodes
	pages.forEach((page) => {
		createPage({
			path: `/${page.slug}/`,
			component: pageTemplate,
			context: {
				slug: page.slug,
			},
		})
	})

	// Create a sinlge post for each "post"
	const postsQuery = await graphql(query.data.posts)
	const posts = postsQuery.data.allStrapiPost.nodes
	posts.forEach((post) => {
		createPage({
			path: `/article/${post.slug}/`,
			component: postTemplate,
			context: {
				slug: post.slug,
			},
		})
	})
}
