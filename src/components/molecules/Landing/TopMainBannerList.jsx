import styles from "../../../styles/components/molecules/Landing/TopMainBannerList.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencil, faShareAlt, faChartPie } from "@fortawesome/free-solid-svg-icons"
import { TopMainBanner } from "../../atoms/Landing"

export default function TopMainBannerList() {
    return(
        <div className={ styles.topMainBannerList }>
            <TopMainBanner
                title="Learn"
                info="Improve your knowledge with us, you'll be smarter in all thing about animals soon enough. Interested? Start your study journey with us now!"
                img="/assets/topBannerOne.png"
                logo={ <FontAwesomeIcon className={ styles.topMainBannerIcon } icon={ faPencil }/> }
            />
            <TopMainBanner
                title="Let's Play"
                info="Our target is to give you a pack of lessons also with happiness inside. Study will be boring without some fun, so let's play while learning! We have a Quiz that will show a random animal, then you'll try to guess what animal it is."
                img="/assets/topBannerTwo.png"
                logo={ <FontAwesomeIcon className={ styles.topMainBannerIcon } icon={ faShareAlt }/> }
            />
            <TopMainBanner
                title="Literal"
                info="Even the professionals are shocked with our accurate and perfect animal data! We have the researcher team that spent most of their lives to analyze and study about animals. Learn from the guaranteed source, don't believe informations from unknown sources."
                img="/assets/topBannerThree.png"
                logo={ <FontAwesomeIcon className={ styles.topMainBannerIcon } icon={ faChartPie }/> }
            />
        </div>
    )
}