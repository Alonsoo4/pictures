import axios from "axios";

const SearchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=QYZUI_k93jZkymIIB3sJ9RDsHyPJTjbyeuhVCP7cbMg'

    const response = await axios.get (url, {
        params: {
            query: term 
        }
    })

    console.log(response)
    return response.data.results
}

export default SearchImages