import styles from "../../../styles/components/templates/Landing/Main.module.scss"
import { TopMain, BottomMain } from "../../organisms/Landing"

export default function Main() {
    return(
        <main className={ styles.mainContainer }>
            <TopMain/>
            <BottomMain/>
        </main>
    )
}