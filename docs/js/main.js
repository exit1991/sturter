//================================
//  ハンバーガーボタンナビゲーション対応
//================================

// 画面が読み込まれた際の処理
window.onload = function() {
    // ハンバーガーボタンを取得
    var hamBtn = document.querySelector('.hamburger_toggle');

    // ボタンクリック時のイベントを定義
    hamBtn.onclick = function() {
        var addClassName   = 'show';
        var targetSelecter = ['.hamburger_toggle','.main-nav','.hamburger_mask'];

        // targetSelecter のある要素に対して addClassName のクラスを 追加／削除 する
        for (var i = 0; i < targetSelecter.length; i++) {
            document.querySelector(targetSelecter[i]).classList.toggle(addClassName);
        }
    }

}

// jQueryバージョン（※使用にはHTMLファイルに読み込み指定が必要）
// $(function(){
//     $('.hamburger_toggle').on('click', function () {
//         $('.hamburger_toggle, .main-nav, .hamburger_mask').toggleClass('show');
//     });
// })
