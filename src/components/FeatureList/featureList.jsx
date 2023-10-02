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
        firstParagraph: "With Gsweet, monitor and recognize each student's collaboration in a Google Docs class. Celebrate their contributions, ensuring every voice is heard and valued, while fostering a more engaged and inclusive learning environment. ",
        secondParagraph: "  ",
        flexDirection: "flex-row"
        },
        {title: "Leader",
        spanTitle: "board",
        firstParagraph: "Foster healthy competition and motivation among participants. Track individual contributions and scores, allowing educators to recognize and reward active participation.",
        secondParagraph: "",
        flexDirection: "flex-row-reverse"
        },
        {title: "Text",
        spanTitle: "Analysis",
        firstParagraph: "Dive deep into the content with Gsweet's advanced text analysis. Summarize key words and themes, and visualize connections amongst concepts, making it easier for educators to understand and guide discussions.",
        secondParagraph: " ",
        flexDirection: "flex-row"
    },
        {title: "Generate Questions",
        spanTitle: "with AI",
        firstParagraph: "Enhance discussions and exploration with AI-powered question recommendations. Gsweet's AI analyzes the content and suggests follow-up questions, ensuring comprehensive understanding and stimulating further exploration.",
        secondParagraph: " ",
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
