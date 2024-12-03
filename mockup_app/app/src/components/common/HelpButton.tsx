import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

export function HelpButton() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();

    return (
        <button 
            className="text-lg mx-1 bg-gray-100 w-10 h-10 text-center"
            onTap={() => navigation.navigate("Support")}
        >
            ❓
        </button>
    );
}