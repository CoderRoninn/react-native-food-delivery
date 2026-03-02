import { client } from './sanity'

// A helper function to fetch data from Sanity
let sanityQuery = (query, params) => client.fetch(query, params);

// Fetches all featured restaurant lists with full details
export const getFeaturedRestaurants = () => {
    return sanityQuery(`
        *[_type=='featured']{
            ...,
            restaurants[]->{
                ...,
                dishes[]->{
                    ...
                },
                type->{
                    name
                }
            }
        }
    `)
}

// Fetches all food categories
export const getCategories = () => {
    return sanityQuery(`*[_type=='category']`)
}

// Fetches a specific featured list by its unique ID
export const getFeaturedRestaurantById = id => {
    return sanityQuery(`
        *[_type == 'featured' && _id == $id] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type->{
                    name
                }
            }
        }[0]
    `, { id })
}
