import { gql, useQuery } from '@apollo/client'

export const SEARCH = gql`
    query Search(
        $categoryUrlKey: String,
        $search: String,
        $priceMin: Float,
        $priceMax: Float,
        $attributeValues: [AttributeValue],
        $page: Int,
        $perPage: Int,
        $sort: String
    ) {
        search(
            categoryUrlKey: $categoryUrlKey,
            search: $search,
            priceMin: $priceMin,
            priceMax: $priceMax,
            attributeValues: $attributeValues,
            page: $page,
            perPage: $perPage,
            sort: $sort
        ) {
            category: Category {
                id
                name
                content
            }
            products: Products {
                id
                urlKey
                sku
                name
                price
                stockQuantity
                specialDiscountType
                specialDiscountValue
                specialTaxRate
                media
            }
            attribute: Attributes {
                id
            }
        }
    }
`

export function Search(variables) {
    const { loading, error, data: { search } = {} } = useQuery(SEARCH, { variables })

    if (loading || error) {
        return null
    }

    return search
}
