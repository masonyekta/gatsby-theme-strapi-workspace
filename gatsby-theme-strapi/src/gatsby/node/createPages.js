const query = require('../data/query')

module.exports = async ({ graphql, actions }) => {
	const { createPage } = actions

	const pageTemplate = require.resolve(`../../templates/page.js`)

	// Create a page for each "page"
	const pagesQuery = await graphql(query.data.pages)
	const pages = pagesQuery.data.allStrapiPage.edges
	pages.forEach((page, i) => {
		createPage({
			path: `/${page.node.Slug}/`,
			component: pageTemplate,
			context: {
				slug: page.node.Slug,
			},
		})
	})
}
