//自動生成tbody

//彈跳視窗影片
function openVideoPopup(src) {
        window.open(
        `${src}`,     // 網頁路徑（可換成任何網址）
        "Demo_Video",    // 視窗名稱
        "width=1280,height=720,scrollbars=yes,resizable=yes"
        );
    }

const video = document.getElementById("Demo_Video");
        video.addEventListener("ended", () => {
          window.close(); // 播放完自動關閉視窗
        });