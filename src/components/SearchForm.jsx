import Wrapper from "../assets/wrappers/SearchForm"
import {Form, useNavigation} from "react-router-dom"

const SearchForm = ({search}) => {
    const navigation = useNavigation()
    const isSearching = navigation.state === "submitting"
    return (
        <Wrapper>
            <Form className="form">
                <input
                    className="form-input"
                    type="search"
                    name="search"
                    id="search"
                    defaultValue={search}
                />
                <button className="btn" type="submit" disabled={isSearching}>
                    {isSearching ? "searching" : "search"}
                </button>
            </Form>
        </Wrapper>
    )
}
export default SearchForm
