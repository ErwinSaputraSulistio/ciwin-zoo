import { BottomMainBanner } from "../../atoms/Landing"

export default function BottomMainBannerList() {
    return(
        <>
            <BottomMainBanner
                firstText="LEARN AND PLAY"
                secondText="Take a Guess"
                thirdText="We have some mini games along with the learning progress that'll entertain you! We gave you some informations about the animals, then you take a guess what animals they are!"
                img="/assets/bottomBannerOne.png"
            />
            <BottomMainBanner
                firstText="FLEXIBLE"
                secondText="Choose : Read or Play"
                thirdText="We're also flexible! If you just want to read about random animals fact, we'll share you. Or if you want to spend some time while improving your knowledge, we'll play with you!"
                img="/assets/bottomBannerTwo.png" reversed={ true }
            />
            <BottomMainBanner
                firstText="NEW KNOWLEDGE ACHIEVED"
                secondText="Animal Mastery"
                thirdText="Your biological teacher will be amazed by how far you know about animals facts, no more score below A+ in animal subject!"
                img="/assets/bottomBannerThree.png"
            />
        </>
    )
}