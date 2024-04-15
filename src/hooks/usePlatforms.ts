import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatForms = () => useData<Platform>('/platforms')

export default usePlatForms;