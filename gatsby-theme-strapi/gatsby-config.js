require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	plugins: [
		'gatsby-plugin-gatsby-cloud',
		{
			resolve: 'gatsby-source-strapi',
			options: {
				apiURL: process.env.STRAPI_API_URL,
				accessToken: process.env.STRAPI_TOKEN,
				collectionTypes: [
					{
						singularName: 'post',
					},
					{
						singularName: 'page',
					},
					{
						singularName: 'author',
					},
					{
						singularName: 'category',
					},
					{
						singularName: 'tag',
					},
				],
				singleTypes: [
					{
						singularName: 'global',
						queryParams: {
							populate: {
								favicon: '*',
								defaultSeo: {
									populate: '*',
								},
							},
						},
					},
				],
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-transformer-remark',
		'gatsby-plugin-postcss',
	],
}
