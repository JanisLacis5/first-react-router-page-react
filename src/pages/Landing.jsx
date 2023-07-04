import axios from "axios"
import {useLoaderData} from "react-router-dom"
import CocktailList from "../components/Cocktaillist"
import SearchForm from "../components/SearchForm"
import {QueryClient, useQuery} from "@tanstack/react-query"

const cocktailsUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const searchCocktailsQuery = (searchTerm) => {
    return {
        queryKey: ["search", searchTerm || "all"],
        queryFn: async () => {
            const res = await axios.get(`${cocktailsUrl}${searchTerm}`)
            return res.data.drinks
        },
    }
}

export const loader =
    (queryClient) =>
    async ({request}) => {
        const url = new URL(request.url)
        const searchTerm = url.searchParams.get("search") || ""
        await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))
        return {searchTerm}
    }

const Landing = () => {
    const {searchTerm} = useLoaderData()
    const {data: drinks} = useQuery(searchCocktailsQuery(searchTerm))
    return (
        <div>
            <SearchForm search={searchTerm} />
            <CocktailList drinks={drinks} />
        </div>
    )
}
export default Landing
