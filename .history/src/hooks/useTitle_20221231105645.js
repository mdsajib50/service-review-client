import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}-Therapy`
    },[title])
}
export default useTitle;