// Bản dịch tiếng Việt cho các trang hướng dẫn dài trong lib/topic-content.ts.
//
// Nội dung vẫn bám sát lớp dữ kiện trung thực trong game-facts.ts: mọi danh sách
// sinh ra từ đó đều được dịch lại bằng các bảng tra cứu bên dưới, nên số liệu
// (chiều cao, thứ tự, số lượng) luôn khớp với bản gốc. Những câu chữ nào thuộc
// về bản dịch thuần tuý thì viết tay để đọc như một trang hướng dẫn tiếng Việt.
//
// Nguyên tắc bất di bất dịch: mọi tiêu điểm "đã xác nhận / đang lên kế hoạch /
// chưa được xác minh" phải được giữ nguyên. Đừng biến một lời nói "có thể" thành
// "chắc chắn".

import {
  AGE_ORDER_OLDEST_FIRST,
  CONTENT_WARNINGS,
  ENDINGS,
  PLATFORMS,
  SHIPPED_LANGUAGES,
  STRENGTH_RANKING,
  UNVERIFIED_CLAIMS,
} from './game-facts';
import type { GuidePage } from './topic-content';

/** Tên các kết cục, giữ nguyên tên chính thức khi có dấu nháy. */
const VI_ENDING_NAMES: Record<string, string> = {
  missing: '"Missing"',
  pierrot: 'Kết cục của Pierrot (tình yêu)',
  harlequin: 'Kết cục của Harlequin (tình yêu)',
  protagonist: 'Kết cục của nhân vật chính (không có tình yêu)',
  'all-together': '"All together" (kết cục đa tình cảm)',
};

/** Mô tả ngắn của từng kết cục, dịch từ `summary` trong game-facts.ts. */
const VI_ENDING_SUMMARIES: Record<string, string> = {
  missing:
    'Kết cục duy nhất hiện có trong bản build công khai. Đạt được ở Day 1 khi nhân vật chính không phản ứng lúc Pierrot bị chế nhạo; nhân vật chính được đưa một vé màu hồng, bị đưa đến lều màu hồng và bị mọi thành viên trong rạp xiếc từ chối.',
  pierrot:
    'Kết cục tình yêu, trong đó nhân vật chính ở lại với Pierrot. Nhà phát triển liệt kê là công việc đã lên kế hoạch và nhiều lần nói rằng nó vẫn đang được phát triển.',
  harlequin:
    'Kết cục tình yêu, trong đó nhân vật chính ở lại với Harlequin. Nhà phát triển liệt kê là công việc đã lên kế hoạch; kịch bản cho kết cục này chưa viết xong.',
  protagonist:
    'Kết cục trong đó nhân vật chính khép lại câu chuyện mà không có tình yêu. Nhà phát triển đã xác nhận tuyến này tồn tại trên mặt ý tưởng và rằng bạn vẫn có thể chọn kết bạn bên cạnh nó.',
  'all-together':
    'Kết cục trong đó nhân vật chính yêu Pierrot và Harlequin cùng lúc. Được công bố là đã lên kế hoạch, chưa phải nội dung đã thực hiện.',
};

/** Tên và mô tả từng nền tảng phát hành. */
const VI_PLATFORM_NAMES: Record<string, string> = {
  html5: 'Trình duyệt web (HTML5)',
  windows: 'Windows',
  macos: 'macOS',
  linux: 'Linux',
  android: 'Android',
};

const VI_PLATFORM_DETAILS: Record<string, string> = {
  html5: 'Chạy trong trình duyệt qua trang itch.io chính thức',
  windows: 'Bản dựng cho PC, phiên bản 0.2',
  macos: 'Bản dựng cho Mac, phiên bản 0.2',
  linux: 'Bản dựng cho Linux, phiên bản 0.2',
  android: 'Bản dựng APK, phiên bản 0.2',
};

/** Ngôn ngữ đi kèm trong bản phát hành. */
const VI_LANGUAGE_NAMES: Record<string, string> = {
  en: 'Tiếng Anh',
  pt: 'Tiếng Bồ Đào Nha (Brazil)',
  zh: 'Tiếng Trung giản thể',
};

/** Danh sách cảnh báo nội dung, giữ đúng thứ tự và số lượng với bản gốc. */
const VI_CONTENT_WARNINGS: string[] = [
  'Rung màn hình',
  'Máu, cái chết, giết người và hình ảnh ghê tởm',
  'Gợi ý về ăn thịt người',
  'Ngược đãi',
  'Ngôn ngữ thô tục',
  'Bắt cóc',
  'Sử dụng ma túy không đồng ý',
  'Chế ngự thân thể',
  'Quấy rối thể chất nhẹ và tiếp xúc cơ thể không đồng ý',
];

/**
 * Các lời đồn về lưu game. Khoá là chuỗi tiếng Anh trong game-facts.ts nên danh
 * sách luôn khớp với dữ kiện gốc.
 */
const VI_SAVE_CLAIMS: Record<string, string> = {
  'The game supports a specific number of save slots, autosaves at fixed intervals, or stores saves in a named folder.':
    'Trò chơi có số ô lưu cụ thể, tự lưu theo chu kỳ cố định, hoặc lưu bản lưu trong một thư mục được đặt tên.',
  'No official save documentation exists. Ren\'Py builds use a standard location, but the developer has not published specifics.':
    'Không có tài liệu lưu game chính thức nào tồn tại. Bản dựng Ren\'Py dùng một vị trí tiêu chuẩn, nhưng nhà phát triển chưa công bố các chi tiết cụ thể.',
  'Browser saves can be exported to a zip archive and imported into a desktop build.':
    'Bản lưu trên trình duyệt có thể xuất ra một tệp zip rồi nhập vào bản dựng cho máy tính.',
  'Ren\'Py offers an export and import action in its engine overlay, but the developer has not confirmed a browser-to-desktop workflow for this game.':
    'Ren\'Py có thao tác xuất và nhập trong engine overlay, nhưng nhà phát triển chưa xác nhận quy trình chuyển từ trình duyệt sang máy tính cho game này.',
};

