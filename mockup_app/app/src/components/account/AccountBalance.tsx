import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { GuidedFlowContext } from "../../contexts/GuidedFlowContext";

export function AccountBalance() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const { isGuided, currentStep, flowType, completeStep } = React.useContext(GuidedFlowContext);

    const handleAccountTap = () => {
        if (isGuided && currentStep === 'account' && flowType === 'statement') {
            completeStep('account');
        }
        navigation.navigate("AccountDetails");
    };

    const isHighlighted = isGuided && currentStep === 'account' && flowType === 'statement';

    return (
        <gridLayout 
            rows="auto, auto" 
            columns="*, auto" 
            className={`p-4 mx-4 my-2 rounded-lg ${isHighlighted ? 'bg-[#11B67A]' : 'bg-white'}`}
            onTap={handleAccountTap}
        >
            <stackLayout row={0} col={0}>
                <label className="text-lg font-bold text-black">Club Lloyds</label>
                <label className="text-sm text-gray-500">11-22-33 / 12345678</label>
            </stackLayout>
            <label 
                row={0} 
                col={1} 
                className="text-2xl font-bold text-black"
            >
                £1,234.56
            </label>
        </gridLayout>
    );
}