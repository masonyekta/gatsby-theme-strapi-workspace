# Setting

General settings for the website

```graphql
query settingInformation {
	strapiSetting {
		siteName
		siteUrl
		siteDescription
		socialLinks {
			socialTitle
			socialAccountName
		}
	}
}
```
