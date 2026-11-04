export interface ScriptOptions {
  codes: string[];
  delayMs: number;
  autoCloseDialog: boolean;
  stopOnError: boolean;
  logLevel: 'verbose' | 'simple';
}

export function generateConsoleRedeemScript(options: ScriptOptions): string {
  const { codes, delayMs = 3000, autoCloseDialog = true, stopOnError = false, logLevel = 'verbose' } = options;
  const codesJson = JSON.stringify(codes, null, 2);

  return `/**
 * =========================================================================
 * DELTA FORCE: AUTO REDEEM CONSOLE SCRIPT v2.4 (TACTICAL HQ)
 * Hướng dẫn:
 * 1. Mở trang đổi mã chính thức: https://www.playdeltaforce.com
 * 2. Đăng nhập tài khoản game của bạn
 * 3. Mở DevTools (F12 hoặc Ctrl + Shift + J / Cmd + Option + J)
 * 4. Chuyển sang tab "Console", dán toàn bộ đoạn mã này và nhấn ENTER!
 * Để dừng bất cứ lúc nào: gõ window.__STOP_DELTA_FORCE_REDEEM__ = true và Enter
 * =========================================================================
 */
(async function runDeltaForceAutoRedeem() {
  window.__STOP_DELTA_FORCE_REDEEM__ = false;

  const CONFIG = {
    codes: ${codesJson},
    delayMs: ${delayMs},
    autoCloseDialog: ${autoCloseDialog},
    stopOnError: ${stopOnError},
    logLevel: '${logLevel}'
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  console.clear();
  console.log(
    '%c[DELTA FORCE HQ]%c Khởi động quy trình tự động nhập mã quà tặng...',
    'background: #10b981; color: #000; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
    'color: #10b981; font-weight: bold;'
  );
  console.log(\`🎯 Tổng số mã cần thực thi: \${CONFIG.codes.length} mã | Khoảng trễ: \${CONFIG.delayMs / 1000}s\`);
  console.log('%c⚠️ Nhập window.__STOP_DELTA_FORCE_REDEEM__ = true để huỷ tiến trình bất kỳ lúc nào.', 'color: #f59e0b;');

  // Hàm dò tìm ô input nhập code trên trang web chính thức
  function findCodeInput() {
    const selectors = [
      '#cdkey',
      '#cdk',
      '#redeem_code',
      'input[name*="code" i]',
      'input[name*="cdk" i]',
      'input[placeholder*="mã" i]',
      'input[placeholder*="code" i]',
      'input[placeholder*="cdk" i]',
      'input[placeholder*="nhập" i]',
      '.redeem-input',
      '.cdkey-input',
      'input[type="text"]'
    ];

    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el && el.offsetParent !== null && !el.disabled) {
        return el;
      }
    }
    return null;
  }

  // Hàm dò tìm nút xác nhận / đổi quà
  function findSubmitButton() {
    const selectors = [
      '#btn-exchange',
      '#submit-btn',
      '#btn-submit',
      '.btn-redeem',
      '.exchange-btn',
      '.btn-confirm',
      'button[type="submit"]'
    ];

    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el && el.offsetParent !== null && !el.disabled) {
        return el;
      }
    }

    // Fallback: Tìm nút có chứa chữ "Đổi", "Nhận", "Xác nhận", "Redeem", "Exchange"
    const buttons = Array.from(document.querySelectorAll('button, a.btn, div.btn, span.btn'));
    for (const btn of buttons) {
      const txt = (btn.textContent || '').trim().toLowerCase();
      if (
        (txt.includes('đổi') || txt.includes('nhận') || txt.includes('xác nhận') || txt.includes('redeem') || txt.includes('exchange')) &&
        btn.offsetParent !== null
      ) {
        return btn;
      }
    }
    return null;
  }

  // Hàm đóng dialog/popup thông báo sau khi nhập
  function closeDialogs() {
    const closeSelectors = [
      '.modal .close',
      '.dialog-close',
      '.pop-close',
      '.close-btn',
      '.btn-close',
      '.confirm-btn',
      '.layui-layer-btn0',
      'button.close',
      '[aria-label="Close"]'
    ];

    for (const sel of closeSelectors) {
      const btn = document.querySelector(sel);
      if (btn && btn.offsetParent !== null) {
        try {
          btn.click();
        } catch (e) {}
      }
    }
  }

  // Bắt đầu vòng lặp xử lý từng mã
  const results = [];
  const inputEl = findCodeInput();
  const submitBtn = findSubmitButton();

  if (!inputEl || !submitBtn) {
    console.error(
      '%c[LỖI TRANG]%c Không tìm thấy ô nhập mã hoặc nút xác nhận! Hãy chắc chắn bạn đang ở đúng trang đổi quà của Delta Force và đã đăng nhập.',
      'background: #ef4444; color: #fff; padding: 4px 8px;',
      'color: #ef4444;'
    );
    console.log('💡 Gợi ý: Hãy mở popup đổi code hoặc cuộn đến phần nhập giftcode trước khi chạy lại script.');
    return;
  }

  console.log('✅ Đã nhận diện thành công form nhập mã quà tặng của hệ thống.');

  for (let i = 0; i < CONFIG.codes.length; i++) {
    if (window.__STOP_DELTA_FORCE_REDEEM__) {
      console.warn('🛑 Người dùng đã gửi lệnh dừng script.');
      break;
    }

    const currentCode = CONFIG.codes[i].trim();
    const step = \`[\${i + 1}/\${CONFIG.codes.length}]\`;
    console.log(\`%c\${step} Đang thực thi mã: %c\${currentCode}\`, 'color: #94a3b8;', 'color: #38bdf8; font-weight: bold;');

    try {
      // 1. Điền code vào input và trigger sự kiện thay đổi
      inputEl.focus();
      inputEl.value = currentCode;
      inputEl.dispatchEvent(new Event('input', { bubbles: true }));
      inputEl.dispatchEvent(new Event('change', { bubbles: true }));
      inputEl.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));

      await sleep(400);

      // 2. Click nút đổi mã
      submitBtn.click();

      // 3. Chờ phản hồi từ máy chủ
      await sleep(CONFIG.delayMs);

      // 4. Kiểm tra popup hoặc thông báo
      let responseMsg = 'Đã gửi yêu cầu';
      const toastOrModal = document.querySelector('.toast, .message, .alert, .modal-body, .layui-layer-content');
      if (toastOrModal && toastOrModal.textContent) {
        responseMsg = toastOrModal.textContent.trim().slice(0, 100);
      }

      results.push({
        STT: i + 1,
        'Mã Code': currentCode,
        'Trạng Thái': 'Hoàn thành',
        'Phản Hồi': responseMsg,
        'Thời Gian': new Date().toLocaleTimeString()
      });

      if (CONFIG.autoCloseDialog) {
        closeDialogs();
      }
    } catch (err) {
      console.error(\`❌ Lỗi khi xử lý mã \${currentCode}:\`, err);
      results.push({
        STT: i + 1,
        'Mã Code': currentCode,
        'Trạng Thái': 'Lỗi',
        'Phản Hồi': err.message || 'Lỗi không xác định',
        'Thời Gian': new Date().toLocaleTimeString()
      });

      if (CONFIG.stopOnError) {
        console.warn('⚠️ Dừng quy trình do gặp lỗi theo cấu hình.');
        break;
      }
    }
  }

  // Kết thúc và in bảng kết quả
  console.log(
    '%c🎉 HOÀN TẤT QUY TRÌNH NHẬP MÃ TỰ ĐỘNG! TỔNG KẾT BẢNG DƯỚI ĐÂY:',
    'background: #10b981; color: #000; font-weight: bold; padding: 6px 12px; font-size: 14px;'
  );
  console.table(results);
  console.log('🎁 Hãy mở game Delta Force và kiểm tra Hòm Thư (In-game Mailbox) để nhận các vật phẩm!');
})();`;
}
