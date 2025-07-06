import { useEffect, useState } from "react";

export function useLimitRecipe(
  mobileLimit = 1,
  desktopLimit = 4,
  breakpoint = 1024
) {
  const [limit, setLimit] = useState(mobileLimit);

  useEffect(() => {
    function updateLimit() {
      if (window.innerWidth >= breakpoint) {
        setLimit(desktopLimit);
      } else {
        setLimit(mobileLimit);
      }
    }
    updateLimit();
    window.addEventListener("resize", updateLimit);
    return () => window.removeEventListener("resize", updateLimit);
  }, [mobileLimit, desktopLimit, breakpoint]);

  return limit;
}
