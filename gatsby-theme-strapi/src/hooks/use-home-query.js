import { useStaticQuery, graphql } from 'gatsby'
// export home page data
export const useHomeQuery = () => {
	const homeData = useStaticQuery(
		graphql`
			query homeData {
				strapiPage(slug: { eq: "home" }) {
					id
					title
					slug
				}
			}
		`
	)
	return homeData.strapiPage
}
