"use client"

import { useEffect, useRef } from "react"
const ModelViewer = ({ modelUrl }) =>{
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const iframe = document.createElement("iframe")
    iframe.src = modelUrl
    iframe.width = "100%"
    iframe.height = "100%"
    iframe.allow = "xr-spatial-tracking; gyroscope; accelerometer"
    iframe.frameBorder = "0"

    container.innerHTML = ""
    container.appendChild(iframe)
  }, [modelUrl])

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
}

export default ModelViewer
