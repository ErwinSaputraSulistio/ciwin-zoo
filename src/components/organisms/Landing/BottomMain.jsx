import styles from "../../../styles/components/organisms/Landing/BottomMain.module.scss"
import { BottomMainText, BottomMainBannerList } from "../../molecules/Landing"

export default function BottomMain() {
    return(
        <div className={ styles.bottomMain }>
            <BottomMainText/>
            <BottomMainBannerList/>
        </div>
    )
}