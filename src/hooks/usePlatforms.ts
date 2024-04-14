import platforms from "../data/platforms";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatForms = () => ({data: platforms, error: null})

export default usePlatForms;