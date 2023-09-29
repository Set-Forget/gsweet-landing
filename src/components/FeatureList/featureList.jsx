import { useState } from 'react';
import FeatureListCard from '../FeatureListCard/FeatureListCard';
import BoilerSection from '../BoilerSection/BoilerSection';

export default function FeatureList() {
    // Aca va un array con un map para featured list card
    let title = "Feature"
    let spanTitle = "list"
    let titleColor = "gray-900"

    const featureListData = [
        {title: "Session",
        spanTitle: "Tracking",
        firstParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text    ",
        secondParagraph: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum  ",
        flexDirection: "flex-row"
        },
        {title: "Leader",
        spanTitle: "board",
        firstParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text    ",
        secondParagraph: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum  ",
        flexDirection: "flex-row-reverse"
        },
        {title: "Text",
        spanTitle: "Analysis",
        firstParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text    ",
        secondParagraph: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum  ",
        flexDirection: "flex-row"
    },
        {title: "Generate Questions",
        spanTitle: "with AI",
        firstParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text    ",
        secondParagraph: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum  ",
        flexDirection: "flex-row-reverse"
    
    }
    ]

    return (
        <section className='w-full flex flex-col justify-center items-center'>
            <BoilerSection title={title} spanTitle={spanTitle} titleColor={titleColor}>
                {featureListData.map(item =>
                    <FeatureListCard title={item.title} spanTitle={item.spanTitle} firstParagraph={item.firstParagraph} secondParagraph={item.secondParagraph} flexDirection={item.flexDirection}></FeatureListCard>
                )}
            </BoilerSection>
        </section>
    )
}
