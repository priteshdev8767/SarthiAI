"use client";

import { usePathname } from "next/navigation";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable";
import { ConversationsPanel } from "../components/conversations-panel";
import { cn } from "@workspace/ui/lib/utils";

export const ConversationsLayout = ({
  children
}: { children: React.ReactNode; }) => {
  const pathname = usePathname();
  const isSelected = pathname !== "/conversations";

  return (
    <ResizablePanelGroup className="h-full flex-1" direction="horizontal">
      <ResizablePanel
        className={cn(isSelected ? "hidden md:block" : "block")}
        defaultSize={30}
        maxSize={30}
        minSize={20}
      >
        <ConversationsPanel />
      </ResizablePanel>
      <ResizableHandle className="hidden md:flex" />
      <ResizablePanel
        className={cn(!isSelected ? "hidden md:block" : "block")}
        defaultSize={70}
      >
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
