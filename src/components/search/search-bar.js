import './search-bar.css';
import { useForm } from "react-hook-form";

function SearchBar({ allProducts, setSearchResult }) {

    const { register, handleSubmit, getValues } = useForm({ shouldUseNativeValidation: true });

    const onSubmit = async data => {
        searchWord(data.searchWords)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="searchBarContainer">
            <input
                name="searchWords"
                onKeyDown={(e) => {searchWord(e.currentTarget.value)}}
                {...register("searchWords")}
                className="searchBar"
                type="text"
                placeholder="SEARCH"
            />
            <input type="submit" className="submitButton" value={"SEARCH"} />
        </form>
    );

    async function searchWord(word) {
        const normalizedWord = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        if(allProducts) {
            const filteredProducts = allProducts.data
                .filter(
                    p => p.model.toLowerCase().includes(normalizedWord) ||
                        p.brand.toLowerCase().includes(normalizedWord)
                )
            setSearchResult(filteredProducts)
        }
        if (normalizedWord.length === 0 || normalizedWord.length === 1) setSearchResult(allProducts.data)
    }
}

export default SearchBar;
