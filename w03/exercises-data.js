/* ===========================================
   แบบฝึกหัดสัปดาห์ที่ 3 — ไฟล์นี้มีเฉพาะโจทย์ ไม่มีเฉลย
   type: pick (เลือกคำตอบจาก options)
   ภาพสัญลักษณ์มาจาก assets/js/symbols.js (หน้าเว็บต้องโหลดไฟล์นั้นด้วย)
   =========================================== */
(function () {
    const S = id => '<svg class="sym ex" viewBox="0 0 120 80" role="img" aria-label="สัญลักษณ์"><use href="#s-' + id + '"/></svg>';
    const TF = ['ถูก', 'ผิด'];
    const STD = ['IEC', 'ANSI'];
    const ELEC = ['แบตเตอรี่', 'สวิตช์', 'ฟิวส์', 'หลอดไฟ', 'มอเตอร์', 'สายดิน', 'จุดต่อสาย', 'สายไขว้ (ไม่ต่อกัน)'];
    const FN = ['จ่ายพลังงานไฟฟ้าให้วงจร', 'เปิด-ปิดวงจร', 'ตัดวงจรเมื่อกระแสไหลเกิน', 'เปลี่ยนไฟฟ้าเป็นแสงสว่าง', 'เปลี่ยนไฟฟ้าเป็นการหมุน', 'ให้ไฟรั่วไหลลงดิน'];
    const ELX = ['ตัวต้านทาน', 'ตัวเก็บประจุ', 'ตัวเหนี่ยวนำ', 'ไดโอด', 'ไดโอดเปล่งแสง (LED)', 'ทรานซิสเตอร์'];
    const REF = ['R', 'C', 'L', 'D', 'Q'];
    const JOIN = ['ต่อถึงกัน', 'ไม่ต่อกัน'];
    const POL = ['ต้องแสดงขั้ว', 'ไม่มีขั้ว'];

    window.EXERCISES = {
        chapter: 'สัปดาห์ที่ 3 สัญลักษณ์ทางไฟฟ้าและอิเล็กทรอนิกส์',
        sets: [
            {
                id: 's1', title: 'ชุดที่ 1 ความหมายและมาตรฐานของสัญลักษณ์ (หัวข้อ 5.1)',
                parts: [
                    {
                        title: 'ตอนที่ 1 ข้อความต่อไปนี้ถูกหรือผิด',
                        items: [
                            { id: 'tf-1', type: 'pick', q: 'สัญลักษณ์ทำให้ช่างต่างประเทศที่พูดคนละภาษาอ่านแบบวงจรเดียวกันเข้าใจได้', options: TF },
                            { id: 'tf-2', type: 'pick', q: 'การวาดรูปอุปกรณ์จริงลงในแบบวงจร ชัดเจนและเร็วกว่าการใช้สัญลักษณ์', options: TF },
                            { id: 'tf-3', type: 'pick', q: 'IEC 60617 เป็นมาตรฐานที่นิยมใช้ในทวีปยุโรปและประเทศไทย', options: TF },
                            { id: 'tf-4', type: 'pick', q: 'ANSI เป็นมาตรฐานที่นิยมใช้ในสหรัฐอเมริกา', options: TF },
                            { id: 'tf-5', type: 'pick', q: 'ในแบบวงจรแผ่นเดียวกัน ใช้ตัวต้านทานแบบ IEC ปนกับแบบ ANSI ได้', options: TF },
                            { id: 'tf-6', type: 'pick', q: 'แบบวงจรช่วยให้ช่างตรวจสอบและซ่อมวงจรที่เสียได้ง่ายขึ้น', options: TF }
                        ]
                    },
                    {
                        title: 'ตอนที่ 2 สัญลักษณ์ต่อไปนี้เขียนตามมาตรฐานใด',
                        items: [
                            { id: 'st-1', type: 'pick', q: S('res') + ' ตัวต้านทาน', options: STD },
                            { id: 'st-2', type: 'pick', q: S('res-ansi') + ' ตัวต้านทาน', options: STD },
                            { id: 'st-3', type: 'pick', q: S('fuse-ansi') + ' ฟิวส์', options: STD },
                            { id: 'st-4', type: 'pick', q: S('fuse') + ' ฟิวส์', options: STD },
                            { id: 'st-5', type: 'pick', q: S('pot-ansi') + ' ตัวต้านทานปรับค่าได้', options: STD },
                            { id: 'st-6', type: 'pick', q: S('lamp') + ' หลอดไฟ', options: STD }
                        ]
                    }
                ]
            },
            {
                id: 's2', title: 'ชุดที่ 2 สัญลักษณ์ของอุปกรณ์ไฟฟ้าพื้นฐาน (หัวข้อ 5.2)',
                parts: [
                    {
                        title: 'ตอนที่ 1 สัญลักษณ์ต่อไปนี้คืออะไร',
                        items: [
                            { id: 'el-1', type: 'pick', q: S('motor'), options: ELEC },
                            { id: 'el-2', type: 'pick', q: S('cell'), options: ELEC },
                            { id: 'el-3', type: 'pick', q: S('cross'), options: ELEC },
                            { id: 'el-4', type: 'pick', q: S('fuse'), options: ELEC },
                            { id: 'el-5', type: 'pick', q: S('gnd'), options: ELEC },
                            { id: 'el-6', type: 'pick', q: S('lamp'), options: ELEC },
                            { id: 'el-7', type: 'pick', q: S('junction'), options: ELEC },
                            { id: 'el-8', type: 'pick', q: S('sw'), options: ELEC }
                        ]
                    },
                    {
                        title: 'ตอนที่ 2 อุปกรณ์ต่อไปนี้ทำหน้าที่อะไรในวงจร',
                        items: [
                            { id: 'fn-1', type: 'pick', q: S('lamp') + ' หลอดไฟ', options: FN },
                            { id: 'fn-2', type: 'pick', q: S('fuse') + ' ฟิวส์', options: FN },
                            { id: 'fn-3', type: 'pick', q: S('cell') + ' แบตเตอรี่', options: FN },
                            { id: 'fn-4', type: 'pick', q: S('gnd') + ' สายดิน', options: FN },
                            { id: 'fn-5', type: 'pick', q: S('sw') + ' สวิตช์', options: FN },
                            { id: 'fn-6', type: 'pick', q: S('motor') + ' มอเตอร์', options: FN }
                        ]
                    }
                ]
            },
            {
                id: 's3', title: 'ชุดที่ 3 สัญลักษณ์ของอุปกรณ์อิเล็กทรอนิกส์พื้นฐาน (หัวข้อ 5.3)',
                parts: [
                    {
                        title: 'ตอนที่ 1 สัญลักษณ์ต่อไปนี้คืออะไร',
                        items: [
                            { id: 'ex-1', type: 'pick', q: S('diode'), options: ELX },
                            { id: 'ex-2', type: 'pick', q: S('ind'), options: ELX },
                            { id: 'ex-3', type: 'pick', q: S('npn'), options: ELX },
                            { id: 'ex-4', type: 'pick', q: S('res'), options: ELX },
                            { id: 'ex-5', type: 'pick', q: S('led'), options: ELX },
                            { id: 'ex-6', type: 'pick', q: S('cap'), options: ELX }
                        ]
                    },
                    {
                        title: 'ตอนที่ 2 ตัวอักษรนำหน้าชื่อกำกับ (เช่น R1, C2) ของอุปกรณ์ต่อไปนี้คือตัวใด',
                        items: [
                            { id: 'rf-1', type: 'pick', q: S('cap') + ' ตัวเก็บประจุ', options: REF },
                            { id: 'rf-2', type: 'pick', q: S('npn') + ' ทรานซิสเตอร์', options: REF },
                            { id: 'rf-3', type: 'pick', q: S('res') + ' ตัวต้านทาน', options: REF },
                            { id: 'rf-4', type: 'pick', q: S('diode') + ' ไดโอด', options: REF },
                            { id: 'rf-5', type: 'pick', q: S('ind') + ' ตัวเหนี่ยวนำ', options: REF }
                        ]
                    }
                ]
            },
            {
                id: 's4', title: 'ชุดที่ 4 ข้อควรระวังในการเขียนสัญลักษณ์ (หัวข้อ 5.4)',
                parts: [
                    {
                        title: 'ตอนที่ 1 ภาพต่อไปนี้ สายต่อถึงกันหรือไม่',
                        items: [
                            { id: 'jn-1', type: 'pick', q: S('junction'), options: JOIN },
                            { id: 'jn-2', type: 'pick', q: S('cross'), options: JOIN },
                            { id: 'jn-3', type: 'pick', q: S('hop'), options: JOIN },
                            { id: 'jn-4', type: 'pick', q: S('junction4'), options: JOIN }
                        ]
                    },
                    {
                        title: 'ตอนที่ 2 อุปกรณ์ต่อไปนี้ ต้องเขียนให้เห็นขั้ว (บวก-ลบ หรือแอโนด-แคโทด) หรือไม่',
                        items: [
                            { id: 'pl-1', type: 'pick', q: S('cell') + ' แบตเตอรี่', options: POL },
                            { id: 'pl-2', type: 'pick', q: S('res') + ' ตัวต้านทาน', options: POL },
                            { id: 'pl-3', type: 'pick', q: S('cap-pol') + ' ตัวเก็บประจุแบบมีขั้ว', options: POL },
                            { id: 'pl-4', type: 'pick', q: S('lamp') + ' หลอดไฟ', options: POL },
                            { id: 'pl-5', type: 'pick', q: S('diode') + ' ไดโอด', options: POL },
                            { id: 'pl-6', type: 'pick', q: S('fuse') + ' ฟิวส์', options: POL }
                        ]
                    },
                    {
                        title: 'ตอนที่ 3 การเขียนต่อไปนี้ถูกหรือผิด',
                        items: [
                            { id: 'wr-1', type: 'pick', q: 'เขียน R1 = 220 Ω ไว้ข้างสัญลักษณ์ตัวต้านทาน', options: TF },
                            { id: 'wr-2', type: 'pick', q: 'วาดหลอดไฟตัวใหญ่ แต่ตัวต้านทานตัวเล็กนิดเดียวในแบบเดียวกัน', options: TF },
                            { id: 'wr-3', type: 'pick', q: 'ลืมเขียนจุดทึบตรงจุดต่อสาย ไม่เป็นไร คนอ่านเดาเอาได้', options: TF },
                            { id: 'wr-4', type: 'pick', q: 'ร่างด้วยดินสอก่อน แล้วใช้ไม้บรรทัดลงเส้นให้ตรง', options: TF }
                        ]
                    }
                ]
            }
        ]
    };
})();
