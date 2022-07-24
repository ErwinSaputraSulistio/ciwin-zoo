import styles from "../../../styles/components/templates/Landing/Header.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    return(
        <header className={ styles.headerContainer }>
            <FontAwesomeIcon className={ styles.headerArrow } icon={ faAngleLeft }/>
            <div className={ styles.headerMain }>
                <div className={ styles.headerBanner }>
                    <div className={ styles.headerText }>
                        <span className={ styles.headerTitle }>
                            Lorem Ipsum Dolor Sir Amet, Consectetur
                        </span>
                        <span className={ styles.headerInformation }>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </span>
                    </div>
                    <img
                        alt="headerImage"
                        className={ styles.headerImage }
                        src="/assets/headerImage.png"
                    />
                </div>
                <div className={ styles.headerDot }>
                    <span className={ styles.headerDotClicked }/>
                    <span className={ styles.headerDotUnclicked }/>
                    <span className={ styles.headerDotUnclicked }/>
                </div>
            </div>
            <FontAwesomeIcon className={ styles.headerArrow } icon={ faAngleRight }/>
        </header>
    )
}