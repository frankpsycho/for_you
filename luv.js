onload = function () {
    var d = document;
    // フェードイン
    function feedin (feed, speed) {
        var filter = 0;
        feed.style.opacity = 0;
        feed.style.MozOpacity = 0;
        var timer = setInterval(function () {
            filter ++;
            feed.style.opacity = (filter / 10);
            feed.style.MozOpacity = (filter / 10);
            if (filter == 10) {
                clearInterval(timer);
            } 
        },speed);
    }
    // フェードアウト
    function feedout (feed, speed) {
        var filter = 10;
        feed.style.opacity = 1;
        feed.style.MozOpacity = 1;
        var timer = setInterval(function () {
            filter --;
            feed.style.opacity = (filter / 10);
            feed.style.MozOpacity = (filter / 10);
            if (filter == 0) {
                clearInterval(timer);
            } 
        },speed);
    }
    // I LOVE YOU
    var words = ['I', 'LOVE', 'YOU'];
    var wordElements = [];
    var container = d.createElement('div');
    container.className = 'container';
    d.body.appendChild(container);
    for (i=0;i<words.length;i++) {
        var wordElement = d.createElement('span');
        wordElement.className = 'word';
        wordElement.innerHTML = words[i];
        container.appendChild(wordElement);
        wordElements.push(wordElement);
    }
    var loveEmoji = d.createElement('span');
    loveEmoji.className = 'word';
    loveEmoji.innerHTML = '&#10084;';
    container.appendChild(loveEmoji);
    wordElements.push(loveEmoji);
    var i = 0;
    function loop () {
        feedout(wordElements[i], 10); // Decreased fade out speed
        i++;
        if (i == wordElements.length) { i = 0; }
        setTimeout(function () {
            feedin(wordElements[i], 10); // Decreased fade in speed
        }, 200); // Decreased delay before fade in
        setTimeout(loop, 1500); // Decreased delay before next loop
    }
    loop();
}