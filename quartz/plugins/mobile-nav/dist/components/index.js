import { joinSegments, pathToRoot } from "@quartz-community/utils"
import { jsx, jsxs } from "preact/jsx-runtime"

const MobileNavComponent = ({ fileData, cfg, displayClass }) => {
  const baseDir = pathToRoot(fileData.slug)
  const title = cfg?.pageTitle ?? "Adam Pann"

  return jsxs("nav", {
    class: ["mobile-site-nav", displayClass].filter(Boolean).join(" "),
    "aria-label": "Site navigation",
    children: [
      jsx("a", { class: "mobile-site-title", href: baseDir, children: title }),
      jsx("a", { href: joinSegments(baseDir, "posts"), children: "Posts" }),
      jsx("a", { href: joinSegments(baseDir, "thoughts"), children: "Thoughts" }),
    ],
  })
}

export const MobileNav = () => MobileNavComponent

export default MobileNav
