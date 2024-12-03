import * as React from "react";

type FlowStep = 'payments' | 'recipient' | 'account' | 'download' | 'statements' | 'everyday-nav' | 'everyday-card' | 'regular-payments' | null;

type FlowType = 'payment' | 'statement' | 'standing-order' | null;

type GuidedFlowContextType = {
    isGuided: boolean;
    currentStep: FlowStep;
    flowType: FlowType;
    startGuidedFlow: (type: FlowType) => void;
    completeStep: (step: FlowStep) => void;
    resetFlow: () => void;
};

export const GuidedFlowContext = React.createContext<GuidedFlowContextType>({
    isGuided: false,
    currentStep: null,
    flowType: null,
    startGuidedFlow: () => {},
    completeStep: () => {},
    resetFlow: () => {},
});

export function GuidedFlowProvider({ children }: { children: React.ReactNode }) {
    const [isGuided, setIsGuided] = React.useState(false);
    const [currentStep, setCurrentStep] = React.useState<FlowStep>(null);
    const [flowType, setFlowType] = React.useState<FlowType>(null);

    const startGuidedFlow = (type: FlowType) => {
        setIsGuided(true);
        setFlowType(type);
        if (type === 'payment') {
            setCurrentStep('payments');
        } else if (type === 'statement') {
            setCurrentStep('account');
        } else if (type === 'standing-order') {
            setCurrentStep('everyday-nav');
        }
    };

    const completeStep = (step: FlowStep) => {
        if (flowType === 'payment') {
            if (step === 'payments') {
                setCurrentStep('recipient');
            } else if (step === 'recipient') {
                setCurrentStep(null);
                setIsGuided(false);
                setFlowType(null);
            }
        } else if (flowType === 'statement') {
            if (step === 'account') {
                setCurrentStep('download');
            } else if (step === 'download') {
                setCurrentStep('statements');
            } else if (step === 'statements') {
                setCurrentStep(null);
                setIsGuided(false);
                setFlowType(null);
            }
        } else if (flowType === 'standing-order') {
            if (step === 'everyday-nav') {
                setCurrentStep('everyday-card');
            } else if (step === 'everyday-card') {
                setCurrentStep('regular-payments');
            } else if (step === 'regular-payments') {
                setCurrentStep(null);
                setIsGuided(false);
                setFlowType(null);
            }
        }
    };

    const resetFlow = () => {
        setIsGuided(false);
        setCurrentStep(null);
        setFlowType(null);
    };

    return (
        <GuidedFlowContext.Provider 
            value={{ 
                isGuided, 
                currentStep,
                flowType,
                startGuidedFlow, 
                completeStep,
                resetFlow
            }}
        >
            {children}
        </GuidedFlowContext.Provider>
    );
}