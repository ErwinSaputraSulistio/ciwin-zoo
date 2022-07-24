import axios from "axios"
import { useEffect, useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { animalData } from "../features/animalSlice"
import styles from "../styles/pages/Landing.module.scss"
import { Header, Main } from "../components/templates/Landing"

export default function Landing() {
    const dispatch = useDispatch()
    const animalDataRedux = useSelector((state) => state.animal.animalData)
    const fetchAnimalDataAPI = async() => {
        try {
            const fetchAPI = await axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/10")
            dispatch(animalData(fetchAPI.data))
        }
        catch(err) {
            if(err.name === "AxiosError") { 
                console.log("Failed to connect the server API!") 
            }
            else {
                console.log(err.message)
            }
        }
    }
    useLayoutEffect(() => {
        fetchAnimalDataAPI()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        console.log(animalDataRedux)
    })

    return(
        <main className={ styles.landingContainer }>
            <Header/>
            <Main/>
            {/* <Footer/> */}
        </main>
    )
}