
import React from "react";
import HeroAbout from "../components/heroAbout";
import BannerAbout from "../components/bannerAbout";



export default function bannerAbout() {
    return (
        <>
            <HeroAbout>
                <BannerAbout title="So, About Me">
                    <p> Min dröm har nästan alltid varit att jobba inom musikbranschen, men jag hittade för ett antal år sedan Visual Studio där jag fick upp ett helt nytt intresse, 
                        att bygga hemsidor. Min dröm har sen dess ändrats och jag är helt inne på att bli en så bra webbutvecklare som möjligt. Lära mig mycket inom både frontend, 
                        men också backend som intresserar mig.
                        Just nu pluggar jag på KYH i Nacka. Där går jag en utbildning inom frontend developing. 
                        Jag ser stora framsteg varje dag och tycker att det är som roligast när man jobbat hårt och lagt ned mycket tid på att lösa ett problem, och sen löser man det.
                        Jag söker idag LIA praktik för min utbildning på KYH mellan perioden november 2020 - maj 2021.
                    </p> 
                </BannerAbout>
            </HeroAbout>
        </>
    );
}