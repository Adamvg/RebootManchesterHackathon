import * as React from "react";
import { GuidedFlowContext } from "../../contexts/GuidedFlowContext";

interface HorizontalNavProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export function HorizontalNav({ activeTab, onTabChange }: HorizontalNavProps) {
    const tabs = ['Summary', 'Everyday', 'Save & Invest', 'Borrow', 'Insure'];
    const { isGuided, currentStep, flowType, completeStep } = React.useContext(GuidedFlowContext);

    const handleTabChange = (tab: string) => {
        if (isGuided && currentStep === 'everyday-nav' && flowType === 'standing-order' && tab === 'Everyday') {
            completeStep('everyday-nav');
        }
        onTabChange(tab);
    };

    return (
        <scrollView orientation="horizontal" className="px-2">
            <stackLayout orientation="horizontal">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`mx-1 px-3 py-1 text-xs rounded-lg border border-black font-bold ${
                            activeTab === tab 
                                ? 'bg-black text-white' 
                                : isGuided && currentStep === 'everyday-nav' && flowType === 'standing-order' && tab === 'Everyday'
                                    ? 'bg-[#11B67A] text-white'
                                    : 'bg-gray-100 text-black'
                        }`}
                        onTap={() => handleTabChange(tab)}
                        text={tab}
                    />
                ))}
            </stackLayout>
        </scrollView>
    );
}