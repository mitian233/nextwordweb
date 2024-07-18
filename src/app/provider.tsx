"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {WagmiProvider} from "wagmi";

import {MessagesProvider} from "@/context/words";
import {config} from "@/config/config";
import {Provider as JotaiProvider} from "jotai";
import {createStore} from "jotai";

const queryClient = new QueryClient();

const globalStore = createStore()

export const Providers = ({children}: { children: React.ReactNode }) => {
    return (
        <WagmiProvider config={config}>
            <JotaiProvider store={globalStore}>
                <QueryClientProvider client={queryClient}>
                    <RainbowKitProvider modalSize="compact" locale="en">
                        <MessagesProvider>{children}</MessagesProvider>
                    </RainbowKitProvider>
                </QueryClientProvider>
            </JotaiProvider>
        </WagmiProvider>
    );
};
