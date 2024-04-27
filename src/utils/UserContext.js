import { createContext } from 'react'

const UserContext = createContext({
    loggedInUser: "Logged In: Default User"
})

export default UserContext