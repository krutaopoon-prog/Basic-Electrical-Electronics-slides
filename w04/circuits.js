/* ===========================================
   Circuits — แบบวงจรของสัปดาห์ที่ 4 นิยามครั้งเดียว ใช้ทุกหน้า
   ต้องโหลด assets/js/symbols.js ก่อนไฟล์นี้

   <span data-circuit="c2"></span>                วาดแบบวงจร
     data-flow="1"                                ไล่กระแสทีละขั้น (ใช้กับสไลด์ ทุกขั้นเป็น .frag)
     data-no-val="R1" data-no-ref="SW1"           ไม่เขียนค่า / ไม่เขียนชื่อกำกับของอุปกรณ์ที่ระบุ
     data-no-pol="1"                              แบตเตอรี่ไม่บอกขั้ว
     data-flip="D1"                               กลับด้านอุปกรณ์
     data-plain="1"                               ไม่เขียนชื่อและค่าเลย
     data-spots="560,60,50;740,300,70"            จุดเฉลยสำหรับกิจกรรม .hunt (x,y,รัศมี)
   <span data-real="ก"></span>                    ภาพการต่อจริง (ใบงานตอนที่ 3)

   ทุกอุปกรณ์วางด้วยจุดกึ่งกลาง ขาห่างจากกลาง 60 หน่วย v = วางแนวตั้ง
   =========================================== */
