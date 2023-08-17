

    // 選取所有帶有 'nameworkhover' 類別的元素
    var links = document.querySelectorAll('.nameworkhover');

    // 對每一個選取到的 'nameworkhover' 元素進行操作
    links.forEach(function(link) {
        // 在每一個 'nameworkhover' 內部選取 'namehover' 類別的元素
        var span = link.querySelector('.namehover');

        // 為 'nameworkhover' 元素增加滑鼠進入事件監聽
        link.addEventListener('mouseenter', function() {
            // 當滑鼠進入時，使 'namehover' 顯示
            span.style.display = 'inline';
        });

        // 為 'nameworkhover' 元素增加滑鼠離開事件監聽
        link.addEventListener('mouseleave', function() {
            // 當滑鼠離開時，使 'namehover' 隱藏
            span.style.display = 'none';
        });
    });

