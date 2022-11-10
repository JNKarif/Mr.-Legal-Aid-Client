import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Mr. Legal Aid`;
    }, [title])
}

export default useTitle;