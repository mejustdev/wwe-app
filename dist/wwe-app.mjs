const t = window["html5-qrcode"];
document.addEventListener("DOMContentLoaded", function() {
  const e = document.createElement("video");
  e.id = "qr-video", e.width = "100%", e.height = "auto", document.getElementById("app").appendChild(e), t.getCameras().then((o) => {
    if (o && o.length) {
      const d = o[0].id;
      new t(e).start(
        d,
        {
          fps: 10,
          qrbox: 250
        },
        (n, a) => {
          console.log("QR Code detected:", n);
        },
        (n) => {
          console.error(n);
        }
      );
    } else
      console.error("No cameras found.");
  });
});
