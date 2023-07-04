import CocktailCard from "./CocktailCard"
import Wrapper from "../assets/wrappers/CocktailList"

const CocktailList = ({drinks}) => {
    if (!drinks) {
        return <h2>No cocktails found</h2>
    }
    return (
        <Wrapper>
            {drinks.map((drink) => {
                return <CocktailCard key={drink.idDrink} {...drink} />
            })}
        </Wrapper>
    )
}
export default CocktailList
