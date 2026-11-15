import { useEffect } from "react";

const SITE_NAME = "Ignitus Poietik";

// Sets the browser tab title for the current page.
function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Digital Solutions`;
  }, [title]);
}

export default usePageTitle;
