import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b470bd1efc964186b35d2bd771098620'
    }
})