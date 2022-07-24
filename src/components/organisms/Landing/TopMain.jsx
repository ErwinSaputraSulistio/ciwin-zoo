import style from "../../../styles/components/organisms/Landing/TopMain.module.scss"
import { TopMainText, TopMainBannerList } from "../../molecules/Landing"

export default function TopMain() {
    return(
        <div className={ style.topMain }>
            <TopMainText/>
            <TopMainBannerList/>
        </div>
    )
}