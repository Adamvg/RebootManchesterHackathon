import * as React from "react";

interface PageIdProps {
    id: string;
}

export function PageId({ id }: PageIdProps) {
    return (
        <label className="text-xs text-gray-400 p-2 text-center">ID: {id}</label>
    );
}