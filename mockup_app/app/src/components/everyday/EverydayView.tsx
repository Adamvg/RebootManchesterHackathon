import * as React from "react";
import { AccountCard } from "./AccountCard";
import { OffersCard } from "./OffersCard";
import { CardManagementCard } from "./CardManagementCard";
import { MoreForYouGrid } from "./MoreForYouGrid";
import { PageId } from "../common/PageId";

export function EverydayView() {
    return (
        <scrollView>
            <stackLayout>
                <AccountCard />
                <OffersCard />
                <CardManagementCard />
                <MoreForYouGrid />
                <PageId id="23456789" />
            </stackLayout>
        </scrollView>
    );
}