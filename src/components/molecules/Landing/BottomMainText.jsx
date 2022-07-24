import styles from "../../../styles/components/molecules/Landing/BottomMainText.module.scss"

export default function BottomMainText() {
    return(
        <>
            <span className={ styles.bottomMainTextCreate }>ANSWER</span>
            <span className={ styles.bottomMainTitle }>Why us?</span>
            <span className={ styles.bottomMainInformation }>
                We'll give you 3 main reason, why we're the best at this job.
                You'll find them soon enough on below!
            </span>
        </>
    )
}