import Wrapper from "../assets/wrappers/CocktailCard"
import {Link} from "react-router-dom"

const CocktailCard = ({
    strDrinkThumb,
    idDrink,
    strDrink,
    strGlass,
    strAlcoholic,
}) => {
    return (
        <Wrapper>
            <div className="img-container">
                <img src={strDrinkThumb} alt={strDrink} className="img" />
            </div>
            <div className="footer">
                <h4>{strDrink}</h4>
                <h5>{strGlass}</h5>
                <p>{strAlcoholic}</p>
                <Link to={`/cocktail/${idDrink}`} className="btn">
                    Details
                </Link>
            </div>
        </Wrapper>
    )
}
export default CocktailCard
