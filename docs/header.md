# Header

## Header Menu Items

Header menu items can be queried like this:

```graphql
query headerInformation {
	strapiHeader {
		menuItems {
			id
			title
			url
			newTab
		}
	}
}
```
