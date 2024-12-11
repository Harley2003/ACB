/* eslint-disable */

'use client';

import React, {createContext, useContext, useState, useEffect, useRef} from 'react'

type SidebarContextType = {
    isOpen: boolean
    toggleSidebar: () => void
    setSidebarOpen: (isOpen: boolean) => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({children}: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const setSidebarOpen = (isOpen: boolean) => {
        setIsOpen(isOpen)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setIsOpen(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <SidebarContext.Provider value={{isOpen, toggleSidebar, setSidebarOpen}}>
            {children}
        </SidebarContext.Provider>
    )
}

export function useSidebar() {
    const context = useContext(SidebarContext)
    if (context === undefined) {
        throw new Error('useSidebar must be used within a SidebarProvider')
    }
    return context
}