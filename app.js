document.addEventListener("DOMContentLoaded", function() {
    const cookieBtn = document.getElementById("cookieBtn");
    const upgradeBtn = document.getElementById("upgradeBtn");
    const cookiesSpan = document.getElementById("cookiesSpan");
    const cpsSpan = document.getElementById("cpsSpan");
  
    // Default starting value for stats
    let stats = {
      cookieCount: 0,
      cps: 0 // cookies per second
    };
  
    // updates local storage with 
    const storageStats = JSON.parse(localStorage.getItem("stats"));
  
    if (storageStats !== null) {
      stats = storageStats;
      updatePage();
    }
  
    function buyCookie() {
      stats.cookieCount++;
      updatePage();
      updateStorage();
    }
  
    function buyUpgrade() {
      if (stats.cookieCount >= 10) {
        stats.cps++; // Increases cookies per second
        stats.cookieCount -= 10; // Decreases cookie count by 10
        updatePage();
        updateStorage();
      } else {
        alert("Not enough cookies to buy upgrade!");
      }
    }
  
    function updatePage() {
      cookiesSpan.textContent = stats.cookieCount;
      cpsSpan.textContent = stats.cps;
    }
  
    function updateStorage() {
      localStorage.setItem("stats", JSON.stringify(stats));
    }
  
    cookieBtn.addEventListener("click", buyCookie);
    upgradeBtn.addEventListener("click", buyUpgrade);
  
    // Starts the timer that will run every second
    setInterval(function () {
      stats.cookieCount += stats.cps;
      updatePage();
      updateStorage();
    }, 1000);
  });
  