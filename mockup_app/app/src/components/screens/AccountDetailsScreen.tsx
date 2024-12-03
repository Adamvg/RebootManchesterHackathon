import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { BottomNav } from "../navigation/BottomNav";
import { HelpButton } from "../common/HelpButton";
import { GuidedFlowContext } from "../../contexts/GuidedFlowContext";

export function AccountDetailsScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const { isGuided, currentStep, flowType, completeStep } = React.useContext(GuidedFlowContext);

    const handleDownloadTap = () => {
        if (isGuided && currentStep === 'download' && flowType === 'statement') {
            completeStep('download');
        }
        navigation.navigate("Statements");
    };

    const isDownloadHighlighted = isGuided && currentStep === 'download' && flowType === 'statement';

    return (
        <gridLayout rows="auto, auto, auto, auto, auto, auto, *, auto">
            {/* Header */}
            <gridLayout row={0} rows="auto" columns="auto, *, auto, auto" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Club Lloyds</label>
                <HelpButton col={2} />
                <button 
                    col={3} 
                    className="text-lg bg-gray-100 w-10 h-10 text-center"
                >⋮</button>
            </gridLayout>

            <stackLayout row={1} className="p-4 bg-white border-b">
                <label className="text-3xl font-bold text-black">£1,234.56</label>
            </stackLayout>

            <stackLayout row={2} className="bg-green-600">
                <gridLayout columns="*, auto" className="p-4">
                    <label col={0} className="text-white font-medium">Manage All Subscriptions</label>
                    <label col={1} className="text-white font-medium">→</label>
                </gridLayout>
            </stackLayout>

            <gridLayout row={3} columns="*, auto" className="p-4">
                <label col={0} className="text-black">December</label>
                <label col={1} className="font-bold text-black">All</label>
            </gridLayout>

            <gridLayout row={4} columns="auto, auto, *, auto, auto" className="p-4 bg-white">
                <button col={0} className="bg-gray-200 rounded-lg px-4 py-2 mr-2 text-black">In</button>
                <button col={1} className="bg-gray-200 rounded-lg px-4 py-2 text-black">Out</button>
                <label col={2}></label>
                <button 
                    col={3} 
                    className={`text-xl mx-2 ${isDownloadHighlighted ? 'bg-[#11B67A] rounded-lg p-2' : ''}`}
                    onTap={handleDownloadTap}
                >📥</button>
                <button col={4} className="text-xl">🔍</button>
            </gridLayout>

            <label row={5} className="p-4 font-bold text-black bg-white">Transactions</label>

            <scrollView row={6} className="bg-white">
                <stackLayout>
                    {/* ... transactions mapping remains the same ... */}
                </stackLayout>
            </scrollView>

            <contentView row={7}>
                <BottomNav />
            </contentView>
        </gridLayout>
    );
}