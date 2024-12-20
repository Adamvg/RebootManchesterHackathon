import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { GuidedFlowContext } from "../../contexts/GuidedFlowContext";

export function AccountCard() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const { isGuided, currentStep, flowType, completeStep } = React.useContext(GuidedFlowContext);

    const handleRegularPayments = () => {
        if (isGuided && currentStep === 'regular-payments' && flowType === 'standing-order') {
            completeStep('regular-payments');
        }
        navigation.navigate("RegularPayments");
    };

    const isCardHighlighted = isGuided && currentStep === 'everyday-card' && flowType === 'standing-order';
    const isRegularPaymentsHighlighted = isGuided && currentStep === 'regular-payments' && flowType === 'standing-order';

    return (
        <stackLayout className={`rounded-lg mx-4 mb-4 ${isCardHighlighted ? 'bg-[#11B67A]' : 'bg-white'}`}>
            <gridLayout rows="auto, auto" columns="*, auto" className="p-4">
                <stackLayout row={0} col={0} className="mb-2">
                    <label className="text-base font-bold text-black mb-1">Club Lloyds</label>
                    <label className="text-sm text-gray-500 mb-2">11-22-33 / 12345678</label>
                    <label className="text-lg font-bold text-black">£1,234.56</label>
                </stackLayout>
                <label row={0} col={1} className="text-sm" verticalAlignment="top">⋯</label>
            </gridLayout>
            
            <gridLayout rows="auto" columns="*, auto, *" className="border-t border-gray-200">
                <stackLayout col={0} className="p-2 text-center" onTap={() => navigation.navigate("Payments")}>
                    <label className="text-xs font-medium text-black">Pay & Transfer</label>
                </stackLayout>
                <label col={1} className="text-gray-200 self-center">|</label>
                <stackLayout 
                    col={2} 
                    className={`p-2 text-center ${isRegularPaymentsHighlighted ? 'bg-[#11B67A] rounded-lg' : ''}`} 
                    onTap={handleRegularPayments}
                >
                    <label className="text-xs font-medium text-black">Regular Payments</label>
                </stackLayout>
            </gridLayout>
        </stackLayout>
    );
}