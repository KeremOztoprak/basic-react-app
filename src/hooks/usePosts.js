import useFetch from "./useFetch";

export default function usePosts({ id }) {
    const { veri: blog, yukleniyor, hata } = useFetch('http://localhost:8000/yazilar/' + id);

    return (
        { blog, yukleniyor, hata }
    )
}
