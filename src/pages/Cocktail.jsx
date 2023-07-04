import axios from "axios"
import {useLoaderData, Link, Navigate} from "react-router-dom"
import Wrapper from "../assets/wrappers/CocktailPage"
import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query"

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const singleCocktailQuery = (id) => {
    return {
        queryKey: ["drink", id],
        queryFn: async () => {
            const {data} = await axios.get(`${url}${id}`)
            return data
        },
    }
}

export const loader =
    (queryClient) =>
    async ({params}) => {
        const {id} = params
        await queryClient.ensureQueryData(singleCocktailQuery(id))
        return {id}
    }

const Cocktail = () => {
    const {id} = useLoaderData()
    const {data} = useQuery(singleCocktailQuery(id))

    if (!data) return <Navigate to="/" />
    const drink = data.drinks[0]

    const {
        strAlcoholic,
        strCategory,
        strDrink,
        strDrinkThumb,
        strGlass,
        strInstructions,
    } = drink

    const ingredients = Object.keys(drink).filter(
        (key) => key.startsWith("strIngredient") && drink[key] !== null
    )

    return (
        <Wrapper>
            <div>
                <header>
                    <Link to="/" className="btn">
                        Back Home
                    </Link>
                    <h3>{strDrink}</h3>
                </header>
                <div className="drink">
                    <img src={strDrinkThumb} alt={strDrink} className="img" />
                    <div className="drink-info">
                        <p>
                            <span className="drink-data">Name: </span>
                            {strDrink}
                        </p>
                        <p>
                            <span className="drink-data">Category: </span>
                            {strCategory}
                        </p>
                        <p>
                            <span className="drink-data">Info: </span>
                            {strAlcoholic}
                        </p>
                        <p>
                            <span className="drink-data">Glass: </span>
                            {strGlass}
                        </p>
                        <p>
                            <span className="drink-data">Ingredients: </span>
                            {ingredients.map((ingredient, index) => {
                                return (
                                    <span className="ing" key={ingredient}>
                                        {drink[ingredient]}
                                        {index < ingredients.length - 1
                                            ? ","
                                            : ""}
                                    </span>
                                )
                            })}
                        </p>
                        <p>
                            <span className="drink-data">Instructions: </span>
                            {strInstructions}
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
export default Cocktail
