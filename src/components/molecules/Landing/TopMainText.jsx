import styles from "../../../styles/components/molecules/Landing/TopMainText.module.scss"

export default function TopMainText() {
    return(
        <>
            <span className={ styles.topMainTextCreate }>INFORMATION</span>
            <span className={ styles.topMainTextTitle }>About Us</span>
            <span className={ styles.topMainTextInformation }>
                Ciwin Zoo is an official website to learn more about animals that existed in this world.
                We give you the right information about animals literally, that you may needed right now.
                Our main motto is 3L { "(Learn, Let's Play, Literal)" }.
            </span>
        </>
    )
}