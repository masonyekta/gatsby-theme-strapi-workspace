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
	// categories query
	categories: `{
		allStrapiCategory {
			nodes {
				slug
			}
		}
	}`,
	// tags query
	tags: `{
		allStrapiTag {
			nodes {
				slug
			}
		}
	}`,
	// authors query
	authors: `{
		allStrapiAuthor {
			nodes {
				slug
			}
		}
	}`,
}
