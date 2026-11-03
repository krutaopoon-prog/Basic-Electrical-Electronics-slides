/* ===========================================
   Symbols — สัญลักษณ์ไฟฟ้าและอิเล็กทรอนิกส์ (วาดเอง แบบ IEC 60617 เป็นหลัก)
   ใช้ร่วมกันทุกหน้า: สไลด์ แบบฝึกหัด แบบทดสอบ ใบงาน เฉลย
   - <span data-sym="res"></span>              แทนที่ด้วยภาพสัญลักษณ์ (ขนาดตาม font-size: 3em × 2em)
   - <span data-sym="res" class="big"></span>  ขนาดใหญ่ (ใส่คลาสเพิ่มได้ตามต้องการ)
   - Sym.svg('res')                            ได้สตริง <svg> สำหรับใส่ในโจทย์
   ทุกตัววาดในกรอบ 120 × 80 ขาต่อสายอยู่ที่ y = 40 (ซ้าย x = 0, ขวา x = 120)
   =========================================== */
(function (g) {
    'use strict';

    const T = (x, y, s, size) => `<text x="${x}" y="${y}" font-size="${size || 22}" font-family="Prompt, Kanit, sans-serif" font-weight="600" text-anchor="middle" fill="currentColor" stroke="none">${s}</text>`;
    const L = (a, b) => `<path d="M0 40 H${a} M${b} 40 H120"/>`;           // ขาต่อสายซ้าย-ขวา
    const DIODE = '<path d="M0 40 H44 M76 40 H120"/><path d="M44 22 L76 40 L44 58 Z"/>';
    const ARROW = (x1, y1, x2, y2) => {                                     // ลูกศรเล็ก (ใช้กับ LED / ปรับค่า)
        const a = Math.atan2(y2 - y1, x2 - x1), h = 9, w = 0.45;
        const p1 = [x2 - h * Math.cos(a - w), y2 - h * Math.sin(a - w)], p2 = [x2 - h * Math.cos(a + w), y2 - h * Math.sin(a + w)];
        return `<path d="M${x1} ${y1} L${x2} ${y2}"/><path d="M${x2} ${y2} L${p1[0].toFixed(1)} ${p1[1].toFixed(1)} L${p2[0].toFixed(1)} ${p2[1].toFixed(1)} Z" fill="currentColor"/>`;
    };

    const S = {
        /* ---- แหล่งจ่าย ---- */
        cell: L(54, 66) + '<path d="M54 16 V64"/><path d="M66 28 V52" stroke-width="7"/>' + T(40, 22, '+', 22) + T(80, 24, '−', 22),
        batt: L(36, 78) + '<path d="M36 16 V64 M64 16 V64 M48 40 H64"/><path d="M48 28 V52 M78 28 V52" stroke-width="7"/>' + T(24, 22, '+', 22) + T(92, 24, '−', 22),
        ac: L(40, 80) + '<circle cx="60" cy="40" r="20"/><path d="M47 40 C51 30, 56 30, 60 40 S69 50, 73 40"/>',
        /* ---- สวิตช์ ฟิวส์ ---- */
        sw: '<path d="M0 40 H36 M84 40 H120"/><path d="M36 40 L80 20"/><circle cx="36" cy="40" r="3.5" fill="currentColor"/><circle cx="84" cy="40" r="3.5" fill="currentColor"/>',
        push: '<path d="M0 40 H38 M82 40 H120"/><path d="M38 40 V32 M82 40 V32"/><path d="M34 26 H86"/><path d="M60 26 V10 M50 10 H70"/>',
        fuse: '<path d="M0 40 H120"/><rect x="34" y="30" width="52" height="20"/>',
        'fuse-ansi': '<path d="M0 40 H36 C42 22, 54 22, 60 40 S78 58, 84 40 H120"/>',
        /* ---- โหลด ---- */
        lamp: L(42, 78) + '<circle cx="60" cy="40" r="18"/><path d="M47.3 27.3 L72.7 52.7 M72.7 27.3 L47.3 52.7"/>',
        'lamp-ansi': L(42, 78) + '<circle cx="60" cy="40" r="18"/><path d="M42 40 H50 C50 26, 70 26, 70 40 H78"/>',
        motor: L(42, 78) + '<circle cx="60" cy="40" r="18"/>' + T(60, 48, 'M', 22),
        spk: '<path d="M0 32 H44 M0 48 H44"/><rect x="44" y="26" width="14" height="28"/><path d="M58 26 L80 8 V72 L58 54"/>',
        /* ---- สาย ---- */
        gnd: '<path d="M60 0 V40"/><path d="M38 40 H82 M46 50 H74 M54 60 H66"/>',
        junction: '<path d="M0 40 H120 M60 40 V80"/><circle cx="60" cy="40" r="6" fill="currentColor"/>',
        junction4: '<path d="M0 40 H120 M60 0 V80"/><circle cx="60" cy="40" r="6" fill="currentColor"/>',
        cross: '<path d="M0 40 H120 M60 0 V80"/>',
        hop: '<path d="M0 40 H48 A12 12 0 0 1 72 40 H120 M60 0 V80"/>',
        /* ---- อุปกรณ์อิเล็กทรอนิกส์ ---- */
        res: L(30, 90) + '<rect x="30" y="30" width="60" height="20"/>',
        'res-ansi': '<path d="M0 40 H30 L35 28 L45 52 L55 28 L65 52 L75 28 L85 52 L90 40 H120"/>',
        pot: L(30, 90) + '<rect x="30" y="30" width="60" height="20"/>' + ARROW(60, 78, 60, 53),
        'pot-ansi': '<path d="M0 40 H30 L35 28 L45 52 L55 28 L65 52 L75 28 L85 52 L90 40 H120"/>' + ARROW(60, 78, 60, 56),
        cap: L(54, 66) + '<path d="M54 18 V62 M66 18 V62"/>',
        'cap-pol': L(54, 66) + '<path d="M54 18 V62"/><rect x="64" y="18" width="7" height="44" fill="currentColor"/>' + T(42, 24, '+', 22),
        'cap-pol-ansi': '<path d="M0 40 H54 M72 40 H120"/><path d="M54 18 V62"/><path d="M74 18 Q64 40 74 62"/>' + T(42, 24, '+', 22),
        ind: '<path d="M0 40 H24 A9 9 0 0 1 42 40 A9 9 0 0 1 60 40 A9 9 0 0 1 78 40 A9 9 0 0 1 96 40 H120"/>',
        diode: DIODE + '<path d="M76 22 V58"/>',
        led: DIODE + '<path d="M76 22 V58"/>' + ARROW(62, 18, 76, 4) + ARROW(74, 24, 88, 10),
        zener: DIODE + '<path d="M70 18 L76 22 V58 L82 62"/>',
        npn: '<path d="M0 40 H44 M44 20 V60"/><path d="M44 30 L76 10 V0"/><path d="M76 80 V70"/>' + ARROW(44, 50, 76, 70) + T(26, 30, 'B', 15) + T(92, 14, 'C', 15) + T(92, 76, 'E', 15),
        pnp: '<path d="M0 40 H44 M44 20 V60"/><path d="M44 30 L76 10 V0"/><path d="M76 80 V70 L60 60"/>' + ARROW(70, 66, 47, 52) + T(26, 30, 'B', 15) + T(92, 14, 'C', 15) + T(92, 76, 'E', 15),
        relay: '<path d="M22 0 V28 M22 52 V80"/><rect x="8" y="28" width="28" height="24"/><path d="M36 40 H84" stroke-dasharray="5 5"/><path d="M96 0 V20 M96 80 V58"/><path d="M96 58 L84 22"/>',
        xfmr: '<path d="M0 16 H46 A8 8 0 0 1 46 32 A8 8 0 0 1 46 48 A8 8 0 0 1 46 64 H0"/><path d="M120 16 H74 A8 8 0 0 0 74 32 A8 8 0 0 0 74 48 A8 8 0 0 0 74 64 H120"/><path d="M58 12 V68 M62 12 V68"/>',
        vm: L(42, 78) + '<circle cx="60" cy="40" r="18"/>' + T(60, 48, 'V', 22),
        am: L(42, 78) + '<circle cx="60" cy="40" r="18"/>' + T(60, 48, 'A', 22)
    };

    /* ชื่อไทย/อังกฤษ ใช้ใน alt และหน้าฝึก */
    const NAME = {
        cell: 'เซลล์ไฟฟ้า (Cell)', batt: 'แบตเตอรี่ (Battery)', ac: 'แหล่งจ่ายไฟสลับ (AC Source)',
        sw: 'สวิตช์ (Switch)', push: 'สวิตช์กดติดปล่อยดับ (Push Button)', fuse: 'ฟิวส์ (Fuse)', 'fuse-ansi': 'ฟิวส์ แบบ ANSI',
        lamp: 'หลอดไฟ (Lamp)', 'lamp-ansi': 'หลอดไฟ แบบ ANSI', motor: 'มอเตอร์ (Motor)', spk: 'ลำโพง (Speaker)',
        gnd: 'สายดิน (Ground)', junction: 'จุดต่อสาย (Junction)', junction4: 'จุดต่อสาย 4 ทาง', cross: 'สายไขว้ ไม่ต่อกัน', hop: 'สายไขว้ แบบกระโดดข้าม',
        res: 'ตัวต้านทาน (Resistor)', 'res-ansi': 'ตัวต้านทาน แบบ ANSI', pot: 'ตัวต้านทานปรับค่าได้ (Potentiometer)', 'pot-ansi': 'ตัวต้านทานปรับค่าได้ แบบ ANSI',
        cap: 'ตัวเก็บประจุ (Capacitor)', 'cap-pol': 'ตัวเก็บประจุแบบมีขั้ว', 'cap-pol-ansi': 'ตัวเก็บประจุแบบมีขั้ว แบบ ANSI',
        ind: 'ตัวเหนี่ยวนำ (Inductor)', diode: 'ไดโอด (Diode)', led: 'ไดโอดเปล่งแสง (LED)', zener: 'ซีเนอร์ไดโอด (Zener Diode)',
        npn: 'ทรานซิสเตอร์ NPN', pnp: 'ทรานซิสเตอร์ PNP', relay: 'รีเลย์ (Relay)', xfmr: 'หม้อแปลงไฟฟ้า (Transformer)',
        vm: 'โวลต์มิเตอร์ (Voltmeter)', am: 'แอมมิเตอร์ (Ammeter)'
    };

    const sprite = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">'
        + Object.keys(S).map(k => `<symbol id="s-${k}" viewBox="0 0 120 80"><g fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${S[k]}</g></symbol>`).join('')
        + '</svg>';
    const css = '<style id="sym-css">svg.sym{width:3em;height:2em;vertical-align:middle;overflow:visible;color:inherit}svg.sym.big{width:7.5em;height:5em}</style>';

    function svg(id, cls) {
        if (!S[id]) throw new Error('ไม่มีสัญลักษณ์ ' + id);
        return `<svg class="sym${cls ? ' ' + cls : ''}" viewBox="0 0 120 80" role="img" aria-label="${NAME[id] || id}"><use href="#s-${id}"/></svg>`;
    }

    function render(root) {
        (root || document).querySelectorAll('[data-sym]').forEach(el => {
            if (el.dataset.symDone) return;
            el.innerHTML = svg(el.dataset.sym, el.className.includes('big') ? 'big' : '');
            el.dataset.symDone = '1';
        });
    }

    function mount() {
        if (!document.getElementById('sym-css')) document.head.insertAdjacentHTML('beforeend', css);
        if (!document.getElementById('s-res')) document.body.insertAdjacentHTML('afterbegin', sprite);
        render(document);
    }

    g.Sym = { svg, render, NAME, ids: Object.keys(S) };
    if (typeof document === 'undefined') return;                       // โหลดใน node (สคริปต์เข้ารหัส) ไม่ต้องวาด
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
    else mount();
})(typeof window !== 'undefined' ? window : globalThis);
