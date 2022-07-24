import styles from "../../../styles/components/atoms/Landing/BottomMainBanner.module.scss"

export default function BottomMainBanner({ img, firstText, secondText, thirdText, reversed }) {
    return(
        <div className={ styles.bottomMainBanner }>
            <img
                alt="bottomBanner"
                className={ styles.bottomMainBannerImage } 
                src={ img }
                style={ reversed === true ? { order: 2 } : null }
            />
            <div className={ styles.bottomMainBannerText }>
                <span className={ styles.bottomMainBannerFirstText }>{ firstText }</span>
                <span className={ styles.bottomMainBannerSecondText }>{ secondText }</span>
                <span className={ styles.bottomMainBannerThirdText }>{ thirdText }</span>
            </div>
        </div>
    )
}