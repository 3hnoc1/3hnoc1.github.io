function updateJapanDateTime() {
  // 獲取日本當地日期和時間（GMT+9 時區）
  const japanDate = new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Tokyo"
  }); // 格式：YYYY-MM-DD
  
  const japanTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    timeZone: "Asia/Tokyo"
  }); // 格式：HH:mm:ss

  // 結合日期與時間
  const fullDateTime = `${japanDate} ${japanTime}`;

  // 更新到網頁上
  document.getElementById("japan-date-time").textContent = fullDateTime;
}

// 初始化日期與時間
updateJapanDateTime();

// 每秒更新一次
setInterval(updateJapanDateTime, 1000);