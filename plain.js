// Plain Contact Form Widget - Uninote Help
(function () {
  // 1. Plain SDK 読み込み（バブル非表示）
  var s = document.createElement('script');
  s.async = false;
  s.src = 'https://chat.cdn-plain.com/index.js';
  s.onload = function () {
    Plain.init({
      appId: 'liveChatApp_01KNKPP39TZEA8FTJNB9GQWCHA',
      hideLauncher: true,
    });
  };
  document.head.appendChild(s);

  // 2. スタイル
  var style = document.createElement('style');
  style.textContent = [
    '#pf-btn{position:fixed;bottom:24px;right:24px;z-index:9998;background:#6E42EC;color:#fff;border:none;border-radius:24px;padding:12px 20px;font-size:14px;font-weight:600;font-family:system-ui,sans-serif;cursor:pointer;box-shadow:0 4px 14px rgba(110,66,236,.4);display:flex;align-items:center;gap:8px;transition:background .2s,transform .15s}',
    '#pf-btn:hover{background:#5a32d4;transform:translateY(-2px)}',
    '#pf-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:9999;align-items:center;justify-content:center;backdrop-filter:blur(2px)}',
    '#pf-overlay.open{display:flex}',
    '#pf-modal{background:#fff;border-radius:16px;padding:32px;width:100%;max-width:460px;box-shadow:0 20px 60px rgba(0,0,0,.2);font-family:system-ui,sans-serif;position:relative;margin:16px}',
    '#pf-modal h2{margin:0 0 6px;font-size:20px;font-weight:700;color:#111}',
    '#pf-modal > p{margin:0 0 24px;font-size:14px;color:#666}',
    '#pf-close{position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;color:#999;font-size:20px;line-height:1;padding:4px}',
    '#pf-close:hover{color:#333}',
    '.pf-row{margin-bottom:16px}',
    '.pf-row label{display:block;font-size:13px;font-weight:600;color:#333;margin-bottom:6px}',
    '.pf-row input,.pf-row select,.pf-row textarea{width:100%;box-sizing:border-box;border:1.5px solid #e0e0e0;border-radius:8px;padding:10px 12px;font-size:14px;font-family:system-ui,sans-serif;color:#111;outline:none;transition:border .15s}',
    '.pf-row input:focus,.pf-row select:focus,.pf-row textarea:focus{border-color:#6E42EC}',
    '.pf-row textarea{resize:vertical;min-height:100px}',
    '#pf-submit{width:100%;background:#6E42EC;color:#fff;border:none;border-radius:10px;padding:13px;font-size:15px;font-weight:700;font-family:system-ui,sans-serif;cursor:pointer;margin-top:4px;transition:background .2s}',
    '#pf-submit:hover{background:#5a32d4}',
    '#pf-submit:disabled{background:#bbb;cursor:not-allowed}',
    '#pf-sent{display:none;text-align:center;padding:16px 0}',
    '#pf-sent .pf-check{width:56px;height:56px;background:#f0ebff;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px}',
    '#pf-sent h3{margin:0 0 8px;font-size:18px;color:#111}',
    '#pf-sent p{margin:0;color:#666;font-size:14px}',
    '#pf-sent .pf-chat-link{display:inline-block;margin-top:16px;color:#6E42EC;font-size:13px;cursor:pointer;text-decoration:underline}',
  ].join('');
  document.head.appendChild(style);

  // 3. DOM構築
  document.body.insertAdjacentHTML('beforeend',
    '<button id="pf-btn">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
      'お問い合わせ' +
    '</button>' +
    '<div id="pf-overlay">' +
      '<div id="pf-modal">' +
        '<button id="pf-close" aria-label="close">&times;</button>' +
        '<div id="pf-form-wrap">' +
          '<h2>お問い合わせ</h2>' +
          '<p>内容をお送りいただけると、サポートチームがご対応します。</p>' +
          '<form id="pf-form" novalidate>' +
            '<div class="pf-row"><label>お名前 <span style="color:#e53">※</span></label><input id="pf-name" type="text" placeholder="山田 太郎" required></div>' +
            '<div class="pf-row"><label>メールアドレス <span style="color:#e53">※</span></label><input id="pf-email" type="email" placeholder="taro@example.com" required></div>' +
            '<div class="pf-row"><label>お問い合わせの種類</label>' +
              '<select id="pf-cat">' +
                '<option value="">選択してください</option>' +
                '<option>機能について</option>' +
                '<option>プラン・料金について</option>' +
                '<option>アカウントについて</option>' +
                '<option>バグ・不具合の報告</option>' +
                '<option>その他</option>' +
              '</select>' +
            '</div>' +
            '<div class="pf-row"><label>内容 <span style="color:#e53">※</span></label><textarea id="pf-body" placeholder="お問い合わせ内容をご記入ください" required></textarea></div>' +
            '<button type="submit" id="pf-submit">送信する</button>' +
          '</form>' +
        '</div>' +
        '<div id="pf-sent">' +
          '<div class="pf-check"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6E42EC" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>' +
          '<h3>送信が完了しました！</h3>' +
          '<p>内容を確認し、担当者からご連絡いたします。<br>しばらくお待ちください。</p>' +
          '<span class="pf-chat-link" id="pf-open-chat">チャットで直接問い合わせる</span>' +
        '</div>' +
      '</div>' +
    '</div>'
  );

  // 4. イベント
  var overlay = document.getElementById('pf-overlay');
  var form    = document.getElementById('pf-form');

  document.getElementById('pf-btn').addEventListener('click', function () {
    document.getElementById('pf-form-wrap').style.display = '';
    document.getElementById('pf-sent').style.display = 'none';
    form.reset();
    overlay.classList.add('open');
  });

  document.getElementById('pf-close').addEventListener('click', function () {
    overlay.classList.remove('open');
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) overlay.classList.remove('open');
  });

  document.getElementById('pf-open-chat').addEventListener('click', function () {
    overlay.classList.remove('open');
    try { Plain.open(); } catch (e) {}
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name  = document.getElementById('pf-name').value.trim();
    var email = document.getElementById('pf-email').value.trim();
    var cat   = document.getElementById('pf-cat').value;
    var body  = document.getElementById('pf-body').value.trim();

    if (!name || !email || !body) {
      alert('お名前、メールアドレス、内容は必須項目です。');
      return;
    }

    var submitBtn = document.getElementById('pf-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = '送信中…';

    // Plainにユーザー情報を渡す
    try {
      Plain.setCustomerDetails({ email: email, fullName: name });
    } catch (err) {}

    // Plainのチャットをバックグラウンドで開いてメッセージ送信
    try {
      Plain.open();
      setTimeout(function () {
        // Plainのinputに内容をセット
        var msg = ('【' + (cat || 'お問い合わせ') + '】 ' + body).trim();
        var inp = document.querySelector('.plain-chat-input textarea, [data-testid="chat-input"], textarea[placeholder]');
        if (inp) {
          inp.value = msg;
          inp.dispatchEvent(new Event('input', { bubbles: true }));
        }
        Plain.close();
      }, 800);
    } catch (err) {}

    // 送信完了画面に切り替え
    setTimeout(function () {
      document.getElementById('pf-form-wrap').style.display = 'none';
      document.getElementById('pf-sent').style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = '送信する';
    }, 400);
  });
}());
