import React from "react";
import Layout from "../components/layout";
import Headings from "../components/headings";
import Seo from "../components/seo";

const NotFoundPage = () => {
	const seo = {
		metaTitle: "Error 404 - Not Found",
		metaDescription: "The page you are looking for does not exist.",
	};

	return (
		<Layout>
			<Seo seo={seo} />
			<Headings title="Not Found" />
		</Layout>
	);
};

export default NotFoundPage;
