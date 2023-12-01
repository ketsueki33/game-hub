import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c81ff3be60d84b3a8645a65880977a0b",
    },
});
