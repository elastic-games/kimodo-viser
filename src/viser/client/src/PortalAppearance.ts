import { useEffect, useState } from "react";
import { ViewerContextContents } from "./ViewerContext";

// The authenticated Studio embed is same-origin. Ignore unrelated windows.
export const isStudioEmbed = () => {
  try {
    return (
      window.parent !== window &&
      window.parent.location.origin === window.location.origin &&
      window.parent.location.pathname === "/apps/kimodo"
    );
  } catch {
    return false;
  }
};

export function usePortalAppearance(viewer: ViewerContextContents) {
  const [mode, setMode] = useState<"dark" | "light" | null>(null);
  const darkMode = viewer.useGui((state) => state.theme.dark_mode);
  const checkbox = viewer.useGui(
    (state) => state.theme.titlebar_dark_mode_checkbox_uuid,
  );
  useEffect(() => {
    if (!isStudioEmbed()) return;
    function receive(event: MessageEvent) {
      if (
        event.origin !== window.location.origin ||
        event.source !== window.parent
      )
        return;
      if (
        event.data?.type !== "elastic-studio:appearance" ||
        (event.data.theme !== "dark" && event.data.theme !== "light")
      )
        return;
      setMode(event.data.theme);
    }
    window.addEventListener("message", receive);
    window.parent.postMessage(
      { type: "elastic-studio:ready" },
      window.location.origin,
    );
    return () => window.removeEventListener("message", receive);
  }, []);
  useEffect(() => {
    if (mode === null || checkbox === null || darkMode === (mode === "dark"))
      return;
    const checked = mode === "dark";
    // Use the native callback too: grid and character materials follow the UI.
    viewer.mutable.current.sendMessage({
      type: "GuiUpdateMessage",
      uuid: checkbox,
      updates: { value: checked },
    });
    viewer.useGui.setState({
      theme: { ...viewer.useGui.getState().theme, dark_mode: checked },
    });
  }, [mode, checkbox, darkMode, viewer]);
  return mode;
}
