import { useRef } from "react";

const MirrorApp = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetId = window.location.pathname.split("/")[2];
  const iFrameSrc = `https://test.mirror-app.com/feed-facebook/${widgetId}/preview`;
  return (
    <section>
      <iframe
        ref={iframeRef}
        src={iFrameSrc}
        height="100%"
        style={{
          border: 0,
          height: "100vh",
          width: "100%",
        }}
      />
    </section>
  );
};

export default MirrorApp;