(function (g) {
    'use strict';

    const P = (ref, sym, x, y, val, v) => ({ ref, sym, x, y, val: val || '', v: !!v });

    /* วงจรเรียงเดี่ยว: แบตซ้าย อุปกรณ์แถวบน อุปกรณ์ตัวสุดท้ายอยู่ขวา */
    function series(name, bt, tops, right) {
        const xs = tops.length === 1 ? [320] : [220, 400];
        const parts = [P('BT1', 'cell', 70, 230, bt, true)];
        tops.forEach((t, i) => parts.push(P(t[0], t[1], xs[i], 60, t[2])));
        parts.push(P(right[0], right[1], 570, 230, right[2], true));
        const wires = [[[70, 170], [70, 60], [xs[0] - 60, 60]]];
        for (let i = 1; i < xs.length; i++) wires.push([[xs[i - 1] + 60, 60], [xs[i] - 60, 60]]);
        wires.push([[xs[xs.length - 1] + 60, 60], [570, 60], [570, 170]]);
        wires.push([[570, 290], [570, 400], [70, 400], [70, 290]]);
        const order = tops.map(t => t[0]).concat(right[0]);
        return {
            name, w: 680, h: 450, parts, wires, dots: [],
            paths: [order],
            flow: order.map((r, i) => [i, r]).concat([[order.length, null]])
        };
    }

    /* แบตซ้าย อุปกรณ์ 2 ตัวบน แล้วแยก 2 ทาง: ทางกลาง 1 ตัว ทางขวา 1 ตัวหรือ 2 ตัวซ้อนกัน */
    function branch(name, first, a, b, mid, right) {
        const parts = [first, P(a[0], a[1], 200, 60, a[2]), P(b[0], b[1], 380, 60, b[2]), P(mid[0], mid[1], 560, 230, mid[2], true)];
        const wires = [
            [[70, 170], [70, 60], [140, 60]], [[260, 60], [320, 60]], [[440, 60], [560, 60]], [[560, 60], [560, 170]],
            [[560, 290], [560, 400]], [[560, 400], [70, 400], [70, 290]]
        ];
        if (right.length === 2) {
            parts.push(P(right[0][0], right[0][1], 740, 140, right[0][2], true), P(right[1][0], right[1][1], 740, 320, right[1][2], true));
            wires.push([[560, 60], [740, 60], [740, 80]], [[740, 200], [740, 260]], [[740, 380], [740, 400], [560, 400]]);
        } else {
            parts.push(P(right[0][0], right[0][1], 740, 230, right[0][2], true));
            wires.push([[560, 60], [740, 60], [740, 170]], [[740, 290], [740, 400], [560, 400]]);
        }
        return { name, w: 880, h: 450, parts, wires, dots: [[560, 60], [560, 400]] };
    }

    /* สามหลอด มีสายไขว้ตรงกลาง: dot = true คือสายต่อถึงกัน */
    function crossing(name, dot) {
        return {
            name, w: 640, h: 450, dots: dot ? [[340, 190], [190, 400], [340, 400]] : [[190, 400], [340, 400]],
            parts: [P('BT1', 'cell', 70, 230, '6 V', true), P('SW1', 'sw', 200, 60), P('LP1', 'lamp', 190, 320, '', true), P('LP2', 'lamp', 340, 320, '', true), P('LP3', 'lamp', 490, 320, '', true)],
            wires: [
                [[70, 170], [70, 60], [140, 60]], [[260, 60], [340, 60], [340, 260]],
                [[190, 260], [190, 190], [490, 190], [490, 260]],
                [[190, 380], [190, 400]], [[340, 380], [340, 400]], [[490, 380], [490, 400], [70, 400], [70, 290]]
            ],
            paths: dot ? [['SW1', 'LP1'], ['SW1', 'LP2'], ['SW1', 'LP3']] : [['SW1', 'LP2']]
        };
    }

    const CIR = {
        c0: Object.assign(branch('แบบวงจรกาต้มน้ำไฟฟ้า แบบย่อ', P('AC1', 'ac', 70, 230, '220 V', true),
            ['F1', 'fuse', '10 A'], ['SW1', 'sw', ''], ['H1', 'res', '1,500 W'], [['LP1', 'lamp', '']]), {}),
        c1: series('วงจรไฟฉาย', '3 V', [['SW1', 'sw', '']], ['LP1', 'lamp', '']),
        c2: series('วงจรตัวอย่าง แบตเตอรี่ สวิตช์ ตัวต้านทาน หลอดไฟ', '12 V', [['SW1', 'sw', ''], ['R1', 'res', '220 Ω']], ['LP1', 'lamp', '']),
        c2b: {
            name: 'วงจรเดียวกับตัวอย่าง แต่วางตำแหน่งต่างออกไป', w: 680, h: 450, dots: [],
            parts: [P('BT1', 'cell', 570, 230, '12 V', true), P('SW1', 'sw', 400, 60), P('R1', 'res', 220, 60, '220 Ω'), P('LP1', 'lamp', 70, 230, '', true)],
            wires: [[[570, 170], [570, 60], [460, 60]], [[340, 60], [280, 60]], [[160, 60], [70, 60], [70, 170]], [[70, 290], [70, 400], [570, 400], [570, 290]]],
            paths: [['SW1', 'R1', 'LP1']]
        },
        c11: Object.assign(branch('วงจรสองหลอด แยกสองทาง', P('BT1', 'cell', 70, 230, '6 V', true),
            ['SW1', 'sw', ''], ['R1', 'res', '10 Ω'], ['LP1', 'lamp', ''], [['LP2', 'lamp', '']]), {
            paths: [['SW1', 'R1', 'LP1'], ['SW1', 'R1', 'LP2']],
            flow: [[0, 'SW1'], [1, 'R1'], [2, null], [3, 'LP1'], [[4, 5], null], [6, 'LP2', '#00878f'], [7, null, '#00878f']]
        }),
        c3: series('วงจร LED', '9 V', [['SW1', 'sw', ''], ['R1', 'res', '470 Ω']], ['D1', 'led', '']),
        c4: series('วงจรมอเตอร์มีฟิวส์', '12 V', [['F1', 'fuse', '1 A'], ['SW1', 'sw', '']], ['M1', 'motor', '']),
        c5: Object.assign(branch('วงจรหลอดไฟและไฟแสดงสถานะ', P('BT1', 'cell', 70, 230, '12 V', true),
            ['F1', 'fuse', '1 A'], ['SW1', 'sw', ''], ['LP1', 'lamp', '12 V'], [['R1', 'res', '680 Ω'], ['D1', 'led', '']]), {
            paths: [['F1', 'SW1', 'LP1'], ['F1', 'SW1', 'R1', 'D1']]
        }),
        c6: Object.assign(branch('วงจรกันต่อขั้วผิดและกรองไฟ', P('BT1', 'cell', 70, 230, '9 V', true),
            ['D1', 'diode', '1N4007'], ['SW1', 'sw', ''], ['C1', 'cap-pol', '100 µF'], [['R1', 'res', '1 kΩ'], ['D2', 'led', '']]), {
            paths: [['D1', 'SW1', 'R1', 'D2']],
            hints: { C1: 'C1 รับกระแสแค่ช่วงชาร์จสั้น ๆ พอเต็มแล้วกระแสตรงจะหยุดไหลผ่านทางนี้ ให้ไล่ทาง R1 ต่อ' }
        }),
        c7: {
            name: 'วงจรทรานซิสเตอร์ขับ LED', w: 780, h: 460,
            parts: [P('BT1', 'cell', 70, 240, '9 V', true), P('SW1', 'sw', 200, 60), P('R1', 'res', 440, 380, '10 kΩ'), P('R2', 'res', 620, 130, '470 Ω', true), P('D1', 'led', 620, 260, '', true), P('Q1', 'npn', 604, 380)],
            wires: [
                [[70, 180], [70, 60], [140, 60]], [[260, 60], [620, 60], [620, 70]], [[330, 60], [330, 380], [380, 380]],
                [[500, 380], [544, 380]], [[620, 190], [620, 200]], [[620, 320], [620, 340]], [[620, 420], [70, 420], [70, 300]]
            ],
            dots: [[330, 60]],
            paths: [['SW1', 'R1', 'Q1'], ['SW1', 'R2', 'D1', 'Q1']]
        },
        c12: series('วงจรไฟหน้า', '12 V', [['F1', 'fuse', '5 A'], ['R1', 'res', '10 Ω']], ['LP1', 'lamp', '']),
        c13: series('วงจรมอเตอร์', '6 V', [['SW1', 'sw', '']], ['M1', 'motor', '']),
        c8a: crossing('สามหลอด สายกลางมีจุดทึบ', true),
        c8b: crossing('สามหลอด สายกลางไม่มีจุดทึบ', false),
        c10: Object.assign(branch('วงจรสำหรับกิจกรรมจับผิดการอ่าน', P('BT1', 'cell', 70, 230, '12 V', true),
            ['R1', 'res', '100 Ω'], ['SW1', 'sw', ''], ['LP1', 'lamp', '12 V'], [['R2', 'res', '2.2 kΩ'], ['D1', 'led', '']]), {})
    };

    const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
    const list = s => (s ? String(s).split(',').map(x => x.trim()) : []);

    function pins(p) {
        if (p.sym === 'npn') return { B: [p.x - 60, p.y], C: [p.x + 16, p.y - 40], E: [p.x + 16, p.y + 40] };
        return p.v ? { a: [p.x, p.y - 60], b: [p.x, p.y + 60] } : { a: [p.x - 60, p.y], b: [p.x + 60, p.y] };
    }

    function txt(x, y, s, extra) {
        return `<text x="${x}" y="${y}" fill="currentColor" stroke="none" font-size="26" font-weight="600" text-anchor="middle" ${extra || ''}>${esc(s)}</text>`;
    }

    /* แบตเตอรี่ แหล่งจ่าย และมอเตอร์ในแนวตั้ง วาดเองเพื่อให้ตัวอักษรกับเครื่องหมายไม่เอียงตาม */
    function vertical(p, o) {
        const { x, y } = p, st = 'fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"';
        if (p.sym === 'cell') {
            const noPol = o.noPol;
            return `<g ${st}><path d="M${x} ${y - 60} V${y - 7} M${x - 26} ${y - 7} H${x + 26}"/>
                <path d="M${x - (noPol ? 26 : 13)} ${y + 7} H${x + (noPol ? 26 : 13)}" stroke-width="${noPol ? 3.5 : 7}"/><path d="M${x} ${y + 7} V${y + 60}"/></g>`
                + (noPol ? '' : txt(x - 40, y - 12, '+') + txt(x - 40, y + 30, '−'));
        }
        if (p.sym === 'ac') return `<g ${st}><path d="M${x} ${y - 60} V${y - 22} M${x} ${y + 22} V${y + 60}"/><circle cx="${x}" cy="${y}" r="22"/>
            <path d="M${x - 13} ${y} C${x - 9} ${y - 12}, ${x - 4} ${y - 12}, ${x} ${y} S${x + 9} ${y + 12}, ${x + 13} ${y}"/></g>`;
        if (p.sym === 'motor') return `<g ${st}><path d="M${x} ${y - 60} V${y - 20} M${x} ${y + 20} V${y + 60}"/><circle cx="${x}" cy="${y}" r="20"/></g>` + txt(x, y + 9, 'M');
        return null;
    }

    function partSvg(p, o) {
        const hit = p.v ? `x="${p.x - 44}" y="${p.y - 60}" width="88" height="120"` : `x="${p.x - 60}" y="${p.y - 44}" width="120" height="88"`;
        const flip = o.flip.includes(p.ref);
        let body = p.v && !flip ? vertical(p, o) : null;
        if (!body) {
            const rot = p.v ? `transform="rotate(${flip ? -90 : 90} ${p.x} ${p.y})"` : '';
            body = `<use href="#s-${p.sym}" x="${p.x - 60}" y="${p.y - 40}" width="120" height="80" ${rot}/>`;
        }
        return `<g class="cp" data-ref="${p.ref}"><rect class="cp-hit" ${hit} rx="14"/>${body}</g>`;
    }

    function labelSvg(p, o) {
        if (o.plain) return '';
        const ref = o.noRef.includes(p.ref) ? '' : p.ref, val = o.noVal.includes(p.ref) ? '' : p.val;
        if (!ref && !val) return '';
        if (p.sym === 'npn') return `<text class="clab" x="${p.x + 58}" y="${p.y + 8}">${esc(ref)}</text>`;
        if (p.v) return `<text class="clab" x="${p.x + 52}" y="${p.y - 4}">${esc(ref)}</text><text class="clab" x="${p.x + 52}" y="${p.y + 26}">${esc(val)}</text>`;
        return `<text class="clab" text-anchor="middle" x="${p.x}" y="${p.y - 38}">${esc((ref + ' ' + val).trim())}</text>`;
    }

    /* ลูกศรทิศกระแส วางกลางช่วงสายที่ยาวที่สุด */
    function arrow(pts, col) {
        let best = 0, a = pts[0], b = pts[1];
        for (let i = 1; i < pts.length; i++) {
            const d = Math.abs(pts[i][0] - pts[i - 1][0]) + Math.abs(pts[i][1] - pts[i - 1][1]);
            if (d > best) { best = d; a = pts[i - 1]; b = pts[i]; }
        }
        const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, t = Math.atan2(b[1] - a[1], b[0] - a[0]), s = 15;
        const pt = (r, q) => `${(mx + r * Math.cos(t + q)).toFixed(1)},${(my + r * Math.sin(t + q)).toFixed(1)}`;
        return `<polygon points="${pt(s, 0)} ${pt(s, 2.5)} ${pt(s, -2.5)}" fill="${col}"/>`;
    }

    function flowSvg(c) {
        return c.flow.map(([w, ref, col]) => {
            const color = col || '#e8742c';
            let s = [].concat(w).map(i => {
                const pts = c.wires[i];
                return `<polyline points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>` + arrow(pts, color);
            }).join('');
            const p = ref && c.parts.find(x => x.ref === ref);
            if (p) s += `<rect ${p.v ? `x="${p.x - 44}" y="${p.y - 60}" width="88" height="120"` : `x="${p.x - 60}" y="${p.y - 34}" width="120" height="68"`} rx="14" fill="none" stroke="${color}" stroke-width="4"/>`;
            return `<g class="frag">${s}</g>`;
        }).join('');
    }

    function spotSvg(s, i) {
        const [x, y, r] = s;
        return `<g class="spot"><circle class="hit" cx="${x}" cy="${y}" r="${r}"/><circle class="ring" cx="${x}" cy="${y}" r="${r}"/><g class="tag"><circle cx="${x + r * .72}" cy="${y - r * .72}" r="20"/><text x="${x + r * .72}" y="${y - r * .72 + 10}">${i + 1}</text></g></g>`;
    }

    function svg(id, o) {
        const c = CIR[id];
        if (!c) throw new Error('ไม่มีวงจร ' + id);
        o = Object.assign({ noVal: [], noRef: [], flip: [], noPol: false, plain: false, flow: false, spots: [] }, o || {});
        return `<svg class="ckt" viewBox="0 0 ${c.w} ${c.h}" role="img" aria-label="${c.name}">
            <g fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${c.wires.map(w => `<polyline points="${w.map(p => p.join(',')).join(' ')}"/>`).join('')}</g>
            ${(c.dots || []).map(d => `<circle cx="${d[0]}" cy="${d[1]}" r="7" fill="currentColor"/>`).join('')}
            ${c.parts.map(p => partSvg(p, o)).join('')}${c.parts.map(p => labelSvg(p, o)).join('')}
            ${o.flow && c.flow ? flowSvg(c) : ''}${o.spots.map(spotSvg).join('')}</svg>`;
    }

    /* ---------- ภาพการต่อจริง ---------- */
    const SLOT = { TL: [150, 100], TR: [510, 100], BL: [150, 300], BR: [510, 300] };
    const REAL = {
        'ไฟฉาย': { BT: ['BL', '3 V'], SW: ['TL'], LP: ['TR'], order: ['BT', 'SW', 'LP'] },
        'ก': { BT: ['TL', '6 V'], SW: ['TR'], R: ['BR', '10 Ω'], LP: ['BL'], order: ['BT', 'SW', 'R', 'LP'] },
        'ข': { BT: ['BR', '6 V'], R: ['TL', '22 Ω'], SW: ['BL'], LP: ['TR'], order: ['BT', 'R', 'SW', 'LP'] },
        'ค': { BT: ['TR', '6 V'], LP: ['BL'], R: ['TL', '47 Ω'], SW: ['BR'], order: ['BT', 'LP', 'R', 'SW'] }
    };
    const TAG = (x, y, s) => `<g><rect x="${x - 44}" y="${y - 22}" width="88" height="32" rx="6" fill="#fff" stroke="#5d5866" stroke-width="2"/><text x="${x}" y="${y + 2}" font-size="22" font-weight="600" text-anchor="middle" fill="#2a2733">${s}</text></g>`;
    const REAL_DRAW = {
        BT: (x, y, v) => `<rect x="${x - 76}" y="${y - 30}" width="152" height="60" rx="10" fill="#3b3843"/><rect x="${x - 76}" y="${y - 30}" width="42" height="60" rx="10" fill="#e8742c"/>
            <text x="${x - 55}" y="${y + 12}" font-size="36" font-weight="700" text-anchor="middle" fill="#fff">+</text><text x="${x + 52}" y="${y + 11}" font-size="36" font-weight="700" text-anchor="middle" fill="#fff">−</text>` + TAG(x, y - 48, v),
        SW: (x, y) => `<rect x="${x - 50}" y="${y - 20}" width="100" height="42" rx="8" fill="#cfd4dc" stroke="#5d5866" stroke-width="3"/><path d="M${x} ${y} L${x + 30} ${y - 46}" stroke="#2a2733" stroke-width="11" stroke-linecap="round"/><circle cx="${x}" cy="${y}" r="9" fill="#2a2733"/>`,
        R: (x, y, v) => `<path d="M${x - 66} ${y} H${x + 66}" stroke="#8d8795" stroke-width="5"/><rect x="${x - 44}" y="${y - 17}" width="88" height="34" rx="15" fill="#e5cda4" stroke="#8a6d3f" stroke-width="3"/>` + TAG(x, y - 40, v),
        LP: (x, y) => `<circle cx="${x}" cy="${y - 38}" r="38" fill="#fff6c8" stroke="#c99400" stroke-width="4"/><path d="M${x - 16} ${y - 28} Q${x} ${y - 66} ${x + 16} ${y - 28}" stroke="#e8742c" stroke-width="4" fill="none"/><rect x="${x - 40}" y="${y - 6}" width="80" height="34" rx="6" fill="#a8a1b0" stroke="#5d5866" stroke-width="3"/>`
    };
    const realPins = {
        BT: (x, y) => ({ a: [x + 76, y], b: [x - 76, y] }), /* b = ขั้วบวก สายเส้นแรกออกจากขั้วบวก สายเส้นสุดท้ายกลับเข้าขั้วลบ (a) */
        SW: (x, y) => ({ a: [x - 50, y + 4], b: [x + 50, y + 4] }),
        R: (x, y) => ({ a: [x - 66, y], b: [x + 66, y] }), LP: (x, y) => ({ a: [x - 40, y + 12], b: [x + 40, y + 12] })
    };

    function real(id) {
        const r = REAL[id];
        if (!r) throw new Error('ไม่มีภาพการต่อจริง ' + id);
        const COL = ['#d6455d', '#3b6fd4', '#2e9b57', '#c99400', '#2a2733'];
        const pinOf = k => realPins[k](SLOT[r[k][0]][0], SLOT[r[k][0]][1]);
        const seq = r.order.map(k => pinOf(k));
        let wires = '', dots = '';
        const n = seq.length;
        for (let i = 0; i < n; i++) {
            const p = seq[i].b, q = seq[(i + 1) % n].a;
            const dy = (i % 2 ? -1 : 1) * 110, dx = (i % 2 ? 60 : -60);
            wires += `<path d="M${p[0]} ${p[1]} C${p[0] + dx} ${p[1] + dy}, ${q[0] - dx} ${q[1] + dy}, ${q[0]} ${q[1]}" fill="none" stroke="${COL[i === n - 1 ? 4 : i]}" stroke-width="6" stroke-linecap="round"/>`;
            dots += [p, q].map(t => `<circle cx="${t[0]}" cy="${t[1]}" r="7" fill="#fff" stroke="#2a2733" stroke-width="3"/>`).join('');
        }
        const body = r.order.map(k => REAL_DRAW[k](SLOT[r[k][0]][0], SLOT[r[k][0]][1], r[k][1])).join('');
        return `<svg class="ckt real" viewBox="0 0 680 400" role="img" aria-label="ภาพการต่อวงจรจริง ชุด ${id}"><rect x="4" y="4" width="672" height="392" rx="16" fill="#f4ead8" stroke="#c9b48c" stroke-width="3"/>${wires}${body}${dots}</svg>`;
    }

    function render(root) {
        (root || document).querySelectorAll('[data-circuit]').forEach(el => {
            if (el.dataset.cktDone) return;
            const d = el.dataset;
            el.innerHTML = svg(d.circuit, {
                flow: !!d.flow, noVal: list(d.noVal), noRef: list(d.noRef), flip: list(d.flip), noPol: !!d.noPol, plain: !!d.plain,
                spots: d.spots ? d.spots.split(';').map(s => s.split(',').map(Number)) : []
            });
            d.cktDone = '1';
        });
        (root || document).querySelectorAll('[data-real]').forEach(el => {
            if (el.dataset.cktDone) return;
            el.innerHTML = real(el.dataset.real);
            el.dataset.cktDone = '1';
        });
    }

    const css = `<style id="ckt-css">
        [data-circuit], [data-real] { display: block; }
        svg.ckt { display: block; width: 100%; height: auto; color: #2a2733; overflow: visible; }
        svg.ckt text { font-family: 'Kanit', 'Sarabun', sans-serif; }
        .ckt .clab { fill: #00878f; font-size: 25px; font-weight: 500; }
        .ckt .cp-hit { fill: transparent; }
        .ckt .cp.on { color: #e8742c; }
        .ckt .cp.on .cp-hit { fill: rgba(232, 116, 44, .16); }
        .ckt .cp.bad .cp-hit { fill: rgba(214, 69, 93, .22); }
        @media print { .ckt .clab { fill: #000; } }
    </style>`;

    g.Circuits = { svg, real, render, CIR, REAL, pins };
    if (typeof document === 'undefined') return;
    function mount() {
        if (!document.getElementById('ckt-css')) document.head.insertAdjacentHTML('beforeend', css);
        render(document);
        new MutationObserver(() => render(document)).observe(document.body, { childList: true, subtree: true });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
    else mount();
})(typeof window !== 'undefined' ? window : globalThis);