export const guideContentVi: Record<string, GuidePage> = {
  endings: {
    slug: 'endings',
    title: 'Các kết cục và tuyến của The Freak Circus',
    metaTitle:
      'Hướng dẫn kết cục The Freak Circus: toàn bộ tuyến và các kết quả',
    metaDescription:
      'The Freak Circus có bao nhiêu kết cục? Kết cục xấu "Missing" đã được xác nhận, bốn kết cục đang được lên kế hoạch, nhân vật nào có tuyến, và nhà phát triển thực sự đã xác nhận điều gì.',
    intro:
      'Kết cục là chủ đề được tìm kiếm nhiều nhất trong game này, và cũng là chủ đề dễ bị viết sai nhất. Bản build công khai hiện tại chỉ có đúng một kết cục. Mọi thứ còn lại được nhắc trong hướng dẫn, wiki và video đều hoặc là công việc đã lên kế hoạch, hoặc là cách diễn giải của người chơi. Trang này tách hai phần đó ra, và dẫn lại từng khẳng định về đúng nơi nhà phát triển đã nói.',
    quickFacts: [
      { label: 'Kết cục chơi được ngay', value: '1', note: 'Kết cục xấu "Missing" ở Day 1' },
      {
        label: 'Kết cục đã công bố là sẽ có',
        value: '4',
        note: 'Pierrot, Harlequin, nhân vật chính, "All together"',
      },
      { label: 'Phiên bản hiện tại', value: 'Bản nguyên mẫu 0.2' },
      {
        label: 'Tuyến đã được xác nhận',
        value: 'Pierrot, Harlequin, cả hai, hoặc không chọn ai',
      },
      { label: 'Tình trạng Day 3', value: 'Đang phát triển, chưa công bố ngày' },
    ],
    sections: [
      {
        heading: 'Kết cục duy nhất thực sự tồn tại',
        paragraphs: [
          'Phiên bản 0.2 chỉ chứa một kết cục, và đó là một kết cục xấu. Kết cục này đạt được ở Day 1: nếu nhân vật chính không hề phản ứng khi Pierrot bị một người đàn ông chế nhạo trước đám đông, nhân vật chính sẽ được một nhân vật không rõ lai lộng đưa một vé màu hồng, bị đưa đến lều màu hồng, và bị mọi thành viên trong rạp xiếc từ chối. Trò chơi nói thẳng rằng nhân vật chính đã không giành được sự chú ý của Pierrot và gặp kết cục bi kịch.',
          'Điều này quan trọng hơn nghe có vẻ đơn giản. Rất nhiều nội dung của fan mô tả bốn hay nhiều hơn kết cục như thể đã chơi được ngay bây giờ. Tính đến bản build hiện tại, phần chọn nhánh vẫn đang được phát triển — nhánh rẽ thì đã có, còn kết cục thì chưa.',
        ],
      },
      {
        heading: 'Bốn kết cục đang được lên kế hoạch',
        paragraphs: [
          'Nhà phát triển liệt kê bốn kết cục trên trang chính thức và trong FAQ chính thức. Hai là kết cục tình yêu, một kết cục cố ý không có tình yêu, và một kết cục đa tình cảm (poly).',
        ],
        list: ENDINGS.filter((ending) => ending.status === 'planned').map(
          (ending) =>
            `${VI_ENDING_NAMES[ending.id] ?? ending.name} — ${
              VI_ENDING_SUMMARIES[ending.id] ?? ending.summary
            }`,
        ),
      },
      {
        heading: 'Thực tế bạn có thể đi tuyến nào',
        paragraphs: [
          'Câu trả lời chính thức rất hẹp: Pierrot, Harlequin, cả hai, hoặc không chọn ai. Tuyến của nhân vật chính chính là lựa chọn "không chọn ai", và nhà phát triển đã xác nhận tuyến này không có yếu tố tình yêu, đồng thời vẫn cho phép bạn chọn kết bạn với dàn nhân vật.',
          'Không có tuyến nào cho Jester, Ticket Taker hay Doctor. Nhà phát triển nói rằng nếu sau này bổ sung thêm tuyến, nhiều khả năng chúng sẽ đến dưới dạng bản mở rộng hoặc DLC, và điều đó chưa được quyết định. Việc biến những nhân vật còn lại thành lựa chọn tình yêu được mô tả là "một khả năng", không phải một lời hứa.',
        ],
      },
      {
        heading: 'Kết cục đa tình cảm thực sự nghĩa là gì',
        paragraphs: [
          'Kết cục "All together" được nhà phát triển định nghĩa là nhân vật chính yêu Pierrot và Harlequin cùng lúc. Đây là một kết cục được liệt kê riêng, không phải một biến thể phụ của tuyến tình yêu nào, và nó thuộc về phần công việc đang được lên kế hoạch.',
        ],
      },
      {
        heading: 'Vì sao các trang hướng dẫn lại bất đồng về số kết cục',
        paragraphs: [
          'Các trang khác nhau đưa ra tổng số khác nhau vì chúng đang trả lời những câu hỏi khác nhau. Có trang chỉ đếm những gì chơi được, có trang chỉ đếm những gì nhà phát triển đã gọi tên, và có trang trộn cả kết cục đã lên kế hoạch lẫn những phỏng đoán của fan. Đọc một khẳng định rồi đặt nó vào ba nhóm ở trên — đã thực hiện, đã lên kế hoạch, hoặc chưa được xác minh — là cách nhanh nhất để xác định tính chất của nó.',
          'Còn hai lưu ý nữa. Nhà phát triển nói kịch bản vẫn đang được hoàn thiện, nên các kết cục đã lên kế hoạch có thể thay đổi. Và không tồn tại con số tổng số kết cục nào là chính thức: câu trả lời cho "cuối cùng sẽ có bao nhiêu kết cục" là nhiều kết cục đã được lên kế hoạch nhưng hiện chưa thể đưa ra con số.',
        ],
      },
      {
        heading: 'Có thể mong đợi gì từ Day 3',
        paragraphs: [
          'Day 3 là ngày tiếp theo trong game và đang được phát triển tích cực. Các bản cập nhật tiến độ đã mô tả những phần beta đã hoàn thành và ước tính beta chiếm khoảng 30–40% của bản cập nhật, với kịch bản lớn hơn Day 2 và thêm nội dung kết cục xấu. Chưa có ngày phát hành nào được công bố, và nhà phát triển đã đề nghị không nên lặp lại các tin đoán ngày phát hành từ bên ngoài.',
          'Vì các kết cục mới đang được viết trong Day 3, đây chính là trang nên quay lại sau bản cập nhật chính thức tới.',
        ],
      },
    ],
    faq: [
      {
        question: 'The Freak Circus có bao nhiêu kết cục?',
        answer:
          'Bản build hiện tại chơi được một kết cục. Bốn kết cục khác đã được công bố là sẽ có: Pierrot, Harlequin, nhân vật chính và "All together". Nhà phát triển nói có nhiều kết cục được lên kế hoạch nhưng không đưa được tổng số.',
      },
      {
        question: 'Làm sao để có kết cục "Missing"?',
        answer:
          'Đây là kết cục duy nhất đã được thực hiện. Ở Day 1, khi Pierrot bị chế nhạo mà bạn không làm gì cả, nhân vật chính sẽ được đưa một vé màu hồng, bị đưa đến lều màu hồng và bị rạp xiếc từ chối.',
      },
      {
        question: 'Làm sao để có kết cục của Harlequin?',
        answer:
          'Chưa có hướng dẫn nào, bởi kết cục này chưa được thực hiện. Việc chọn tuyến Harlequin vẫn đang được phát triển. Mọi danh sách kích hoạt từng bước trên mạng đều đang mô tả một bản build không tồn tại trong công khai.',
      },
      {
        question: 'Pierrot có kết cục riêng không?',
        answer:
          'Kết cục tình yêu của Pierrot đã được công bố và đang phát triển, nhưng chưa có trong bản build công khai. Nhà phát triển mô tả kịch bản và các kết cục vẫn là công việc đang dở dang.',
      },
      {
        question: 'Có tuyến của Jester, Doctor hay Ticket Taker không?',
        answer:
          'Không. Các lựa chọn tuyến đã được xác nhận là Pierrot, Harlequin, cả hai, hoặc không chọn ai. Tuyến của các nhân vật khác nhiều khả năng sẽ đến dưới dạng bản mở rộng hoặc DLC, và điều đó chưa được quyết định.',
      },
      {
        question: 'Có thể không yêu ai mà vẫn chơi tuyến nhân vật chính không?',
        answer:
          'Có. Tuyến của nhân vật chính tồn tại trên mặt ý tưởng và không có yếu tố tình yêu, nhưng bạn vẫn có thể chọn kết bạn với dàn nhân vật.',
      },
      {
        question: 'Bản hoàn chỉnh sẽ có bao nhiêu kết cục?',
        answer:
          'Nhà phát triển nói nhiều kết cục đã được lên kế hoạch nhưng không đưa được con số. Kịch bản vẫn đang được hoàn thiện, nên danh sách ở trên có thể thay đổi.',
      },
      {
        question: 'Day 3 có thêm kết cục không?',
        answer:
          'Day 3 đang được phát triển tích cực, và các bản cập nhật tiến độ đã mô tả thêm nội dung kết cục xấu cùng các cảnh ẩn. Chưa có ngày phát hành nào được công bố.',
      },
    ],
    related: ['endings', 'characters', 'download', 'save', 'faq', 'day-3'],
  },
  heights: {
    slug: 'characters/heights',
    title: 'Chiều cao, thứ tự tuổi và bảng xếp hạng nhân vật',
    metaTitle: 'Bảng chiều cao The Freak Circus: xếp hạng toàn bộ nhân vật',
    metaDescription:
      'Bảng chiều cao chính thức của các nhân vật The Freak Circus — Pierrot, Harlequin, Jester, Doctor và Ticket Taker — kèm thứ tự tuổi và bảng xếp hạng sức mạnh do nhà phát triển công bố.',
    intro:
      'Nhà phát triển đã công bố một bảng chiều cao cùng bộ tham chiếu hình vẽ, rồi riêng một thứ tự tuổi. Chính hai danh sách đó là lý do các câu hỏi về chiều cao trong game này có câu trả lời dứt khoát — và cũng là lý do nhiều danh sách trên mạng ghi sai. Trang này chép lại đúng các con số đã công bố và đánh dấu rõ chỗ nào bảng xếp hạng dừng lại.',
    quickFacts: [
      { label: 'Cao nhất', value: 'Doctor — 207 cm', note: 'Khoảng 6 ft 9.5 in' },
      { label: 'Thấp nhất', value: 'Ticket Taker — 183 cm', note: 'Khoảng 6 ft 0 in' },
      {
        label: 'Chênh lệch chiều cao',
        value: '24 cm',
        note: 'Giữa người cao nhất và người thấp nhất',
      },
      {
        label: 'Lớn tuổi nhất',
        value: 'Ticket Taker',
        note: 'Thứ tự tuổi chính thức, từ lớn đến nhỏ',
      },
      {
        label: 'Nhỏ tuổi nhất',
        value: 'Harlequin',
        note: 'Thứ tự tuổi chính thức, từ lớn đến nhỏ',
      },
      {
        label: 'Mạnh nhất',
        value: 'Pierrot',
        note: 'Bảng xếp hạng sức mạnh thuần túy của nhà phát triển',
      },
    ],
    sections: [
      {
        heading: 'Bảng chiều cao chính thức',
        paragraphs: [
          'Bảng này do nhà phát triển đăng tải như tài liệu tham chiếu khi vẽ hình. Nó liệt kê năm nhân vật, tức là toàn bộ nhân vật đã được giới thiệu trong bản build hiện tại. Các con số bên dưới là giá trị đã công bố, không phải ước lượng từ hình ảnh.',
        ],
      },
      {
        heading: 'Thứ tự tuổi chính thức',
        paragraphs: [
          'Một bài AMA riêng đã trả lời yêu cầu xếp dàn nhân vật theo tuổi từ lớn đến nhỏ. Thứ tự là Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Chưa từng có một con số tuổi cụ thể nào được công bố cho bất kỳ nhân vật nào, và đây là thông tin tuổi tác duy nhất mà nhà phát triển đã phát hành.',
        ],
        list: AGE_ORDER_OLDEST_FIRST.map(
          (entry) => `${entry.ageOrder}. ${entry.name} — cao ${entry.cm} cm`,
        ),
      },
      {
        heading: 'Bảng xếp hạng sức mạnh',
        paragraphs: [
          'Nhà phát triển cũng công bố một bảng xếp hạng sức mạnh thể chất thuần túy, hoàn toàn tách biệt với chiều cao. Thứ tự là: Pierrot đứng đầu, Harlequin và Jester hòa nhau ở hạng hai, Doctor hạng ba, và Ticket Taker đứng cuối. Bảng xếp hạng này được đăng kèm khi trả lời một câu hỏi của fan chứ không phải một cơ chế trong game, nên hãy xem nó như một phần đặc tả nhân vật chứ không phải một bảng chỉ số.',
        ],
        list: STRENGTH_RANKING.map(
          (entry) =>
            `${entry.name} — hạng ${entry.strengthRank}${
              entry.strengthRank === 2 ? ' (hòa)' : ''
            }`,
        ),
      },
      {
        heading: 'Những gì bảng không đề cập tới',
        paragraphs: [
          'Bảng chỉ đề cập năm nhân vật đã được giới thiệu. Columbina, người có cái chết định hình tiểu sử của cả hai nhân vật chính, không xuất hiện trong bảng đã công bố, và không tìm thấy con số chiều cao chính thức nào cho cô. Chiều cao của cô đang lan truyền trên các wiki fan không phải thông tin từ nguồn chính thức.',
          'Ngày sinh cũng không đồng đều. Một ngày sinh trong số các nhân vật đã được một bài đăng chính thức xác nhận; các ngày còn lại lan truyền trên mạng đều do fan suy đoán và nên được hiểu theo đúng nghĩa đó.',
        ],
      },
      {
        heading: 'Vì sao các danh sách nhân vật không khớp nhau',
        paragraphs: [
          'Phần lớn sự bất đồng đến từ việc trộn bảng chiều cao đã công bố với tuổi và ngày sinh do fan gán, rồi trình bày kết quả như thể đó là thông tin chính thức. Số chiều cao và thứ tự tương đối của các tuổi thì có căn cứ; còn tuổi tuyệt đối, phần lớn ngày sinh và mọi thông tin về nhân vật thứ sáu thì không.',
        ],
      },
    ],
    faq: [
      {
        question: 'Pierrot cao bao nhiêu trong The Freak Circus?',
        answer:
          'Pierrot cao 198 cm, khoảng 6 ft 5.95 in, theo bảng chiều cao đã công bố của nhà phát triển.',
      },
      {
        question: 'Harlequin cao bao nhiêu?',
        answer:
          'Harlequin cao 187 cm, khoảng 6 ft 1.62 in. Anh ấy là người thấp hơn trong hai nhân vật chính của tuyến tình yêu và cũng là nhỏ tuổi nhất trong năm người.',
      },
      {
        question: 'Ai là nhân vật cao nhất?',
        answer:
          'Doctor, ở mức 207 cm — khoảng 6 ft 9.5 in. Anh ấy cao hơn Pierrot 9 cm.',
      },
      {
        question: 'Ai là nhân vật thấp nhất?',
        answer:
          'Ticket Taker, ở mức 183 cm — khoảng 6 ft 0 in. Anh ấy cũng là người lớn tuổi nhất trong năm người.',
      },
      {
        question: 'Ai là người lớn tuổi nhất?',
        answer:
          'Thứ tự tuổi chính thức, từ lớn đến nhỏ, là Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Harlequin là người nhỏ tuổi nhất.',
      },
      {
        question: 'Ai mạnh nhất?',
        answer:
          'Pierrot đứng hạng nhất trong danh sách sức mạnh của nhà phát triển, Harlequin và Jester hòa nhau ở hạng hai, Doctor hạng ba, và Ticket Taker đứng cuối.',
      },
      {
        question: 'Harlequin bao nhiêu tuổi?',
        answer:
          'Chưa có con số tuổi nào được công bố. Anh ấy là người nhỏ tuổi nhất trong năm người theo thứ tự tuổi chính thức. Các con số tuổi tìm thấy trên các trang fan không phải thông tin từ nguồn chính thức.',
      },
      {
        question: 'Columbina cao bao nhiêu?',
        answer:
          'Chưa có chiều cao chính thức nào được công bố cho cô ấy. Cô ấy không xuất hiện trong bảng chiều cao của nhà phát triển, vốn chỉ đề cập năm nhân vật đã được giới thiệu.',
      },
    ],
    related: ['characters', 'endings', 'wiki', 'day-3', 'faq'],
  },
  save: {
    slug: 'save',
    title: 'Cách lưu game và chơi tiếp',
    metaTitle:
      'Cách lưu The Freak Circus: chơi tiếp, ô lưu và bản lưu trên trình duyệt',
    metaDescription:
      "Cách lưu và chơi tiếp The Freak Circus trên trình duyệt, PC, Mac và Android — những gì engine Ren'Py mặc định hỗ trợ, và những chi tiết lưu game mà nhà phát triển chưa bao giờ tài liệu hóa.",
    intro:
      'Lưu game là nơi các hướng dẫn của fan ít đáng tin nhất. Nhiều trang đăng đường dẫn lưu game chính xác, số ô lưu và quy trình chuyển bản lưu từ trình duyệt sang máy tính — những thứ nhà phát triển chưa từng công bố. Trang này mô tả những gì thực sự đã biết — hành vi của engine và điểm vào Day 2 đã được xác nhận — rồi tách riêng ra phần chưa được tài liệu hóa.',
    quickFacts: [
      {
        label: 'Engine',
        value: "Ren'Py",
        note: 'Lưu, đọc, lưu nhanh và quay lui tiêu chuẩn',
      },
      {
        label: 'Chơi tiếp mà không phải chơi lại Day 1',
        value: 'Có',
        note: 'Menu có điểm vào Day 2',
      },
      {
        label: 'Chơi trên trình duyệt',
        value: 'Có hỗ trợ',
        note: 'Được phục vụ từ trang itch.io chính thức',
      },
      { label: 'Tài liệu lưu game chính thức', value: 'Chưa công bố' },
      { label: 'Số ô lưu', value: 'Chưa xác nhận' },
      {
        label: 'Chuyển bản lưu từ trình duyệt sang máy tính',
        value: 'Chưa xác nhận với game này',
      },
    ],
    sections: [
      {
        heading: 'Những gì game hỗ trợ sẵn',
        paragraphs: [
          "The Freak Circus được xây dựng bằng Ren'Py, một engine visual novel tiêu chuẩn. Điều đó nghĩa là game dùng giao diện thông thường của engine: một nút lưu mở ra danh sách ô lưu, một nút đọc game, các ô lưu nhanh và đọc nhanh, cùng chức năng quay lui (rollback) trong phần lịch sử. Nếu bạn đã chơi một bộ Ren'Py khác thì cách hoạt động sẽ rất quen thuộc.",
          'Bản trình duyệt cũng được hỗ trợ, phục vụ thông qua trang itch.io chính thức. Nhà phát triển đã ghi nhận các lần treo máy riêng của trình duyệt kèm cách khắc phục, điều này xác nhận rằng chơi trên trình duyệt là một lối đi được duy trì chứ không phải chuyện tình cờ.',
        ],
      },
      {
        heading: 'Điểm vào Day 2',
        paragraphs: [
          'Có một tính năng liên quan đến tiến trình đã được xác nhận và đáng biết: menu có một nút Day 2 kèm phần giới thiệu ngắn, nhờ đó bạn có thể chơi tiếp vào Day 2 mà không phải chơy lại Day 1. Điều này hữu ích với những người chơi muốn quay lại phần nội dung hiện tại mà không muốn xem lại mở đầu.',
        ],
      },
      {
        heading: 'Bản lưu nằm ở đâu trên máy tính',
        paragraphs: [
          "Bản dựng Ren'Py trên máy tính lưu các bản lưu trong một thư mục riêng theo dự án, nằm trong thư mục dữ liệu người dùng. Đường dẫn cụ thể khác nhau giữa Windows, macOS và Linux, và game này từng được phân phối dưới hơn một tên dự án. Chúng tôi không nêu một đường dẫn cụ thể ở đây vì nhà phát triển chưa từng tài liệu hóa đường dẫn cho game này, và một đường dẫn sai trong hướng dẫn chỉ khiến người đọc tìm những thư mục không tồn tại.",
          'Nếu bạn cần đường dẫn trên máy mình, cách đáng tin cậy là mở menu đọc hoặc lưu game trong game rồi dùng chức năng quản lý bản lưu của engine overlay, nó sẽ mở đúng thư mục ứng với nền tảng bạn đang dùng.',
        ],
      },
      {
        heading: 'Bản lưu trên trình duyệt và lý do chúng biến mất',
        paragraphs: [
          'Bản trình duyệt lưu tiến trình trong bộ nhớ của chính trình duyệt chứ không phải trong một tệp mà bạn tự kiểm soát. Hệ quả thực tế là: xóa dữ liệu trang, dùng cửa sổ ẩn danh, hoặc một số cấu hình quyền riêng tư tình khắc nghiệt có thể xóa bản lưu mà không có cảnh báo. Nó cũng có nghĩa là bản lưu trên trình duyệt bị gắn với đúng trình duyệt và hồ sơ người dùng đã tạo ra nó.',
          'Đây là hành vi của engine chứ không phải đặc thù của game này, và đây là lý do phổ biến nhất khiến người chơi báo mất tiến trình.',
        ],
      },
      {
        heading: 'Chuyển bản lưu giữa trình duyệt và máy tính',
        paragraphs: [
          "Ren'Py có các thao tác xuất và nhập bản lưu trong engine overlay. Liệu điều đó có tạo ra một quy trình đáng tin cậy để chuyển bản lưu từ trình duyệt sang bản dựng máy tính của riêng game này hay không thì chưa được nhà phát triển xác nhận, và các báo cáo cũng khác nhau tùy trình duyệt và nền tảng.",
          'Hãy coi đây là một việc đáng thử chứ không phải quy trình chắc chắn dùng được, và hãy sao lưu mọi thứ bạn quan tâm trước khi thử nghiệm.',
        ],
      },
      {
        heading: 'Những lời đồn chúng tôi cố ý không lặp lại',
        paragraphs: [
          'Những lời đồn dưới đây lan truyền rộng rãi và được nhiều hướng dẫn trình bày như sự thật. Không lời nào đến từ nhà phát triển, và trang này sẽ không khẳng định lại chúng như điều đã chốt:',
        ],
        list: UNVERIFIED_CLAIMS.filter((claim) =>
          /save|slot|browser|zip/i.test(claim.claim),
        ).map(
          (claim) =>
            `${VI_SAVE_CLAIMS[claim.claim] ?? claim.claim} — ${
              VI_SAVE_CLAIMS[claim.reality] ?? claim.reality
            }`,
        ),
      },
    ],
    faq: [
      {
        question: 'Làm sao để lưu game trong The Freak Circus?',
        answer:
          "Đây là bản phát hành Ren'Py nên game dùng nút lưu và đọc tiêu chuẩn của engine, có danh sách ô lưu, lưu nhanh, đọc nhanh và quay lui trong lịch sử.",
      },
      {
        question: 'Có thể nhảy thẳng sang Day 2 không?',
        answer:
          'Có. Menu có một nút Day 2 kèm phần giới thiệu ngắn, nhờ đó bạn chơi tiếp vào Day 2 mà không cần chơi lại Day 1.',
      },
      {
        question: 'Vì sao bản lưu trên trình duyệt của tôi biến mất?',
        answer:
          'Bản trình duyệt giữ tiến trình trong bộ nhớ trình duyệt. Xóa dữ liệu trang, cửa sổ ẩn danh hoặc cài đặt quyền riêng tư tình nghiêm ngặt có thể xóa nó. Bản lưu trên trình duyệt cũng gắn với hồ sơ trình duyệt đã tạo ra nó.',
      },
      {
        question: 'Tệp lưu game của tôi nằm ở đâu trên PC hay Mac?',
        answer:
          "Ren'Py lưu các bản lưu trong một thư mục riêng theo dự án bên trong thư mục dữ liệu người dùng của hệ thống, và đường dẫn khác nhau tùy nền tảng và tên bản dựng. Nhà phát triển chưa công bố đường dẫn cho game này, nên hãy dùng chức năng quản lý bản lưu của engine overlay từ menu trong game để mở đúng thư mục trên máy bạn.",
      },
      {
        question: 'Có thể chuyển bản lưu từ trình duyệt sang bản máy tính không?',
        answer:
          "Ren'Py có các thao tác xuất và nhập bản lưu. Việc chúng có hoạt động ổn định khi chuyển bản lưu trên trình duyệt sang bản dựng máy tính của game này thì chưa được xác nhận, nên hãy coi là đáng thử và sao lưu trước.",
      },
      {
        question: 'Có bao nhiêu ô lưu?',
        answer:
          'Điều này chưa được nhà phát triển tài liệu hóa. Số ô lưu đến từ bản dựng của engine chứ không phải từ một tuyên bố chính thức.',
      },
      {
        question: 'Game có tự lưu không?',
        answer:
          'Hành vi tự lưu đến từ bản dựng của engine. Nhà phát triển chưa công bố lịch trình tự lưu cụ thể cho game này.',
      },
      {
        question: 'Trình duyệt có lỗi lưu game nào đã biết không?',
        answer:
          'Nhà phát triển đã ghi nhận và sửa các lần treo máy trong trình duyệt ở lều Ticket Taker và một số cảnh có hiệu ứng động, đồng thời cũng nói rằng bấm qua cảnh quá nhanh có thể làm hiệu ứng hình ảnh lệch nhịp. Đó là vấn đề khi phát lại chứ không phải vấn đề lưu game, nhưng chúng có thể làm gián đoạn buổi chơi.',
      },
    ],
    related: ['save', 'download', 'faq', 'endings', 'day-3'],
  },
  download: {
    slug: 'download',
    title: 'Chơi và tải game ở đâu',
    metaTitle:
      'Tải The Freak Circus: chơi miễn phí trên trình duyệt, PC, Mac, Android',
    metaDescription:
      'Chơi The Freak Circus an toàn ở đâu — trang itch.io chính thức, các nền tảng được hỗ trợ, chơi trên trình duyệt và cách nhận ra một bản tải giả.',
    intro:
      'The Freak Circus được phân phối qua trang itch.io của nhà phát triển, và đó cũng là trang chính thức duy nhất của game. Bất cứ trang nào khác tự nhận là nơi cung cấp bản dựng đầy đủ đều là bản sao lưu hoặc lừa đảo. Dưới đây là cách lấy bản thật trên từng nền tảng, cùng vài dấu hiệu phơi bày bản giả.',
    quickFacts: [
      { label: 'Nguồn chính thức', value: 'itch.io — trang chính thức duy nhất' },
      {
        label: 'Giá',
        value: 'Tự quyết định',
        note: 'Bạn trả số tiền thấy hợp lý, kể cả 0',
      },
      { label: 'Phiên bản hiện tại', value: 'Phiên bản 0.2' },
      {
        label: 'Nền tảng',
        value: 'Trình duyệt, Windows, macOS, Linux, Android',
      },
      {
        label: 'Ngôn ngữ',
        value: 'Tiếng Anh, tiếng Bồ Đào Nha Brazil, tiếng Trung giản thể',
      },
      { label: 'Lồng tiếng', value: 'Chỉ có tiếng Anh' },
    ],
    sections: [
      {
        heading: 'Nguồn chính thức duy nhất',
        paragraphs: [
          'Game do Garula phát hành trên itch.io, và nhà phát triển đã nói rõ rằng đây là trang chính thức duy nhất của game. Trang cung cấp tuỳ chọn "Run game" chạy ngay trong trình duyệt, cùng các bản tải về cho nền tảng máy tính và di động nêu dưới đây. Tuỳ chọn trình duyệt không cần cài đặt gì cả.',
          'Vì game trả giá tuỳ ý, bạn có thể tải bản dựng đầy đủ miễn phí. Trả tiền là một cách ủng hộ nhà phát triển độc lập, người đã nói rằng phần lớn công việc phát triển do một mình thực hiện.',
        ],
      },
      {
        heading: 'Nền tảng và các bản dựng',
        paragraphs: [
          'Phiên bản 0.2 có trên cả năm nền tảng. Bản trình duyệt là cách nhanh nhất để bắt đầu và cũng là lựa chọn hợp lý nếu bạn muốn vừa chơi vừa đọc hướng dẫn.',
        ],
        list: PLATFORMS.map(
          (platform) =>
            `${VI_PLATFORM_NAMES[platform.key] ?? platform.name} — ${
              VI_PLATFORM_DETAILS[platform.key] ?? platform.detail
            }`,
        ),
      },
      {
        heading: 'Ngôn ngữ và lồng tiếng',
        paragraphs: [
          'Game phát hành với tiếng Anh, tiếng Bồ Đào Nha Brazil và tiếng Trung giản thể. Bản dịch tiếng Trung đã được rà soát lại cho phiên bản 0.2, và các ngôn ngữ khác cũng từng được bàn luận theo hướng bản dịch do cộng đồng đảm nhận.',
          'Lồng tiếng chỉ có tiếng Anh, do Darthsuki thực hiện. Nhà phát triển đã giải thích rằng việc thêm các ngôn ngữ lồng tiếng khác không nằm trong kế hoạch ban đầu và sẽ là công việc mới.',
        ],
        list: SHIPPED_LANGUAGES.map(
          (language) => VI_LANGUAGE_NAMES[language.key] ?? language.name,
        ),
      },
      {
        heading: 'Cảnh báo nội dung',
        paragraphs: [
          'Game được xếp hạng 18+ và nhà phát triển có công bố một danh sách cảnh báo rõ ràng. Đáng đọc trước khi chơi, nhất là nếu bạn đang cân nhắc nên đọc trước bao nhiêu phần cốt truyện trước khi bắt đầu.',
        ],
        list: CONTENT_WARNINGS.map(
          (warning, index) => VI_CONTENT_WARNINGS[index] ?? warning,
        ),
      },
      {
        heading: 'Cách nhận ra một bản tải giả',
        paragraphs: [
          'Dấu hiệu rõ ràng nhất là bất kỳ trang nào đưa ra game đầy đủ ngoài trang itch.io chính thức. Nhà phát triển đã yêu cầu rõ ràng không được tải game lên lại hay đăng lại, và xác nhận không có máy chủ Discord chính thức, nên mọi máy chủ đều nên được coi là do fan quản lý.',
          'Những thứ khác cần cảnh giác: một ứng dụng hoặc tiện ích trình duyệt "xác minh" bắt buộc, một bản tải nhỏ bất thường hóa ra lại là bộ cài đặt cho thứ khác, và mọi yêu cầu tắt phần mềm diệt virus.',
        ],
      },
      {
        heading: 'Bản trình duyệt làm tốt điều gì và vướng ở đâu',
        paragraphs: [
          'Chơi trên trình duyệt thực sự được hỗ trợ và nhà phát triển đã sửa các lỗi riêng của trình duyệt, bao gồm một lần treo máy trong lều Ticket Taker và một số cảnh có hiệu ứng động. Bấm qua một số cảnh thật nhanh vẫn có thể khiến hiệu ứng hình ảnh lệch nhịp, điều đáng biết nếu bạn thường xuyên bấm qua nội dung.',
          "Nếu muốn trải nghiệm mượt nhất cho việc chơi lại nhiều lần và săn tìm các tuyến, bản máy tính cho bạn giao diện Ren'Py đầy đủ cùng chức năng quay lui.",
        ],
      },
    ],
    faq: [
      {
        question: 'Chơi The Freak Circus ở đâu?',
        answer:
          'Ở trang itch.io của nhà phát triển, đó là trang chính thức duy nhất của game. Trang cung cấp cả bản chơi trong trình duyệt lẫn các bản tải về.',
      },
      {
        question: 'The Freak Circus có miễn phí không?',
        answer:
          'Trên itch.io game trả giá tuỳ ý, nên bạn có thể tải bản dựng đầy đủ miễn phí và trả số tiền thấy hợp lý nếu muốn ủng hộ nhà phát triển.',
      },
      {
        question: 'Có chơi The Freak Circus trên điện thoại được không?',
        answer:
          'Có. Bản Android được phát hành cùng các bản trình duyệt, Windows, macOS và Linux.',
      },
      {
        question: 'Có bản tiếng Trung không?',
        answer:
          'Có. Tiếng Trung giản thể phát hành kèm game, và bản dịch đã được rà soát lại cho phiên bản 0.2.',
      },
      {
        question: 'Còn những ngôn ngữ nào khác?',
        answer:
          'Game phát hành với tiếng Anh, tiếng Bồ Đào Nha Brazil và tiếng Trung giản thể, lồng tiếng chỉ có tiếng Anh. Các ngôn ngữ khác từng được bàn luận dưới dạng bản dịch từ cộng đồng.',
      },
      {
        question: 'Làm sao biết một trang tải là giả?',
        answer:
          'Trang itch.io chính thức là nguồn chính thức duy nhất. Nhà phát triển đã yêu cầu không được đăng lại game, nên mọi trang khác đưa ra bản dựng đầy đủ đều không được phép. Tuyệt đối đừng cài một chương trình "xác minh" riêng hay tắt phần mềm diệt virus để có được game.',
      },
      {
        question: 'Nên chơi trên trình duyệt hay tải bản máy tính?',
        answer:
          "Bản trình duyệt không cần cài đặt và hoàn toàn ổn cho lần đọc đầu tiên. Bản máy tính cho giao diện Ren'Py đầy đủ cùng chức năng quay lui, tốt hơn cho việc săn tuyến và chơi lại nhiều lần.",
      },
      {
        question: 'Bản trình duyệt có nhiều bug không?',
        answer:
          'Một số lần treo máy riêng của trình duyệt đã được nhà phát triển sửa, bao gồm một lần trong lều Ticket Taker. Bấm qua cảnh quá nhanh vẫn có thể làm hiệu ứng hình ảnh lệch nhịp.',
      },
    ],
    related: ['download', 'save', 'faq', 'endings', 'characters'],
  },
  faq: {
    slug: 'faq',
    title: 'Câu hỏi thường gặp',
    metaTitle:
      'FAQ The Freak Circus: chơi, lưu game, kết cục, nhân vật và tải về',
    metaDescription:
      'Giải đáp những câu hỏi thường gặp về The Freak Circus — chơi ở đâu, lưu game thế nào, có bao nhiêu kết cục, chiều cao nhân vật và những gì vẫn đang được phát triển.',
    intro:
      'Đây là bản rút gọn của cả trang. Nếu một câu hỏi có hướng dẫn riêng, trang này đưa ra câu trả lời và dẫn tới phần chi tiết thay vì lặp lại. Khi câu trả lời phụ thuộc vào điều nhà phát triển chưa công bố, trang này nói thẳng thay vì lấp chỗ trống bằng một phỏng đoán nghe hợp lý.',
    quickFacts: [
      { label: 'Phiên bản hiện tại', value: 'Bản nguyên mẫu 0.2' },
      {
        label: 'Kết cục chơi được',
        value: '1',
        note: '"Missing" — một kết cục xấu',
      },
      { label: 'Kết cục đã lên kế hoạch', value: '4' },
      {
        label: 'Nền tảng',
        value: '5',
        note: 'Trình duyệt, Windows, macOS, Linux, Android',
      },
      {
        label: 'Ngôn ngữ',
        value: '3',
        note: 'Tiếng Anh, tiếng Bồ Đào Nha, tiếng Trung giản thể',
      },
      { label: 'Day 3', value: 'Đang phát triển, chưa công bố ngày' },
    ],
    sections: [
      {
        heading: 'Chơi và tải game',
        paragraphs: [
          'Mọi thứ liên quan đến việc chạy được game đều nằm ở trang tải về. Nói ngắn gọn: trang itch.io chính thức là nguồn chính thức duy nhất, game trả giá tuỳ ý, và trang cung cấp cả bản chơi trong trình duyệt lẫn bản cho máy tính và Android.',
        ],
      },
      {
        heading: 'Lưu game và chơi tiếp',
        paragraphs: [
          "Game là một bản phát hành Ren'Py tiêu chuẩn, nên việc lưu hoạt động qua giao diện thông thường của engine. Menu cũng cho phép chơi thẳng vào Day 2 mà không cần chơi lại Day 1. Những chi tiết được lặp lại rất nhiều trên mạng nhưng chưa từng được nhà phát triển xác nhận — đường dẫn lưu game chính xác, số ô lưu và việc chuyển bản lưu từ trình duyệt sang máy tính — đều được đánh dấu là chưa xác minh ở trang hướng dẫn lưu game.",
        ],
      },
      {
        heading: 'Kết cục và tuyến',
        paragraphs: [
          'Bản build hiện tại chơi được một kết cục, và đó là một kết cục xấu. Bốn kết cục khác đã được công bố là sẽ có: Pierrot, Harlequin, nhân vật chính và "All together". Các lựa chọn tuyến là Pierrot, Harlequin, cả hai, hoặc không chọn ai — không có tuyến nào cho Jester, Doctor hay Ticket Taker.',
        ],
      },
      {
        heading: 'Nhân vật và số đo',
        paragraphs: [
          'Nhà phát triển đã công bố một bảng chiều cao cho năm nhân vật đã được giới thiệu, cùng một thứ tự tuổi riêng. Hai danh sách đó là toàn bộ số đo chính thức. Tuổi tuyệt đối, phần lớn ngày sinh và chiều cao của Columbina lan truyền rộng rãi trên mạng mà không có nguồn chính thức.',
        ],
      },
      {
        heading: 'Những gì vẫn đang được phát triển',
        paragraphs: [
          'Phiên bản 0.2 có toàn bộ năm phần giới thiệu nhân vật và một kết cục xấu. Day 3 đang được phát triển tích cực, với các bản cập nhật tiến độ mô tả các phần beta đã hoàn thành chiếm khoảng 30–40% của bản cập nhật. Chưa có ngày phát hành nào được công bố, và nhà phát triển đã đề nghị không nên lặp lại các tin đoán ngày phát hành từ bên ngoài.',
        ],
      },
      {
        heading: 'Về trang này',
        paragraphs: [
          'Đây là một hướng dẫn fan độc lập. Trang không phải là nhà phát triển, nhà phát hành hay một kênh hỗ trợ chính thức. Nhà phát triển đã xác nhận không có máy chủ Discord chính thức, nên mọi máy chủ và tài khoản không được liên kết từ các trang itch.io, Tumblr, Patreon hoặc Bluesky chính thức đều nên được coi là do fan quản lý hoặc không được ủy quyền.',
        ],
      },
    ],
    faq: [
      {
        question: 'Chơi The Freak Circus ở đâu?',
        answer:
          'Ở trang itch.io của nhà phát triển, đó là trang chính thức duy nhất của game. Trang cung cấp bản chơi trong trình duyệt cùng các bản tải về cho Windows, macOS, Linux và Android.',
      },
      {
        question: 'Tải The Freak Circus an toàn bằng cách nào?',
        answer:
          'Chỉ dùng trang itch.io chính thức. Nhà phát triển đã yêu cầu không được đăng lại game, nên mọi trang khác đưa ra bản dựng đầy đủ đều không được phép.',
      },
      {
        question: 'Lưu game The Freak Circus thế nào?',
        answer:
          "Đây là bản phát hành Ren'Py nên game dùng giao diện lưu và đọc tiêu chuẩn của engine, có lưu nhanh và quay lui.",
      },
      {
        question: 'Có chơi tiếp từ Day 2 mà không cần chơi lại Day 1 không?',
        answer: 'Có. Menu có một nút Day 2 kèm phần giới thiệu ngắn.',
      },
      {
        question: 'Có bao nhiêu kết cục?',
        answer:
          'Hiện chơi được 1 — kết cục xấu "Missing". Bốn kết cục khác đã được lên kế hoạch: Pierrot, Harlequin, nhân vật chính và "All together". Chưa có tổng số nào được công bố.',
      },
      {
        question: 'Làm sao để có kết cục của Harlequin?',
        answer:
          'Hiện chưa thể — kết cục đó đang được lên kế hoạch và chưa thực hiện. Mọi danh sách kích hoạt từng bước được đăng công khai đều sẽ mô tả một bản build không tồn tại trong công khai.',
      },
      {
        question: 'Pierrot cao bao nhiêu?',
        answer:
          '198 cm, khoảng 6 ft 5.95 in, theo bảng chiều cao đã công bố của nhà phát triển.',
      },
      {
        question: 'Ai là nhân vật lớn tuổi nhất?',
        answer:
          'Ticket Taker, theo thứ tự tuổi chính thức: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Vì sao Pierrot không nói được?',
        answer:
          'Phần tóm tắt chính thức gọi anh ấy là "yandere" thầm lặng — "yandere" là kiểu nhân vật ám ảnh, sở hữu tình cảm đối với người mình yêu — và sự im lặng đó là một đặc tả nhân vật có chủ đích chứ không phải thiếu người lồng tiếng. Các chi tiết về lý do trong cốt truyện đến từ tư liệu truyện chứ không phải từ tuyên bố của nhà phát triển.',
      },
      {
        question: 'Day 3 sẽ ra mắt khi nào?',
        answer:
          'Chưa có ngày nào được công bố. Day 3 đang được phát triển tích cực, với phần beta được mô tả ở mức khoảng 30–40% của bản cập nhật.',
      },
      {
        question: 'Có máy chủ Discord chính thức không?',
        answer:
          'Không. Nhà phát triển đã xác nhận không có máy chủ chính thức, và mọi máy chủ cộng đồng nên được coi là do fan quản lý.',
      },
      {
        question: 'Có thể vẽ fan art các nhân vật không?',
        answer:
          'Có. Fan art là một phần bình thường của cộng đồng fan. Trang này tổng hợp tranh cộng đồng với sự cho phép và ghi công của tác giả, và không lưu trữ tệp game cũng không đóng gói lại game.',
      },
    ],
    related: ['faq', 'download', 'save', 'endings', 'characters', 'wiki'],
  },
};
