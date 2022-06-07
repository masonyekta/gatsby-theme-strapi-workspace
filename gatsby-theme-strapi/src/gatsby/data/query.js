module.exports.data = {
	// posts query
	posts: `{
		allStrapiPost {
			nodes {
				title
				slug
			}
		}
	}`,
	// pages query
	pages: `{
		allStrapiPage {
			nodes {
				slug
			}
		}
	}`,
}
