import { gql, useQuery } from '@apollo/client'

export const GET_PRODUCT = gql`
    query Product($urlKey: String!) {
        allProducts(filter: { urlKey: $urlKey }) {
            id
            sku
            name
            price
            stockQuantity
            specialDiscountType
            specialDiscountValue
            specialTaxRate
            shortDescription
            longDescription
            media
            attributeValues
        }
    }
`

export function GetProduct(variables) {
    const { data: { allProducts: [product] = [] } = {} } = useQuery(GET_PRODUCT, { variables })

    if (!product) {
        return null
    }

    return product
}

export default GetProduct
