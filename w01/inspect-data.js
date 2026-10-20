/* ===========================================
   ข้อมูลหน้า "ตรวจสภาพเครื่องมือเสมือน" สัปดาห์ที่ 1 (ใช้แทนอุปกรณ์จริงในใบงานที่ 1.1)
   - svg: ภาพวาด viewBox 0 0 400 260
   - defect: วงกลมจุดชำรุด {x, y, r} (null = ไม่มีจุดชำรุด)
   - ok: true = ใช้ได้, false = ห้ามใช้
   - reasons: ตัวเลือกเหตุผล 4 ข้อ, reason: ลำดับข้อที่ถูก (เริ่ม 0)
   - name / use: เฉลยชื่อและหน้าที่ (เปิดหลังกดตรวจ) ใช้ตอบใบงานตอนที่ 1–2
   - photo: รูปของจริงสภาพดี (ถ้ามี) จาก assets/img
   =========================================== */
window.INSPECT = {
    chapter: 'สัปดาห์ที่ 1 ตรวจสภาพเครื่องมือและอุปกรณ์ป้องกันภัย (ใบงานที่ 1.1)',
    items: [
        {
            id: 'i1', group: 'tool', name: 'ไขควงแบนด้ามหุ้มฉนวน',
            use: 'ขัน-คลายสกรูหัวแบน ด้ามและก้านหุ้มฉนวนกันไฟถึงมือ',
            svg: `<rect x="30" y="98" width="175" height="64" rx="30" fill="#e8742c" stroke="#b5531a" stroke-width="4"/>
                <rect x="58" y="98" width="14" height="64" fill="#f7b733"/>
                <rect x="203" y="117" width="150" height="26" rx="6" fill="#e8742c" stroke="#b5531a" stroke-width="3"/>
                <path d="M353 120 L388 124 L388 136 L353 140 Z" fill="#a8a1b0" stroke="#5d5866" stroke-width="3"/>
                <path d="M120 98 L128 114 L118 126 L132 140 L124 162" fill="none" stroke="#2a2733" stroke-width="4" stroke-linejoin="round"/>
                <path d="M128 114 L140 118 M118 126 L106 132" stroke="#2a2733" stroke-width="3"/>`,
            defect: { x: 124, y: 130, r: 40 }, ok: false,
            reasons: ['ด้ามแตกร้าว ฉนวนเสื่อม ไฟอาจถึงมือ', 'ปลายไขควงเป็นสีเงิน', 'ด้ามเป็นสีส้ม มองเห็นยาก', 'ไม่พบความเสียหาย ใช้งานได้'], reason: 0,
            explain: 'รอยร้าวที่ด้ามทำให้ฉนวนกันไฟไม่ได้เต็มที่ กระแสอาจผ่านรอยร้าวถึงมือ ต้องแยกเก็บ ติดป้าย “ชำรุด ห้ามใช้” และแจ้งครู',
            photo: { src: '../assets/img/insulated-screwdriver.jpg', credit: 'Wiha Werkzeuge GmbH, CC BY-SA 4.0' }
        },
        {
            id: 'i2', group: 'tool', name: 'คีมตัด',
            use: 'ตัดสายไฟ ตัดขาอุปกรณ์ ด้ามหุ้มฉนวน',
            svg: `<g stroke-linecap="round" fill="none">
                  <path d="M128 112 L370 66" stroke="#a8a1b0" stroke-width="14"/>
                  <path d="M128 148 L370 194" stroke="#a8a1b0" stroke-width="14"/>
                  <path d="M150 108 L232 92" stroke="#d6455d" stroke-width="28"/>
                  <path d="M292 81 L370 66" stroke="#d6455d" stroke-width="28"/>
                  <path d="M150 152 L370 194" stroke="#d6455d" stroke-width="28"/>
                </g>
                <path d="M232 79 l6 8 l-5 6 l7 9 M292 69 l-6 7 l5 7 l-6 9" stroke="#a3203a" stroke-width="3" fill="none"/>
                <polygon points="28,130 78,98 140,106 140,154 78,162" fill="#a8a1b0" stroke="#5d5866" stroke-width="4"/>
                <line x1="32" y1="130" x2="128" y2="130" stroke="#5d5866" stroke-width="4"/>
                <circle cx="124" cy="130" r="10" fill="#5d5866"/>`,
            defect: { x: 262, y: 84, r: 42 }, ok: false,
            reasons: ['ปากคีมคมเกินไป', 'ฉนวนด้ามลอกจนเห็นเหล็ก ไฟถึงมือได้', 'ด้ามคีมยาวเกินไป', 'ไม่พบความเสียหาย ใช้งานได้'], reason: 1,
            explain: 'ด้ามที่ฉนวนหลุดลอกจนเห็นเนื้อเหล็ก ถ้าตัดสายที่มีไฟ กระแสจะผ่านเหล็กถึงมือทันที ห้ามใช้ และห้ามพันเทปซ่อมเอง',
            photo: { src: '../assets/img/diagonal-cutters.jpg', credit: 'CSonic, CC BY-SA 3.0' }
        },
        {
            id: 'i3', group: 'ppe', name: 'ถุงมือยาง (ชนิดฉนวนไฟฟ้า)',
            use: 'ป้องกันไฟดูดที่มือขณะทำงานใกล้ส่วนที่มีไฟ',
            svg: `<g fill="#f7b733" stroke="#9a6a00" stroke-width="4">
                  <rect x="140" y="40" width="28" height="90" rx="14"/>
                  <rect x="172" y="26" width="28" height="104" rx="14"/>
                  <rect x="204" y="30" width="28" height="100" rx="14"/>
                  <rect x="236" y="48" width="26" height="84" rx="13"/>
                  <rect x="96" y="118" width="28" height="78" rx="14" transform="rotate(-40 110 157)"/>
                  <rect x="134" y="104" width="132" height="104" rx="34"/>
                  <rect x="142" y="196" width="116" height="52" rx="6"/>
                </g>
                <text x="200" y="230" font-size="18" text-anchor="middle" fill="#7a5300" font-family="Kanit, sans-serif">CLASS 0 · 1000 V</text>
                <ellipse cx="186" cy="64" rx="6" ry="9" fill="#2a2733"/>
                <path d="M178 54 l-6 -6 M194 54 l6 -6 M186 76 l0 8" stroke="#7a5300" stroke-width="2.5"/>`,
            defect: { x: 186, y: 64, r: 30 }, ok: false,
            reasons: ['ถุงมือสีเหลืองไม่ได้มาตรฐาน', 'ข้อมือยาวเกินไป', 'ไม่พบความเสียหาย ใช้งานได้', 'มีรูรั่วที่นิ้ว กระแสผ่านรูได้'], reason: 3,
            explain: 'รูเล็กแค่ไหนก็ทำให้ถุงมือกันไฟไม่ได้ ก่อนใช้ทุกครั้งให้ตรวจโดย “ม้วนข้อมือขังลมไว้” แล้วฟังหรือสัมผัสว่ามีลมรั่วไหม'
        },
        {
            id: 'i4', group: 'tool', name: 'ปลั๊กพ่วง (รางปลั๊กไฟ)',
            use: 'ต่อเพิ่มเต้ารับ ใช้กับเครื่องใช้ไฟฟ้าไม่เกินพิกัด',
            svg: `<rect x="180" y="86" width="200" height="74" rx="14" fill="#fff" stroke="#5d5866" stroke-width="4"/>
                <g fill="#5d5866"><rect x="200" y="106" width="34" height="34" rx="8" fill="#eee8dc"/><rect x="246" y="106" width="34" height="34" rx="8" fill="#eee8dc"/><rect x="292" y="106" width="34" height="34" rx="8" fill="#eee8dc"/>
                  <rect x="209" y="116" width="5" height="13"/><rect x="220" y="116" width="5" height="13"/><rect x="255" y="116" width="5" height="13"/><rect x="266" y="116" width="5" height="13"/><rect x="301" y="116" width="5" height="13"/><rect x="312" y="116" width="5" height="13"/></g>
                <rect x="340" y="108" width="26" height="30" rx="6" fill="#d6455d"/>
                <text x="280" y="180" font-size="16" text-anchor="middle" fill="#5d5866" font-family="Kanit, sans-serif">มอก. 2432</text>
                <path d="M180 123 Q130 123 116 160" stroke="#2a2733" stroke-width="12" fill="none" stroke-linecap="round"/>
                <path d="M98 184 Q80 215 60 222" stroke="#2a2733" stroke-width="12" fill="none" stroke-linecap="round"/>
                <path d="M114 162 Q108 172 100 182" stroke="#3b6fd4" stroke-width="5" fill="none"/>
                <path d="M118 164 Q114 176 106 186" stroke="#b85a1f" stroke-width="5" fill="none"/>
                <path d="M107 170 l8 4 M103 177 l9 3" stroke="#e8742c" stroke-width="3"/>
                <rect x="22" y="206" width="44" height="34" rx="8" fill="#2a2733"/>`,
            defect: { x: 108, y: 172, r: 34 }, ok: false,
            reasons: ['ฉนวนสายขาดเห็นทองแดง เสี่ยงไฟดูดและลัดวงจร', 'มีสวิตช์สีแดง', 'มีเต้ารับแค่ 3 ช่อง', 'ไม่พบความเสียหาย ใช้งานได้'], reason: 0,
            explain: 'แม้ตัวรางมี มอก. แต่สายฉนวนขาดจนเห็นทองแดง จับโดนแล้วถูกไฟดูด และถ้าสายแตะกันจะลัดวงจร ต้องเปลี่ยนสายหรือเลิกใช้'
        },
        {
            id: 'i5', group: 'tool', name: 'เต้าเสียบ (ปลั๊กตัวผู้) ของเครื่องใช้ไฟฟ้า',
            use: 'เสียบเข้าเต้ารับเพื่อจ่ายไฟให้เครื่องใช้ไฟฟ้า',
            svg: `<path d="M20 150 Q70 150 120 140" stroke="#2a2733" stroke-width="12" fill="none" stroke-linecap="round"/>
                <rect x="112" y="88" width="120" height="96" rx="18" fill="#fff" stroke="#5d5866" stroke-width="4"/>
                <rect x="232" y="106" width="70" height="12" rx="3" fill="#c9a227" stroke="#8a6d00" stroke-width="2"/>
                <path d="M232 156 L266 156 L298 180" stroke="#c9a227" stroke-width="12" fill="none" stroke-linejoin="round"/>
                <ellipse cx="236" cy="156" rx="14" ry="22" fill="#2a2733" opacity=".6"/>
                <ellipse cx="226" cy="150" rx="10" ry="14" fill="#2a2733" opacity=".45"/>`,
            defect: { x: 258, y: 160, r: 44 }, ok: false,
            reasons: ['ตัวปลั๊กเป็นสีขาว', 'ขาปลั๊กบิดงอและมีรอยไหม้ เสียบไม่แน่น เกิดความร้อน', 'สายไฟยาวเกินไป', 'ไม่พบความเสียหาย ใช้งานได้'], reason: 1,
            explain: 'ขาบิดทำให้เสียบไม่แน่น หน้าสัมผัสน้อย จึงร้อนจนเกิดรอยไหม้ ใช้ต่อเสี่ยงไฟไหม้ ต้องเปลี่ยนเต้าเสียบใหม่ที่มี มอก.'
        },
        {
            id: 'i6', group: 'ppe', name: 'หมวกนิรภัย',
            use: 'ป้องกันศีรษะจากของตก กระแทก (ชนิดสำหรับงานไฟฟ้าช่วยกันไฟดูดที่ศีรษะ)',
            svg: `<path d="M84 186 Q84 58 200 58 Q316 58 316 186 Z" fill="#fff" stroke="#5d5866" stroke-width="5"/>
                <path d="M200 58 L200 186" stroke="#e6dccb" stroke-width="10"/>
                <rect x="56" y="180" width="288" height="20" rx="10" fill="#fff" stroke="#5d5866" stroke-width="5"/>
                <path d="M226 66 L216 92 L234 110 L220 134 L238 158" fill="none" stroke="#2a2733" stroke-width="4" stroke-linejoin="round"/>
                <path d="M234 110 l14 4" stroke="#2a2733" stroke-width="3"/>`,
            defect: { x: 228, y: 112, r: 46 }, ok: false,
            reasons: ['ไม่พบความเสียหาย ใช้งานได้', 'หมวกสีขาวสกปรกง่าย', 'เปลือกหมวกร้าว รับแรงกระแทกไม่ได้', 'กระบังหมวกสั้น'], reason: 2,
            explain: 'เปลือกหมวกที่ร้าวจะแตกเมื่อถูกกระแทก ป้องกันศีรษะไม่ได้ และกันไฟฟ้าไม่ได้ ต้องเปลี่ยนใบใหม่ทันที',
            photo: { src: '../assets/img/hard-hat.jpg', credit: 'Norbert Pietsch, CC BY-SA 4.0' }
        },
        {
            id: 'i7', group: 'ppe', name: 'รองเท้านิรภัย',
            use: 'ป้องกันเท้าจากของหล่นทับ ของมีคม และช่วยเป็นฉนวนจากพื้น',
            svg: `<path d="M92 200 L92 64 L176 64 L182 138 Q262 138 332 168 Q352 178 352 200 Z" fill="#3a3640" stroke="#2a2733" stroke-width="4"/>
                <g stroke="#a8a1b0" stroke-width="4"><line x1="150" y1="84" x2="176" y2="84"/><line x1="152" y1="100" x2="178" y2="100"/><line x1="154" y1="116" x2="180" y2="116"/></g>
                <path d="M60 200 L360 200 L360 226 L60 226 Z" fill="#8a6d4a"/>
                <path d="M266 200 L280 214 L292 204 L306 222 L318 200 L330 226 L262 226 Z" fill="#fff"/>
                <path d="M266 200 L280 214 L292 204 L306 222 L318 200" fill="none" stroke="#5a4630" stroke-width="3"/>`,
            defect: { x: 294, y: 210, r: 38 }, ok: false,
            reasons: ['เชือกผูกรองเท้าสีดำ', 'พื้นรองเท้าฉีกขาด ของมีคมทะลุได้ ฉนวนจากพื้นลดลง', 'รองเท้าหุ้มข้อสูง', 'ไม่พบความเสียหาย ใช้งานได้'], reason: 1,
            explain: 'พื้นที่ฉีกทำให้ตะปูหรือเศษโลหะทะลุถึงเท้า น้ำเข้าได้ และกันไฟจากพื้นได้น้อยลง ควรเปลี่ยนคู่ใหม่',
            photo: { src: '../assets/img/safety-boots.jpg', credit: 'Francis Flinch, CC BY 3.0' }
        },
        {
            id: 'i8', group: 'tool', name: 'ไขควงลองไฟ (ไขควงเช็กไฟ)',
            use: 'ตรวจว่าจุดนั้นมีไฟหรือไม่ (หลอดนีออนในด้ามติด = มีไฟ)',
            svg: `<path d="M30 122 L118 124 L118 136 L30 138 Z" fill="#a8a1b0" stroke="#5d5866" stroke-width="3"/>
                <rect x="96" y="118" width="40" height="24" rx="6" fill="#e8742c"/>
                <rect x="134" y="104" width="200" height="52" rx="22" fill="#dff0fb" stroke="#3b6fd4" stroke-width="4"/>
                <rect x="172" y="120" width="56" height="18" rx="9" fill="#ffb3a3" stroke="#d6455d" stroke-width="2"/>
                <rect x="240" y="124" width="60" height="10" rx="5" fill="#a8a1b0"/>
                <rect x="332" y="114" width="32" height="32" rx="8" fill="#a8a1b0" stroke="#5d5866" stroke-width="3"/>
                <path d="M250 96 L250 108" stroke="#5d5866" stroke-width="6"/>
                <path d="M262 104 L254 118 L268 128 L258 142 L266 156" fill="none" stroke="#2a2733" stroke-width="4" stroke-linejoin="round"/>
                <path d="M268 128 L282 124" stroke="#2a2733" stroke-width="3"/>`,
            defect: { x: 264, y: 130, r: 36 }, ok: false,
            reasons: ['ด้ามใสแตกร้าว หลอดอาจไม่ติด อ่านผลผิด และไฟถึงมือได้', 'ด้ามโปร่งใสมองเห็นข้างใน', 'ปลายไขควงเล็ก', 'ไม่พบความเสียหาย ใช้งานได้'], reason: 0,
            explain: 'ไขควงลองไฟที่ด้ามแตกอาจบอกว่า “ไม่มีไฟ” ทั้งที่มีไฟ ซึ่งอันตรายมาก และกระแสอาจผ่านรอยแตกถึงมือ ห้ามใช้',
            photo: { src: '../assets/img/test-screwdriver.jpg', credit: 'August Geyler, CC BY-SA 4.0' }
        },
        {
            id: 'i9', group: 'tool', name: 'มัลติมิเตอร์ (เครื่องวัดไฟฟ้า)',
            use: 'วัดแรงดัน กระแส ความต้านทาน ตรวจว่ามีไฟหรือไม่',
            svg: `<path d="M170 222 Q120 250 70 214 Q40 190 50 150" stroke="#d6455d" stroke-width="8" fill="none"/>
                <path d="M222 222 Q290 252 334 210 Q356 186 346 150" stroke="#2a2733" stroke-width="8" fill="none"/>
                <rect x="40" y="96" width="18" height="58" rx="6" fill="#d6455d"/><line x1="49" y1="96" x2="49" y2="70" stroke="#a8a1b0" stroke-width="5"/>
                <rect x="337" y="96" width="18" height="58" rx="6" fill="#2a2733"/><line x1="346" y1="96" x2="346" y2="70" stroke="#a8a1b0" stroke-width="5"/>
                <rect x="120" y="22" width="160" height="216" rx="18" fill="#f7b733" stroke="#9a6a00" stroke-width="4"/>
                <rect x="140" y="42" width="120" height="54" rx="6" fill="#cfe3c5" stroke="#5d5866" stroke-width="3"/>
                <text x="200" y="82" font-size="30" text-anchor="middle" fill="#2a2733" font-family="Prompt, sans-serif">220.0</text>
                <line x1="150" y1="50" x2="170" y2="62" stroke="#9cb08f" stroke-width="2"/>
                <circle cx="200" cy="154" r="36" fill="#5d5866"/><rect x="196" y="120" width="8" height="30" rx="3" fill="#fff"/>
                <circle cx="170" cy="216" r="9" fill="#d6455d"/><circle cx="200" cy="216" r="9" fill="#2a2733"/><circle cx="230" cy="216" r="9" fill="#2a2733"/>`,
            defect: null, ok: true,
            reasons: ['สายวัดยาวเกินไป', 'หน้าจอมีรอยขีดข่วนเล็กน้อย จึงห้ามใช้', 'ไม่พบความเสียหายที่เป็นอันตราย สายวัดและฉนวนสมบูรณ์', 'ตัวเครื่องสีเหลือง'], reason: 2,
            explain: 'สายวัด ปลายโพรบ และตัวเครื่องสมบูรณ์ รอยขีดข่วนเล็กน้อยบนจอไม่ทำให้อันตราย ใช้งานได้ (แต่ต้องตั้งย่านวัดให้ถูกทุกครั้ง)',
            photo: { src: '../assets/img/multimeter.jpg', credit: 'Anselm Schüler, CC BY-SA 4.0' }
        },
        {
            id: 'i10', group: 'ppe', name: 'แว่นตานิรภัย',
            use: 'ป้องกันเศษโลหะ เศษสายไฟ และประกายไฟกระเด็นเข้าตา',
            svg: `<path d="M40 110 L20 100 M360 110 L380 100" stroke="#2a2733" stroke-width="8" stroke-linecap="round"/>
                <path d="M40 104 Q40 80 70 80 L180 80 Q190 80 190 92 L190 140 Q190 176 140 176 L90 176 Q40 176 40 140 Z" fill="#dff0fb" stroke="#2a2733" stroke-width="7"/>
                <path d="M360 104 Q360 80 330 80 L220 80 Q210 80 210 92 L210 140 Q210 176 260 176 L310 176 Q360 176 360 140 Z" fill="#dff0fb" stroke="#2a2733" stroke-width="7"/>
                <path d="M190 100 Q200 90 210 100" stroke="#2a2733" stroke-width="7" fill="none"/>
                <path d="M70 100 L110 96 M240 100 L280 96" stroke="#fff" stroke-width="8" stroke-linecap="round"/>`,
            defect: null, ok: true,
            reasons: ['ไม่พบความเสียหาย เลนส์และกรอบสมบูรณ์', 'เลนส์ใสเกินไป', 'ไม่มีสายคล้องคอ', 'ขาแว่นยาวเกินไป'], reason: 0,
            explain: 'เลนส์ไม่แตก ไม่มีรอยร้าว กรอบและขาแว่นสมบูรณ์ ใช้งานได้ ทำความสะอาดก่อนใส่ทุกครั้งเพื่อให้มองเห็นชัด',
            photo: { src: '../assets/img/safety-glasses.jpg', credit: 'Jacek Halicki, CC BY-SA 4.0' }
        }
    ]
};
