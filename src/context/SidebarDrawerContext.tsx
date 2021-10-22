import { createContext, ReactNode, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

interface SidebarDrawerProviderProps  {
    children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SideBarContextProvider({ children }: SidebarDrawerProviderProps) {
    const Disclousure = useDisclosure()

    const router = useRouter()

    useEffect(() => {
        Disclousure.onClose()
        }, [router.asPath])

    return(
        <SidebarDrawerContext.Provider value={Disclousure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)