// スムーススクロールの実装
$(function () {
  $('a[href^="#"]').on('click', function () {
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    // 移動速度を指定（ミリ秒）
    let speed = 500;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // トップからの距離からヘッダー分(+30px分)の高さを引く
    let position = jQuery(target).offset().top - header -30;
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  })
});


// <!-- WOW初期化 -->
new WOW().init();

// drawer初期化
$(document).ready(function() {
  $('.drawer').drawer();
});

// jquery-disabledクラスのaタグリンク削除
$('.jquery-disabled').on('click', function() { 
  return false; 
});

// googleフォーム送信可否判定用↓

// $form.submit(function (e) { 
//   $.ajax({ 
//     url: $form.attr('action'), 
//     data: $form.serialize(), 
//     type: "POST", 
//     dataType: "xml", 
//     statusCode: { 
//       0: function () { 
//       //送信に成功したときの処理 
//       }, 
//       200: function () { 
//       //送信に失敗したときの処理 
//       } 
//     } 
//   }); 
//   return false; 
// }); 

// Q&A toggleの実装
$(function () {
  $('.QA-toggle').hide();
  $('.QA__content--question').on('click', function () {
    $(this).next().slideToggle();
    $(this).children('.QA__content--question--btn-1').toggleClass('QA__content--question--btn-2');
  })
});

