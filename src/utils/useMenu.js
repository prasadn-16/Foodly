import { useEffect, useState } from 'react'
import { MENU_API } from '../utils/constants'
const useMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async function () {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data)
    }

    return resInfo;

}
export default useMenu;