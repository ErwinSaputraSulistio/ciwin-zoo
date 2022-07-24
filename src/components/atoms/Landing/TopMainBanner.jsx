import styles from "../../../styles/components/atoms/Landing/TopMainBanner.module.scss"

export default function TopMainBanner({ img, logo, title, info }) {
    return(
        <div className={ styles.topMainBanner }>
            <img alt="topBanner" className={ styles.topMainBannerImage } src={ img }/>
            <div className={ styles.topMainBannerText }>
                <div className={ styles.topMainBannerLogo }>{ logo }</div>
                <span className={ styles.topMainBannerTitle }>{ title }</span>
                <span className={ styles.topMainBannerInformation }>{ info }</span>
            </div>
        </div>
    )
}