const query = require('../data/query')

module.exports = async ({ graphql, actions }) => {
	const { createPage } = actions

	const pageTemplate = require.resolve(`../../templates/page.js`)
	const postTemplate = require.resolve(`../../templates/post.js`)
	const tagTemplate = require.resolve(`../../templates/tag.js`)
	const categoryTemplate = require.resolve(`../../templates/category.js`)
	const authorTemplate = require.resolve(`../../templates/author.js`)

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

	// Create a single post page for each "post"
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

	// Create a single tag page for each "tag"
	const tagsQuery = await graphql(query.data.tags)
	const tags = tagsQuery.data.allStrapiTag.nodes
	tags.forEach((tag) => {
		createPage({
			path: `/tag/${tag.slug}/`,
			component: tagTemplate,
			context: {
				slug: tag.slug,
			},
		})
	})

	// Create a single category page for each "category"
	const categoriesQuery = await graphql(query.data.categories)
	const categories = categoriesQuery.data.allStrapiCategory.nodes
	categories.forEach((category) => {
		createPage({
			path: `/category/${category.slug}/`,
			component: categoryTemplate,
			context: {
				slug: category.slug,
			},
		})
	})

	// Create a single author page for each "author"
	const authorsQuery = await graphql(query.data.authors)
	const authors = authorsQuery.data.allStrapiAuthor.nodes
	authors.forEach((author) => {
		createPage({
			path: `/author/${author.slug}/`,
			component: authorTemplate,
			context: {
				slug: author.slug,
			},
		})
	})
}
