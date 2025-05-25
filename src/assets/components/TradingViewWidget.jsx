import React, { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "3M",
      exchange: "BSE",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: false,
      showFloatingTooltip: false,
      width: "650",
      height: "500",
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(42, 46, 57, 0)",
      scaleFontColor: "rgba(219, 219, 219, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)"
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }
  }, []);
return (
  <div
    className="tradingview-widget-container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '600px',
      width: '100%',
      background: 'transparent'
    }}
  >
    <div
      className="tradingview-widget-container__widget"
      ref={containerRef}
      style={{
        width: 650,
        height: 500,
        margin: '0 auto'
      }}
    ></div>
    <div className="tradingview-widget-copyright text-xs text-gray-500 mt-2">
      <a
        href="https://www.tradingview.com/"
        rel="noopener nofollow"
        target="_blank"
        className="text-blue-500"
      >
      </a>
    </div>
  </div>
);

};
export default TradingViewWidget;


