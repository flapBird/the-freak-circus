// Bản dịch tiếng Việt (vi) cho các trang hồ sơ nhân vật.
//
// File này soi cùng cấu trúc với lib/character-content.ts, nhưng chỉ mang các
// trường nội dung: các trường số (cm, feet, inches, ageOrder, strengthRank)
// luôn được suy ra từ bảng chiều cao chính thức trong game-facts.ts, để không
// bản dịch nào có thể lệch khỏi những con số đã được công bố.
//
// Nguyên tắc về mức độ chắc chắn giữ nguyên như bản gốc tiếng Anh:
//   - Ba nhãn "đã được nhà phát triển xác nhận / từ bản build hiện tại / do
//     fan suy ra" được giữ thành ba nhóm riêng biệt, với cùng ý nghĩa.
//   - Không câu nào phản điệu nào được nâng thành điều chắc chắn, và không
//     tuyên bố nào của fandom được nâng thành phát biểu của nhà phát triển.

import { HEIGHT_CHART, formatHeight } from './game-facts';
import type { CharacterEditorial } from './character-content';

const chartFor = (slug: string) => HEIGHT_CHART.find((entry) => entry.slug === slug)!;

export const characterProfilesVi: Record<
  'pierrot' | 'harlequin' | 'jester' | 'the-doctor' | 'ticket-taker',
  CharacterEditorial
> = {
  pierrot: {
    role: 'Một trong hai đối thủ trung tâm, và sự ám ảnh thầm lặng ở giữa câu chuyện',
    intro:
      'Pierrot là nhân vật mà toàn bộ game được xây dựng quanh, và cũng là người thường xuyên được mô tả bằng đúng một từ: im lặng. Chính phần tóm tắt của nhà phát triển gọi anh ấy là "yandere thầm lặng" ("yandere" là kiểu nhân vật ám ảnh, chiếm hữu tình cảm đối với người mình yêu) — một cách mô tả cẩn thận hơn rất nhiều so với vẻ ngoài thoáng qua. Sự im lặng ở đây là một lựa chọn đặc tả nhân vật, không phải là giọng lồng bị thiếu hay một phần nội dung tạm để trống. Đó là lý do mỗi cử chỉ của anh ấy đều mang trọng lượng, và cũng là cơ chế khiến sự chú ý của anh ấy dần khó tách khỏi sự chiếm hữu.',
    sections: [
      {
        heading: 'Trả lời nhanh',
        paragraphs: [
          'Pierrot cao 198 cm, khiến anh ấy là người cao thứ hai trong năm nhân vật đã được giới thiệu và là người cao hơn trong hai nhân vật chính của tuyến tình yêu. Trong thứ tự tuổi do nhà phát triển công bố, anh ấy đứng thứ ba trong năm người, tính từ lớn tuổi đến nhỏ tuổi. Tuyến của anh ấy đã lên kế hoạch và đang được phát triển, và là một trong chỉ hai tuyến tình yêu từng được nhà phát triển nêu tên.',
        ],
      },
      {
        heading: 'Pierrot là ai',
        paragraphs: [
          'Phần tóm tắt chính thức nói thẳng tình hình: bạn làm việc ở một quán cà phê, số phận đưa bạn đến với Pierrot, và đó là lúc sự ám ảnh của anh ấy bắt đầu. Cách game đặt khung cho câu chuyện rất chính xác về cơ chế này — đây không phải là một người đàn ông trở nên đáng sợ tại một bước ngoặt kịch tính, mà là người mà sự chú ý của anh dần cứng lại qua từng ngày bình thường, cho tới khi chính cái bình thường bị sắp xếp lại quanh nó.',
          'Việc viết chính xác về anh ấy không dễ, bởi đây là một visual novel, còn Pierrot là nhân vật phần lớn thời gian không lên tiếng. Phần lớn những gì người chơi mô tả là tính cách của anh ấy được ghép lại từ những gì anh ấy không nói và từ cách anh ấy đáp lại nhân vật chính. Tư liệu đó có thật và nằm trong bản build, nhưng đó là cách diễn giải chồng lên quan sát, và trang này giữ hai tầng đó tách biệt.',
        ],
      },
      {
        heading: 'Chiều cao và chi tiết ngoại hình',
        paragraphs: [
          `Bảng chiều cao do nhà phát triển công bố xếp Pierrot ở ${formatHeight(chartFor('pierrot')).metric}, khoảng ${formatHeight(chartFor('pierrot')).imperial}. Chính bảng đó ghi rằng nhà phát triển đã dùng nó làm tài liệu tham chiếu khi vẽ sprite, vì vậy các con số ở đây được coi là giá trị chính thức chứ không phải ước lượng đọc từ tranh vẽ.`,
          'Wiki fan mô tả thiết kế của anh ấy khá chi tiết: tóc trắng dài vừa phải, mặt nạ trắng có các vệt đen dọc không đều nhau, mắt màu vàng, mũ hề đỏ đen có chuông, áo khoác đỏ viền vàng và găng tay đen có móng vuốt. Mức độ chi tiết về trang phục này hữu ích khi cần nhận ra anh ấy trong ảnh chụp màn hình và fan art, nhưng nó đến từ fandom chứ không phải từ phát biểu của nhà phát triển, nên ở đây được trình bày như mô tả của fan.',
        ],
      },
      {
        heading: 'Thứ tự tuổi và vị trí của anh trong năm người',
        paragraphs: [
          'Một bài đăng AMA riêng đã trả lời yêu cầu trực tiếp là xếp dàn nhân vật từ lớn tuổi đến nhỏ tuổi. Thứ tự được công bố là Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Pierrot do đó đứng thứ ba trong năm — lớn tuổi hơn Jester và Harlequin, nhỏ tuổi hơn Ticket Taker và Doctor.',
          'Chưa có con số tuổi cụ thể nào được công bố cho bất kỳ nhân vật nào, và điều này đáng được nói rõ vì các wiki fan cùng cơ sở dữ liệu nhân vật thường xuyên gán cho họ những tuổi cụ thể hoàn toàn không có căn cứ từ nguồn chính thức. Thứ tự tuổi là thông tin tuổi tác duy nhất nhà phát triển từng phát hành.',
        ],
      },
      {
        heading: 'Bảng xếp hạng sức mạnh',
        paragraphs: [
          'Nhà phát triển cũng công bố một bảng xếp hạng sức mạnh thể chất thuần túy, và Pierrot đứng đầu bảng — trước Harlequin và Jester hòa nhau ở hạng hai, rồi đến Doctor, và Ticket Taker ở cuối. Bảng xếp hạng này được đăng như một ý phụ bên cạnh câu hỏi của fan chứ không phải như một cơ chế trong game, nên nên đọc nó như phần đặc tả nhân vật: thành viên mạnh nhất của rạp xiếc cũng là người kiềm chế bản thân nhiều nhất.',
        ],
      },
      {
        heading: 'Vì sao Pierrot không nói',
        paragraphs: [
          'Phần tóm tắt chính thức mô tả Pierrot là "yandere thầm lặng". Cụm từ đó là của chính nhà phát triển, và cũng là điểm xa nhất mà tư liệu chính thức đi được về lý do. Wiki fan bổ sung một cách giải thích trong cốt truyện: một quy tắc không được nói chuyện nơi công cộng do Jester đặt ra, và Jester là một nhân vật có uy quyền mà Pierrot vô cùng kính trọng. Chi tiết này thỏa đáng và nhất quán với cách hai nhân vật được viết, nhưng nó bắt nguồn từ wiki chứ không phải từ nhà phát triển.',
          'Sự phân biệt ấy quan trọng vì một lý do thực tế: nếu bạn đang đọc một bản dịch kịch bản mà thấy Pierrot dường như đáp lời, đó là vấn đề bản địa hóa hoặc cách diễn giải chứ không phải mâu thuẫn trong thiết lập. Sự im lặng là đặc điểm định danh của nhân vật, không phải một khiếm khuyết trong văn bản.',
        ],
      },
      {
        heading: 'Tính cách và hình hài của sự ám ảnh',
        paragraphs: [
          'Xuyên suốt tư liệu cốt truyện, Pierrot được đọc là kiên nhẫn và chú ý hơn là bốc đồng. Sự ám ảnh mà phần tóm tắt chính thức mô tả không được đặt hình thành cơn giận; nó được đặt hình thành một khởi đầu, đó là một nhận định về nhịp độ chứ không phải về mức độ. Chính khác biệt đó làm cho câu chuyện của anh ấy đáng sợ: một nhân vật mà sự chú ý đã trở nên trọn vẹn và lặng lẽ thì đáng sợ hơn một nhân vật thét lên điều mình muốn.',
          'Wiki fan mô tả anh ấy hiền lành và lịch sự trên bề mặt trong khi theo dõi nhân vật chính, và mang tính bảo vệ đối với cả nhân vật chính lẫn Columbina. Wiki cũng ghi lại một câu trả lời cụ thể của nhà phát triển cho câu hỏi Pierrot có bao giờ từ bỏ nhân vật chính không: câu trả lời là không, và là một sự phủ định dứt khoát. Câu trả lời đó là tín hiệu mạnh về hướng đi của tuyến, dù tuyến vẫn chưa hoàn thành.',
        ],
      },
      {
        heading: 'Pierrot và Harlequin',
        paragraphs: [
          'Cuộc cạnh tranh giữa hai người là trung tâm cấu trúc của game. Phần tóm tắt gọi Harlequin là "đối thủ quyến rũ" của Pierrot, và mô tả game là do một trong hai dẫn dắt. Hai người đối lập nhau về cách thức — Pierrot lặng lẽ và bền bỉ, Harlequin giàu tính điệu ảnh và biến đổi — và cũng đối lập nhau trong cách họ tranh giành sự chú ý của nhân vật chính.',
          'Wiki fan mô tả lịch sử chung của hai người là có liên quan đến Columbina, và một câu trả lời AMA của nhà phát triển từng nói họ quen nhau từ khi còn nhỏ. Điều có thể khẳng định mà không vượt quá giới hạn của tư liệu là: cuộc cạnh tranh này có trước thời điểm hiện tại của game, và mang theo một lịch sử mà bản build hiện tại chỉ hé lộ theo những mảnh vỡ.',
        ],
      },
      {
        heading: 'Pierrot và Columbina',
        paragraphs: [
          'Columbina là cựu thành viên của rạp xiếc, và là nhân vật mà cái chết của cô ấy định hình tiểu sử của cả hai nhân vật chính. Wiki fan ghi nhận Pierrot và Columbina chưa từng có quan hệ tình cảm, điều này trái với một cách đọc theo cách kể chuyện tình của chính rạp xiếc, và nhà phát triển cũng nói riêng rằng Pierrot đã bước ra khỏi đoạn lịch sử đó và đã trưởng thành.',
          'Một lưu ý thực tế cho người đang đọc bản build hiện tại: nhà phát triển đã nói thiết kế của Columbina vẫn đang được thực hiện và các chi tiết của cô ấy đang được cố ý giấu. Những bản cập nhật phát triển gần đây có nhắc đến một cảnh ngắn mới nhắc tới cô ấy. Nói cách khác, hình hài câu chuyện đang được xác nhận trong khi nhân vật vẫn còn đang sản xuất — một tình thế khó xảy ra khi viết hướng dẫn fan, và cũng là lý do phần này được giữ ngắn.',
        ],
      },
      {
        heading: 'Tình trạng tuyến và kết cục',
        paragraphs: [
          'Kết cục tình yêu của Pierrot nằm trong danh sách các kết cục đã lên kế hoạch của nhà phát triển, cùng với kết cục của Harlequin, của nhân vật chính và "All together". Không kết cục nào trong số đó được thực hiện. Bản build hiện tại chứa đúng một kết cục, và đó là một kết cục xấu — kết cục "Missing" đạt được ở Day 1 khi bạn từ chối phản ứng trong lúc Pierrot bị chế nhạo.',
          'Vì vậy, hiện chưa có danh sách điều kiện kích hoạt nào được công bố cho tuyến của Pierrot. Bất kỳ bảng chọn đáp án nào tuyên bố có thể mở khoá kết cục của anh ấy đều đang mô tả một bản build không tồn tại trong công khai. Khi tuyến được phát hành, trang này sẽ được cập nhật bằng các lựa chọn và điểm lưu thực tế chứ không phải bằng một dự đoán.',
        ],
      },
      {
        heading: 'Sự thật đã xác nhận và cách diễn giải',
        paragraphs: [
          'Để nói rõ khác biệt, tư liệu trên trang này được chia như sau.',
        ],
        list: [
          'Đã được nhà phát triển xác nhận: chiều cao, vị trí trong thứ tự tuổi, hạng nhất trong bảng xếp hạng sức mạnh, cách anh ấy được mô tả là "yandere thầm lặng", vai trò là một trong hai nhân vật chính, và việc kết cục tình yêu của Pierrot đã lên kế hoạch.',
          'Từ bản build hiện tại: ngoại hình, các cảnh của anh ấy, và cách anh ấy đáp lại nhân vật chính.',
          'Do fan suy ra: phần mô tả đầy đủ về trang phục và mặt nạ, lý do trong cốt truyện cho sự im lặng, tiểu sử cá nhân, và các chi tiết cụ thể về mối quan hệ của anh ấy với những nhân vật khác.',
        ],
      },
    ],
    faq: [
      {
        question: 'Pierrot cao bao nhiêu trong The Freak Circus?',
        answer:
          'Pierrot cao 198 cm, khoảng 6 ft 5.95 in, theo bảng chiều cao đã công bố của nhà phát triển. Anh ấy là người cao thứ hai trong năm nhân vật và là người cao hơn trong hai nhân vật chính của tuyến tình yêu.',
      },
      {
        question: 'Pierrot bao nhiêu tuổi?',
        answer:
          'Chưa có con số tuổi nào được công bố. Trong thứ tự tuổi chính thức của nhà phát triển, anh ấy đứng thứ ba trong năm, từ lớn đến nhỏ: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Pierrot lớn tuổi hơn Harlequin không?',
        answer:
          'Có. Harlequin là người nhỏ tuổi nhất trong năm, còn Pierrot là người lớn tuổi thứ ba.',
      },
      {
        question: 'Pierrot có phải là nhân vật mạnh nhất không?',
        answer:
          'Có. Anh ấy đứng hạng nhất trong danh sách sức mạnh đã công bố của nhà phát triển, trước Harlequin và Jester hòa nhau ở hạng hai.',
      },
      {
        question: 'Có thể yêu Pierrot không?',
        answer:
          'Kết cục tình yêu của Pierrot đã lên kế hoạch và đang được phát triển, nhưng chưa có trong bản build công khai. Không có điều kiện kích hoạt nào để công bố.',
      },
      {
        question: 'Pierrot có kết cục chưa?',
        answer:
          'Chưa. Kết cục duy nhất đã được thực hiện là kết cục xấu "Missing" ở Day 1. Kết cục của Pierrot đã được công bố và vẫn đang được viết.',
      },
      {
        question: 'Vì sao Pierrot không nói được?',
        answer:
          'Phần tóm tắt chính thức gọi anh ấy là "yandere thầm lặng", nên sự im lặng là đặc tả của nhà phát triển chứ không phải lỗ hổng trong văn bản. Wiki fan đưa ra một lý do trong cốt truyện có liên quan đến Jester, nhưng chi tiết đó không phải từ phát biểu của nhà phát triển.',
      },
      {
        question: 'Pierrot có phải là yandere không?',
        answer:
          'Có — đó là chính từ người nhà phát triển dùng trong phần tóm tắt chính thức, chứ không chỉ là cách gọi tắt của fan.',
      },
      {
        question: 'Pierrot có quan hệ gì với Harlequin?',
        answer:
          'Hai người là đôi đối thủ trung tâm, và game được đặt khung là do một trong hai dẫn dắt. Harlequin được mô tả là "đối thủ quyến rũ" của Pierrot, và hai người đối lập nhau về cách thức: Pierrot lặng lẽ và bền bỉ, Harlequin giàu tính điệu ảnh và biến đổi.',
      },
      {
        question: 'Chuyện gì đã xảy ra giữa Pierrot và Columbina?',
        answer:
          'Columbina là cựu thành viên của rạp xiếc, và cái chết của cô ấy định hình tiểu sử của cả hai nhân vật chính. Wiki fan ghi nhận hai người chưa từng có quan hệ tình cảm. Thiết kế của cô ấy vẫn đang trong giai đoạn sản xuất, và nhà phát triển đã cố ý giấu các chi tiết.',
      },
      {
        question: 'Pierrot là người hay quỷ không?',
        answer:
          'Theo wiki fan, anh ấy là một trong những quái vật của rạp xiếc. Phần tóm tắt của nhà phát triển mô tả dàn nhân vật cùng tiền đề của game theo hình ảnh một rạp xiếc của quái vật, và Pierrot là một phần của đoàn tuồng đó.',
      },
      {
        question: 'Pierrot trông thế nào khi không đeo mặt nạ?',
        answer:
          'Wiki fan mô tả tóc trắng dài vừa phải và đôi mắt vàng sau chiếc mặt nạ trắng có các vệt đen dọc không đều nhau. Mô tả này đến từ fandom chứ không phải từ phát biểu của nhà phát triển, và chủ yếu hữu ích để nhận ra anh ấy trong fan art.',
      },
    ],
  },
  harlequin: {
    role: 'Đối thủ quyến rũ, và tuyến tình yêu thứ hai trong hai tuyến',
    intro:
      'Harlequin là nhân vật khiến The Freak Circus trở thành một sự lựa chọn chứ không phải một câu chuyện chỉ có một đường đi. Phần tóm tắt chính thức gọi anh ấy là "đối thủ quyến rũ" của Pierrot và mô tả game là do một trong hai dẫn dắt — đó là một cách tóm tắt gọn gàng cho một thiết kế được xây quanh hai cách thức không tương thích để giành lấy sự chú ý của nhân vật chính.',
    sections: [
      {
        heading: 'Trả lời nhanh',
        paragraphs: [
          'Harlequin cao 187 cm, là người thấp thứ hai trong năm nhân vật đã được giới thiệu và là người thấp nhất trong hai nhân vật chính của tuyến tình yêu. Trong thứ tự tuổi do nhà phát triển công bố, anh ấy đứng thứ năm trong năm, tức là nhỏ tuổi nhất. Anh ấy chia sẻ hạng hai trong bảng xếp hạng sức mạnh với Jester, và có một tuyến tình yêu đã lên kế hoạch nhưng chưa được thực hiện.',
        ],
      },
      {
        heading: 'Harlequin là ai',
        paragraphs: [
          'Trong khi Pierrot làm việc bằng sự bền bỉ, thì Harlequin làm việc bằng màn trình diễn. Từ mà nhà phát triển dùng là "seductive", và nhân vật này được viết để chỉ đọc được khi chuyển động: một sự hiện diện giàu tính điệu ảnh và hay biến đổi, mà ý định của anh ấy hiếm khi đứng yên đủ lâu để chắc chắn. Trong một visual novel, nơi phần lớn trọng lượng đè lên đối thoại, điều đó khiến anh ấy là người khó tóm tắt hơn trong hai nhân vật chính, và cũng là người đáng xem hơn trong suốt một lượt chơi.',
          'Wiki fan mô tả anh ấy là người phóng túng, tàn bạo, hay trêu ghẹm và âm thầm ghen tị, đồng thời lưu ý anh ấy không thoải mái với tình cảm. Phần ghen tị là điểm thú vị trong cách mô tả đó, bởi nó định khung lại cuộc cạnh tranh thành một thứ mà anh ấy muốn nhiều như Pierrot, chứ không chỉ là một thứ mà anh ấy đang tranh giành.',
        ],
      },
      {
        heading: 'Chiều cao và chi tiết ngoại hình',
        paragraphs: [
          `Bảng chiều cao của nhà phát triển xếp Harlequin ở ${formatHeight(chartFor('harlequin')).metric}, khoảng ${formatHeight(chartFor('harlequin')).imperial}. Nghĩa là anh ấy thấp hơn Pierrot 11 cm, một chênh lệch mà wiki fan xem là có ý nghĩa trong cách hai người được đặt đối diện nhau trên sân khấu.`,
          'Thiết kế của anh ấy được wiki fan mô tả là tóc đen xoăn tới gò má, với hai lọn xoăn thành hình trái tim trên trán bên trái, mặt nạ trắng có một hình thoi xanh lọt qua một bên mắt và một hình tam giác xanh dưới bên mắt kia, đôi mắt xanh độc chất sáng lên khi không đeo mặt nạ, cùng mũ trùm và trang phục xanh đen với đôi găng tay lệch nhau. Đây cũng là mô tả của fan chứ không phải phát biểu của nhà phát triển, và nó hữu ích nhất trong việc nhận ra anh ấy trong ảnh chụp màn hình và tranh vẽ.',
        ],
      },
      {
        heading: 'Thứ tự tuổi và người nhỏ tuổi nhất trong năm',
        paragraphs: [
          'Trong thứ tự tuổi do nhà phát triển công bố, Harlequin đứng cuối: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Anh ấy là người nhỏ tuổi nhất trong dàn nhân vật đã được giới thiệu, và nhỏ tuổi hơn người còn lại trong hai nhân vật chính của tuyến tình yêu tới bốn bậc.',
          'Đây là một sự thật được ghi chép rõ ràng, và đồng thời cũng là một trong những điều hay bị bóp méo nhất trên mạng. Rất nhiều tư liệu của fan gán cho Harlequin một tuổi cụ thể, và không ít con số trong đó còn mâu thuẫn với thứ tự đã công bố. Thứ tự mới là phiên bản đáng tin.',
        ],
      },
      {
        heading: 'Bảng xếp hạng sức mạnh',
        paragraphs: [
          'Harlequin chia sẻ hạng hai trong bảng xếp hạng sức mạnh của nhà phát triển với Jester, sau Pierrot và trước Doctor cùng Ticket Taker. Cộng thêm việc anh ấy vừa nhỏ tuổi nhất vừa thấp thứ hai, anh ấy luôn được mô tả là người nhanh nhất nhóm chứ không phải người nặng nhất — wiki fan cũng ghi nhận hai người hòa nhau ở hạng hai trong hạng mục sức mạnh thể chất thuần túy.',
        ],
      },
      {
        heading: 'Tư liệu chính thức nói gì về các mối quan hệ của anh ấy',
        paragraphs: [
          'Có một phát biểu của nhà phát triển rất dễ bị đọc sai và đáng được trích dẫn cẩn thận. Khi được hỏi về những vết cắn Harlequin để lại khi tán tỉnh, câu trả lời là chúng không phải lời cầu hôn, vết hằn không để lại sẹo, và việc kết hôn cùng tán tỉnh giữa các quái vật diễn ra khác với cách nhân vật chính sẽ hiểu. Câu đó ngắn, nhưng lại gánh nhiều việc: nó xác lập rằng cách tán tỉnh của Harlequin có logic riêng, và khung tham chiếu của nhân vật chính không phải khung tham chiếu của rạp xiếc.',
          'Wiki fan ghi nhận Harlequin cảm thấy an toàn bên cạnh Doctor, rằng Doctor là người anh ấy thích nhất trong rạp xiếc, và rằng anh ấy hòa hợp với Ticket Taker dù khác gu. Wiki cũng ghi nhận một mối liên hệ được ngụ ý với cái chết của Columbina — rằng Harlequin đã giết cô ấy để "cứu" cô ấy. Đó là một cách nói nặng, và bản thân wiki cũng trình bày nó là ngụ ý chứ không phải khẳng định. Nhà phát triển đã xác nhận hình dạng chung của lịch sử rạp xiếc trong các câu trả lời AMA, nên câu chuyện là có thật, nhưng cách đọc cụ thể về vai trò của Harlequin trong đó thì không được nguồn chính thức xác nhận.',
        ],
      },
      {
        heading: 'Tình trạng tuyến và kết cục',
        paragraphs: [
          'Kết cục tình yêu của Harlequin là một trong bốn kết cục mà nhà phát triển đã nêu tên, cùng với kết cục của Pierrot, của nhân vật chính và "All together". Không kết cục nào trong bốn kết cục đó được thực hiện. Bản build hiện tại chứa một kết cục, đó là kết cục xấu "Missing" ở Day 1.',
          'Vì vậy, một hướng dẫn phân tích kết cục của Harlequin hiện vẫn chưa thể được viết một cách trung thực. Một hướng dẫn liệt kê chính xác các lựa chọn cũng như màu vé cần dùng sẽ đang mô tả một bản build không tồn tại trong công khai, và người chơi làm theo sẽ thấy tuyến không khả dụng. Khi nó được phát hành, hướng dẫn hữu ích sẽ là chiến lược về điểm kiểm tra và ô lưu chứ không phải một bảng điều kiện kích hoạt bịa ra.',
        ],
      },
      {
        heading: 'Sự thật đã xác nhận và cách diễn giải',
        paragraphs: [
          'Cách chia của trang này như sau.',
        ],
        list: [
          'Đã được nhà phát triển xác nhận: chiều cao, vị trí nhỏ tuổi nhất trong thứ tự tuổi, hạng hai hòa với Jester trong bảng xếp hạng sức mạnh, cách anh ấy được mô tả là "đối thủ quyến rũ" của Pierrot, việc những vết cắn khi tán tỉnh không phải lời cầu hôn, và việc kết cục tình yêu của Harlequin đã lên kế hoạch.',
          'Từ bản build hiện tại: ngoại hình, các cảnh của anh ấy và các nhánh của anh ấy — một số xuất hiện của anh ấy thay đổi tuỳ theo nhánh cốt truyện, điều mà bản ghi chép lỗi chính thức cũng xác nhận.',
          'Do fan suy ra: phần mô tả đầy đủ về trang phục và mặt nạ, tiểu sử cá nhân, và các chi tiết cụ thể về mối quan hệ của anh ấy với Columbina.',
        ],
      },
    ],
    faq: [
      {
        question: 'Harlequin cao bao nhiêu trong The Freak Circus?',
        answer:
          'Harlequin cao 187 cm, khoảng 6 ft 1.62 in, theo bảng chiều cao đã công bố của nhà phát triển. Anh ấy là người thấp thứ hai trong năm nhân vật.',
      },
      {
        question: 'Harlequin có phải là nhân vật nhỏ tuổi nhất không?',
        answer:
          'Có. Trong thứ tự tuổi chính thức của nhà phát triển, anh ấy đứng thứ năm trong năm, từ lớn đến nhỏ: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Harlequin bao nhiêu tuổi?',
        answer:
          'Chưa từng có con số tuổi nào được công bố cho bất kỳ nhân vật nào. Chỉ có thứ tự tương đối là được ghi chép, và thứ tự đó đặt Harlequin ở cuối.',
      },
      {
        question: 'Tính cách của Harlequin thế nào?',
        answer:
          'Wiki fan mô tả anh ấy là người phóng túng, tàn bạo, hay trêu ghẹm và âm thầm ghen tị, đồng thời lưu ý anh ấy không thoải mái với tình cảm. Anh ấy là cái đối lập giàu tính điệu ảnh của Pierrot, và đó là lý do cuộc cạnh tranh mới có tác dụng.',
      },
      {
        question: 'Harlequin có quan hệ gì với Pierrot?',
        answer:
          'Hai người là đôi đối thủ trung tâm của game. Phần tóm tắt chính thức gọi Harlequin là "đối thủ quyến rũ" của Pierrot và đặt khung game là do một trong hai dẫn dắt. Wiki fan bổ sung rằng hai người quen nhau từ khi còn nhỏ và lịch sử chung của họ có liên quan đến Columbina.',
      },
      {
        question: 'Harlequin có tuyến không?',
        answer:
          'Kết cục tình yêu của Harlequin đã lên kế hoạch và đang được phát triển, nhưng chưa được thực hiện trong bản build công khai, nên chưa có điều kiện kích hoạt nào để ghi lại.',
      },
      {
        question: 'Có thể giành được kết cục của Harlequin không?',
        answer:
          'Chưa. Kết cục chơi được duy nhất là kết cục xấu "Missing" ở Day 1. Kết cục của Harlequin đã được công bố và vẫn đang được viết.',
      },
      {
        question: 'Harlequin có nguy hiểm không?',
        answer:
          'Game được xếp hạng 18+ và các cảnh báo nội dung của game bao gồm giết người, bắt cóc, sử dụng ma túy không đồng ý và chế ngự thân thể, nên toàn bộ dàn nhân vật được viết theo hướng nguy hiểm. Riêng Harlequin, theo mô tả của fan về các cảnh của anh ấy, được viết là khó đoán và tàn bạo.',
      },
      {
        question: 'Chuyện gì đã xảy ra với Columbina?',
        answer:
          'Cô ấy là cựu thành viên của rạp xiếc, và cái chết của cô ấy định hình tiểu sử của cả hai nhân vật chính. Wiki fan ghi nhận một ý ngụ ý rằng Harlequin đã giết cô ấy để "cứu" cô ấy, và rằng Pierrot đã từ chối tham gia. Thiết kế của cô ấy vẫn đang trong giai đoạn sản xuất và các chi tiết được cố ý giấu.',
      },
      {
        question: 'Harlequin có kết cục tốt không?',
        answer:
          'Chưa có kết cục tốt nào được thực hiện. Kết cục duy nhất trong bản build hiện tại là một kết cục xấu, và kết cục tình yêu của Harlequin là công việc đã lên kế hoạch nhưng chưa phát hành.',
      },
    ],
  },
  jester: {
    role: 'Người đứng đầu rạp xiếc, và một nhân vật không có tuyến riêng',
    intro:
      'Jester là nhân vật hay bị viết sai nhất trên mạng, và thường là theo hướng tạo cho anh ấy một tuyến tình yêu mà anh ấy không có. Nhà phát triển đã nói rất rõ: các lựa chọn tuyến là Pierrot, Harlequin, cả hai, hoặc không chọn ai. Jester xuất hiện trong bản build hiện tại như một thành viên của cả đoàn tuồng, và chính sự hiện diện của anh ấy khiến rạp xiếc có cảm giác như một tổ chức chứ không chỉ là một cặp đối thủ cộng một phông nền.',
    sections: [
      {
        heading: 'Trả lời nhanh',
        paragraphs: [
          'Jester cao 192 cm, là người cao thứ ba trong năm nhân vật đã được giới thiệu, và đứng thứ tư trong năm người theo thứ tự tuổi của nhà phát triển. Anh ấy chia sẻ hạng hai trong bảng xếp hạng sức mạnh với Harlequin. Anh ấy không có tuyến và không có kết cục, và nhà phát triển đã nói rõ rằng việc biến những nhân vật còn lại thành lựa chọn tình yêu là một khả năng chứ không phải một lời hứa.',
        ],
      },
      {
        heading: 'Jester là ai',
        paragraphs: [
          'Jester đóng vai nhân vật có uy quyền của rạp xiếc. Wiki fan mô tả anh ấy là phản diện chính của Freak Circus, nhưng điềm tĩnh và kiềm chế thay vì bất ổn định — một cách mô tả hợp với thiết kế hơn chỉ riêng từ "phản diện". Anh ấy là người quyết định vai diễn, người phân công các vai mục trong rạp xiếc, và là người được nhắc đến với sự pha trộn giữa kính trọng và khó chịu.',
          'Điều quan trọng với người đọc là ảnh hưởng của anh ấy lên các nhân vật khác mang tính cấu trúc. Khi một nguồn nói một nhân vật kính trọng Jester, hoặc sợ anh ấy, hoặc hành động theo những quy tắc do Jester đặt ra, thì đó là mô tả hình dạng của rạp xiếc chứ không phải một tình tiết cốt truyện đơn lẻ.',
        ],
      },
      {
        heading: 'Chiều cao và chi tiết ngoại hình',
        paragraphs: [
          `Bảng chiều cao của nhà phát triển xếp Jester ở ${formatHeight(chartFor('jester')).metric}, khoảng ${formatHeight(chartFor('jester')).imperial}. Anh ấy thấp hơn Pierrot 6 cm và thấp hơn Doctor 20 cm.`,
          'Wiki fan mô tả anh ấy có tóc tím đậm dài, mặt nạ trắng ghi một trái tim tím ngược và một ngôi sao tím, áo cà mã tím cùng găng tay opera, và lưu ý anh ấy thuận cả hai tay. Mô tả đó đến từ fan chứ không phải từ phát biểu của nhà phát triển.',
        ],
      },
      {
        heading: 'Thứ tự tuổi',
        paragraphs: [
          'Trong thứ tự tuổi do nhà phát triển công bố, Jester đứng thứ tư trong năm, từ lớn đến nhỏ: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Anh ấy lớn tuổi hơn Harlequin và nhỏ tuổi hơn Pierrot, Doctor và Ticket Taker.',
          'Wiki fan ghi lại một ngày sinh cho Jester và nói rằng nhà phát triển từng đăng lời chúc mừng sinh nhật cho anh ấy, khiến ngày sinh của anh ấy có căn cứ hơn phần lớn những người khác — nhưng các ngày sinh đang lưu hành cho phần còn lại của dàn nhân vật đều do fan gán, và thứ tự tuổi vẫn là con số chính thức duy nhất.',
        ],
      },
      {
        heading: 'Bảng xếp hạng sức mạnh',
        paragraphs: [
          'Jester chia sẻ hạng hai với Harlequin trong bảng xếp hạng sức mạnh của nhà phát triển, sau Pierrot và trước Doctor cùng Ticket Taker. Giống Harlequin, wiki fan ghi nhận anh ấy mạnh nhưng về sức mạnh thuần túy vẫn kém Pierrot.',
        ],
      },
      {
        heading: 'Tư liệu chính thức xác lập điều gì',
        paragraphs: [
          'Những phát biểu chính thức rõ ràng nhất về Jester đến từ một câu trả lời AMA về các tuyến: không có tuyến nào của Jester, và nếu sau này có thêm tuyến thì nhiều khả năng chúng sẽ đến dưới dạng bản mở rộng hoặc DLC, với chưa có gì được quyết định. Một câu trả lời khác mô tả việc biến những nhân vật còn lại thành lựa chọn tình yêu là điều nhà phát triển muốn làm nhưng không thể hứa.',
          'Mọi điều khác thường được nói về anh ấy — rằng anh ấy kiểm soát những "Fools", rằng anh ấy gọi con người là "strays", rằng anh ấy chọn vai diễn trong rạp xiếc cho từng người — đều đến từ wiki fan chứ không phải từ nhà phát triển, và tốt nhất nên được hiểu là cách diễn giải các cảnh của anh ấy.',
        ],
      },
      {
        heading: 'Tình trạng tuyến và kết cục',
        paragraphs: [
          'Không có tuyến nào của Jester và không có kết cục nào của Jester. Bốn kết cục mà nhà phát triển đã nêu tên thuộc về Pierrot, Harlequin, nhân vật chính và kết cục chung "All together".',
          'Cũng đáng nói thẳng một lỗi thường gặp khác: ý tưởng rằng tuyến của Jester "mở khoá ở Day 2" xuất hiện trong nhiều hướng dẫn. Không có gì giống như vậy tồn tại. Những gì thực sự đến trong bản cập nhật Day 2 là các nhân vật bổ sung, sprite động, menu được thiết kế lại và một phiên bản Android — chứ không phải tuyến mới.',
        ],
      },
      {
        heading: 'Sự thật đã xác nhận và cách diễn giải',
        paragraphs: [
          'Riêng với Jester thì tỉ lệ này lại đặc biệt quan trọng, vì rất nhiều tư liệu đã công bố về anh ấy là suy đoán được trình bày như cơ chế trong game.',
        ],
        list: [
          'Đã được nhà phát triển xác nhận: chiều cao, vị trí trong thứ tự tuổi, hạng hai hòa trong bảng xếp hạng sức mạnh, và việc anh ấy không có tuyến.',
          'Từ bản build hiện tại: ngoại hình, các cảnh của anh ấy, và uy quyền mà anh ấy nắm giữ với các nhân vật khác.',
          'Do fan suy ra: khái niệm "Fools", cách gọi con người là "strays", chi tiết về cách anh ấy phân công vai diễn, và tiểu sử cá nhân của anh ấy.',
        ],
      },
    ],
    faq: [
      {
        question: 'Jester cao bao nhiêu?',
        answer:
          '192 cm, khoảng 6 ft 3.59 in, theo bảng chiều cao đã công bố của nhà phát triển. Anh ấy là người cao thứ ba trong năm.',
      },
      {
        question: 'Jester có phải là người đứng đầu rạp xiếc không?',
        answer:
          'Wiki fan mô tả anh ấy là người đứng đầu và phản diện chính của rạp xiếc, và uy quyền của anh ấy với các nhân vật khác là nhất quán xuyên suốt bản build. Mô tả đó đến từ fandom chứ không phải từ phát biểu của nhà phát triển.',
      },
      {
        question: 'Jester có tuyến không?',
        answer:
          'Không. Nhà phát triển đã xác nhận không có tuyến nào của Jester. Các lựa chọn duy nhất là Pierrot, Harlequin, cả hai, hoặc không chọn ai.',
      },
      {
        question: 'Jester có kết cục không?',
        answer:
          'Không. Bốn kết cục đã lên kế hoạch thuộc về Pierrot, Harlequin, nhân vật chính và "All together".',
      },
      {
        question: 'Tuyến của Jester có mở khoá ở Day 2 không?',
        answer:
          'Không. Nhiều hướng dẫn khẳng định điều này, nhưng không có gì giống như vậy tồn tại. Bản cập nhật Day 2 bổ sung các nhân vật, sprite động, menu được thiết kế lại và một phiên bản Android.',
      },
      {
        question: 'Jester bao nhiêu tuổi?',
        answer:
          'Không có con số tuổi nào được công bố. Trong thứ tự tuổi chính thức, anh ấy đứng thứ tư trong năm, từ lớn đến nhỏ.',
      },
      {
        question: 'Jester có mạnh nhất không?',
        answer:
          'Không — Pierrot đứng hạng nhất. Jester chia sẻ hạng hai với Harlequin.',
      },
      {
        question: 'Có thể yêu Jester không?',
        answer:
          'Không được trong bản build hiện tại. Nhà phát triển đã nói việc biến những nhân vật còn lại thành lựa chọn tình yêu là một khả năng mà anh ấy muốn khám phá nhưng không thể hứa.',
      },
    ],
  },
  'the-doctor': {
    role: 'Sự hiện diện lâm sàng ở rìa của dàn nhân vật',
    intro:
      'Doctor xuất hiện trong bản build hiện tại và không có tuyến, không có kết cục, cũng không có mục chiều cao chính thức nào trong bảng công khai mà fan hay viện dẫn. Điều làm anh ấy đáng đọc là sự tương phản mà anh ấy tạo ra: một giọng văn lâm sàng đặt vào giữa lễ hội, và một nhân vật mà fandom mô tả là đồng thời người bình tĩnh nhất và người nguy hiểm nhất trong lều trại.',
    sections: [
      {
        heading: 'Trả lời nhanh',
        paragraphs: [
          'Doctor cao 207 cm, khiến anh ấy là người cao nhất trong năm nhân vật đã được giới thiệu với khoảng cách khá rõ ràng — cao hơn Pierrot 9 cm. Anh ấy đứng thứ hai trong năm người theo thứ tự tuổi của nhà phát triển, nghĩa là chỉ Ticket Taker lớn tuổi hơn anh ấy. Anh ấy đứng thứ tư trong năm người về sức mạnh, và không có tuyến cũng không có kết cục.',
        ],
      },
      {
        heading: 'Doctor là ai',
        paragraphs: [
          'Wiki fan mô tả Doctor là một phản diện phụ, hoặc có thể là một nhân vật trung lập, và đưa ra hai mặt của anh ấy: một mặt bình tĩnh và giữ bình tráng, mặt kia nồng nhiệt và tàn bạo. Đó là một cách đọc hữu ích với các cảnh của anh ấy, vì sự chuyển đổi được mô tả là nhìn thấy được — mắt anh ấy lóe đỏ khi một cảm xúc nào đó chiếm lĩnh. Wiki cũng lưu ý anh ấy thích trí khéo hơn sức mạnh thô, điều này nhất quán với một nhân vật vừa cao nhất vừa chỉ đứng thứ tư về sức mạnh.',
          'Anh ấy cũng là nhân vật dễ bị mô tả sai thành người có tuyến nhất. Ý tưởng về một tuyến của Doctor với "kết cục tốt" xuất hiện trong nhiều hướng dẫn cũ, và nó không tương ứng với bất kỳ điều gì nhà phát triển từng mô tả.',
        ],
      },
      {
        heading: 'Chiều cao và chi tiết ngoại hình',
        paragraphs: [
          `Bảng chiều cao của nhà phát triển xếp Doctor ở ${formatHeight(chartFor('the-doctor')).metric}, khoảng ${formatHeight(chartFor('the-doctor')).imperial} — cao nhất trong năm, hơn 9 cm.`,
          'Wiki fan mô tả anh ấy có da đỏ, tóc đỏ ngắn, và đeo mặt nạ bác sĩ dịch hạch hình mỏ chim với những tròng kính lưng phát sáng màu xanh lam, đồng thời lưu ý đôi chân và bàn chân của anh ấy chưa từng được hiển thị. Wiki cũng ghi nhận anh ấy thuận tay trái, không biết bơi, và mắt anh ấy lóe đỏ khi trải qua một số cảm xúc nhất định. Tất cả đều là mô tả của fan rút ra từ tư liệu, không phải phát biểu của nhà phát triển.',
        ],
      },
      {
        heading: 'Thứ tự tuổi và sức mạnh',
        paragraphs: [
          'Doctor đứng thứ hai trong năm người theo thứ tự tuổi chính thức, từ lớn đến nhỏ: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Chỉ Ticket Taker lớn tuổi hơn anh ấy.',
          'Trong bảng xếp hạng sức mạnh, anh ấy đứng thứ ba, trước Ticket Taker và sau Pierrot cùng Harlequin, Jester bị hòa. Cao nhất mà vẫn chỉ mạnh thứ ba là tổ hợp thú vị ở đây: Doctor lớn chứ không mạnh, và mô tả của fan rằng anh ấy thích trí khéo hơn sức mạnh đúng là điều mà bạn có thể mong đợi từ một nhân vật như vậy.',
        ],
      },
      {
        heading: 'Một chi tiết đáng biết về giọng nói',
        paragraphs: [
          'Doctor có giọng Nga trong kịch bản tiếng Anh, dù toàn bộ dàn nhân vật là người Brazil. Đây là một câu đùa có chủ đích giữa diễn viên lồng tiếng và người sáng tạo, và được wiki fan ghi lại kèm trích dẫn tới bài đăng Tumblr của chính diễn viên lồng tiếng. Nó là một chi tiết nhỏ, nhưng thuộc loại chi tiết cho thấy có bao nhiêu phần tài liệu của fan thực sự có nguồn chứ không phải phỏng đoán.',
        ],
      },
      {
        heading: 'Tình trạng tuyến và kết cục',
        paragraphs: [
          'Doctor không có tuyến và không có kết cục. Nhà phát triển đã xác nhận các lựa chọn tuyến là Pierrot, Harlequin, cả hai, hoặc không chọn ai, và rằng mọi tuyến nhân vật bổ sung nếu có nhiều khả năng sẽ đến dưới dạng bản mở rộng hoặc DLC, với chưa có gì được quyết định.',
          'Kết cục "Clean Hands" mà một số trang fan cũ gán cho Doctor không được bất kỳ nguồn chính thức nào ủng hộ, và trang này không tiếp tục coi đó là sự thật.',
        ],
      },
      {
        heading: 'Sự thật đã xác nhận và cách diễn giải',
        paragraphs: [
          'Trang của Doctor có nhiều tư liệu do fan suy ra hơn so với tư liệu chính thức hơn bất kỳ nhân vật nào khác trong dàn, chủ yếu là vì anh ấy không có tuyến và do đó cũng không có mô tả tự sự nào từ nguồn chính thức về tuyến đó.',
        ],
        list: [
          'Đã được nhà phát triển xác nhận: chiều cao là cao nhất trong năm, vị trí thứ hai trong thứ tự tuổi, vị trí thứ tư trong bảng xếp hạng sức mạnh, và việc anh ấy không có tuyến.',
          'Từ bản build hiện tại: ngoại hình, các cảnh của anh ấy, và cách sự bình tĩnh của anh ấy bị phá vỡ.',
          'Do fan suy ra: các thí nghiệm và mẫu vật được gán cho lều của anh ấy, tiểu sử cá nhân, và những gì hoạt hình nhân vật nói về sở thích của anh ấy.',
        ],
      },
    ],
    faq: [
      {
        question: 'Doctor cao bao nhiêu?',
        answer:
          '207 cm, khoảng 6 ft 9.5 in — cao nhất trong năm nhân vật, cao hơn Pierrot 9 cm.',
      },
      {
        question: 'Doctor có phải là người lớn tuổi nhất không?',
        answer:
          'Anh ấy là người lớn tuổi thứ hai. Thứ tự tuổi chính thức, từ lớn đến nhỏ, là Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Doctor có mạnh nhất không?',
        answer:
          'Không. Anh ấy đứng thứ tư trong danh sách sức mạnh của nhà phát triển, sau Pierrot, Harlequin và Jester.',
      },
      {
        question: 'Doctor có tuyến không?',
        answer:
          'Không. Nhà phát triển đã xác nhận không có tuyến nào của Doctor.',
      },
      {
        question: 'Doctor có kết cục tốt không?',
        answer:
          'Không. Trong bản build hiện tại, Doctor không có tuyến cũng không có kết cục. Kết cục duy nhất tồn tại là kết cục xấu "Missing" ở Day 1.',
      },
      {
        question: 'Có kết cục "Clean Hands" dành cho Doctor không?',
        answer:
          'Không. Cách nói đó xuất hiện ở một số trang fan nhưng không được bất kỳ nguồn chính thức nào ủng hộ, và trang này không liệt kê nó như sự thật.',
      },
      {
        question: 'Doctor có quan hệ gì với Harlequin?',
        answer:
          'Wiki fan ghi nhận Harlequin cảm thấy an toàn bên cạnh Doctor và rằng Doctor là người anh ấy thích nhất trong rạp xiếc. Đó là một cách đặc tả do fan suy ra chứ không phải phát biểu của nhà phát triển.',
      },
      {
        question: 'Vì sao Doctor có giọng Nga?',
        answer:
          'Đây là một câu đùa có chủ đích giữa diễn viên lồng tiếng và người sáng tạo, được wiki fan ghi lại kèm trích dẫn tới Tumblr của chính diễn viên lồng tiếng. Phần còn lại của dàn nhân vật là người Brazil.',
      },
      {
        question: 'Có thể yêu Doctor không?',
        answer:
          'Hiện tại thì chưa. Nhà phát triển đã nói việc biến những nhân vật còn lại thành lựa chọn tình yêu là một khả năng mà anh ấy muốn khám phá nhưng không thể hứa.',
      },
    ],
  },
  'ticket-taker': {
    role: 'Người giữ ngưỡng cửa, và người lớn tuổi nhất trong năm',
    intro:
      'Ticket Taker là nhân vật bạn gặp trước tiên, và cũng là người có tuổi được ghi nhận chính xác nhất: thứ tự tuổi do nhà phát triển công bố đặt anh ấy ở vị trí đầu tiên. Anh ấy cũng là nhân vật hay bị gán một tuyến tình yêu không tồn tại nhất, khiến anh ấy trở thành một trường hợp thử hữu ích để đọc tư liệu của fan một cách phê phán.',
    sections: [
      {
        heading: 'Trả lời nhanh',
        paragraphs: [
          'Ticket Taker cao 183 cm, là người thấp nhất trong năm nhân vật đã được giới thiệu, và đứng thứ nhất trong năm người theo thứ tự tuổi của nhà phát triển, tức là lớn tuổi nhất. Anh ấy đứng cuối bảng xếp hạng sức mạnh. Anh ấy không có tuyến và không có kết cục, và nhà phát triển đã xác nhận trực tiếp điều đó.',
        ],
      },
      {
        heading: 'Ticket Taker là ai',
        paragraphs: [
          'Anh ấy nắm một vị trí ranh giới trong cốt truyện: một nhân vật ở lối vào của rạp xiếc, gắn với sự cho phép, các ngưỡng cửa và cơ chế vận hành của buổi trình diễn. Wiki fan mô tả anh ấy là người ngoan phục và tận tâm với mục đích của rạp xiếc, trưởng thành và chuyên nghiệp, bận tâm với sự sạch sẽ và trật tự, và nói thẳng nguyên tắc của mình: ở đây, không ai được phá vỡ vai diễn.',
          'Chi tiết cuối cùng đó chính là điều khiến anh ấy hoạt động được như một nhân vật chứ không chỉ như một người gác cổng. Trong một câu chuyện về rạp xiếc vận hành bằng màn trình diễn, một nhân vật có công việc bảo vệ ranh giới giữa khán giả và diễn viên buộc phải tự tin vào chính buổi trình diễn đó.',
        ],
      },
      {
        heading: 'Chiều cao và chi tiết ngoại hình',
        paragraphs: [
          `Bảng chiều cao của nhà phát triển xếp Ticket Taker ở ${formatHeight(chartFor('ticket-taker')).metric}, khoảng ${formatHeight(chartFor('ticket-taker')).imperial} — thấp nhất trong năm, thấp hơn Doctor 24 cm.`,
          'Wiki fan mô tả anh ấy có tóc xanh navy ngắn, một chiếc mặt nạ chia đôi với nửa trắng nửa đen, áo cà mã xanh navy viền vàng, khăn cổ vàng và mũ chóp, đồng thời lưu ý anh ấy có hai mắt khác màu — một bên trắng, một bên xanh. Tên tiếng Bồ Đào Nha của nhân vật này, Bilheteiro, cũng xuất hiện trong cùng tư liệu đó.',
        ],
      },
      {
        heading: 'Người lớn tuổi nhất trong năm',
        paragraphs: [
          'Đây là sự thật được ghi chép vững nhất về Ticket Taker. Anh ấy đứng đầu thứ tự tuổi do nhà phát triển công bố: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Là người lớn tuổi nhất trong nhóm và cũng là người giữ trật tự, tuổi của anh ấy hợp với vai trò chứ không làm vai trò trở nên khó hiểu.',
          'Giống như mọi nhân vật khác, chưa có con số tuổi nào được công bố, và ngày sinh đang lưu hành về anh ấy là do fan gán.',
        ],
      },
      {
        heading: 'Bảng xếp hạng sức mạnh',
        paragraphs: [
          'Anh ấy đứng cuối trong năm người ở danh sách sức mạnh của nhà phát triển, dưới Doctor. Cộng thêm việc anh ấy thấp nhất, điều này khiến anh ấy là người ít uy nghi nhất về thể chất trong đoàn tuồng — điều này nhất quán với một nhân vật mà toàn bộ uy quyền đến từ quy trình và quy tắc.',
        ],
      },
      {
        heading: 'Hệ thống vé',
        paragraphs: [
          'Nhà phát triển đã xác nhận có tám loại vé. Màu hồng nằm dưới dàn nhân vật chính, màu đỏ và xanh lá đánh dấu một lựa chọn mà nhân vật chính tự đưa ra, còn tổ hợp hồng và đỏ nghĩa là Ticket Taker sẽ tự động lấy phương án màu đỏ. Đây là một trong những phần thông tin cơ chế chính thức cụ thể nhất trong game, và nó giải thích vì sao Ticket Taker lại quan trọng với cấu trúc rẽ nhánh dù anh ấy không có tuyến riêng.',
          'Wiki fan bổ sung rằng nhân vật ở quán cà phê đưa cho nhân vật chính một vé màu hồng chính là Ticket Taker đã cải trang, và đó cũng chính là cách kết cục xấu "Missing" bắt đầu. Cách nhận diện đó là do fan suy ra, nhưng nó nối thẳng với kết cục duy nhất mà bản build thực sự có.',
        ],
      },
      {
        heading: 'Tình trạng tuyến và kết cục',
        paragraphs: [
          'Ticket Taker không có tuyến và không có kết cục. Nhà phát triển đã nói các lựa chọn tuyến là Pierrot, Harlequin, cả hai, hoặc không chọn ai, và rằng những nhân vật còn lại có khi nào có tuyến hay không thì nhiều khả năng chỉ đến dưới dạng bản mở rộng hoặc DLC.',
          'Cần nói thẳng rằng một số hướng dẫn fan có từ lâu mô tả một tuyến tình yêu của Ticket Taker mở khoá nhờ sự kiên trì và đối thoại cẩn thận. Trong bản build công khai không tồn tại tuyến như vậy.',
        ],
      },
      {
        heading: 'Sự thật đã xác nhận và cách diễn giải',
        paragraphs: [
          'Đối với một nhân vật phụ, Ticket Taker được ghi chép trong tư liệu chính thức một cách khá đầy đủ, phần lớn là vì hệ thống vé là một trong số ít cơ chế đã được xác nhận.',
        ],
        list: [
          'Đã được nhà phát triển xác nhận: chiều cao là thấp nhất trong năm, vị trí thứ nhất trong thứ tự tuổi, vị trí cuối cùng trong bảng xếp hạng sức mạnh, việc có tám loại vé, và việc anh ấy không có tuyến.',
          'Từ bản build hiện tại: ngoại hình, các cảnh của anh ấy, và việc nhân vật chính được đưa một vé màu hồng trong Day 1.',
          'Do fan suy ra: lốt cải trang thành người đàn ông "Không rõ" ở quán cà phê, biệt danh "kẻ thao túng hiện thực", và các chi tiết về lịch sử của anh ấy với Columbina.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ticket Taker cao bao nhiêu?',
        answer:
          '183 cm, khoảng 6 ft 0 in — thấp nhất trong năm nhân vật, thấp hơn Doctor 24 cm.',
      },
      {
        question: 'Ticket Taker có phải là người lớn tuổi nhất không?',
        answer:
          'Có. Anh ấy đứng đầu thứ tự tuổi chính thức của nhà phát triển: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Ticket Taker có mạnh nhất không?',
        answer:
          'Không. Anh ấy đứng cuối trong năm người ở danh sách sức mạnh của nhà phát triển.',
      },
      {
        question: 'Có thể yêu Ticket Taker không?',
        answer:
          'Không. Nhà phát triển đã xác nhận không có tuyến nào của Ticket Taker. Các lựa chọn là Pierrot, Harlequin, cả hai, hoặc không chọn ai.',
      },
      {
        question: 'Ticket Taker có tuyến hay kết cục không?',
        answer:
          'Không có cái nào. Anh ấy xuất hiện xuyên suốt câu chuyện như một nhân vật có uy quyền, nhưng không tuyến nào và không kết cục nào thuộc về anh ấy.',
      },
      {
        question: 'Có bao nhiêu loại vé?',
        answer:
          'Nhà phát triển đã xác nhận là tám. Màu hồng nằm dưới dàn nhân vật chính, màu đỏ và xanh lá đánh dấu một lựa chọn của nhân vật chính, còn tổ hợp hồng và đỏ nghĩa là Ticket Taker sẽ tự động lấy phương án màu đỏ.',
      },
      {
        question: 'Vé màu đỏ là gì?',
        answer:
          'Màu đỏ và xanh lá là những màu đánh dấu một lựa chọn mà nhân vật chính tự đưa ra. Tổ hợp hồng và đỏ nghĩa là Ticket Taker chọn phương án màu đỏ thay cho nhân vật chính.',
      },
      {
        question: 'Ticket Taker có phải là người đàn ông ở quán cà phê không?',
        answer:
          'Wiki fan nhận ra nhân vật "Không rõ" ở quán cà phê, người đưa cho nhân vật chính một vé màu hồng, chính là Ticket Taker đã cải trang. Đó là cách nhận diện do fan suy ra, và cũng chính vé màu hồng đó mở đầu kết cục "Missing".',
      },
      {
        question: 'Vì sao Ticket Taker quan trọng dù không có tuyến?',
        answer:
          'Anh ấy kiểm soát hệ thống vé, một trong số ít cơ chế đã được xác nhận trong game, và là nhân vật xác lập ranh giới giữa nhân vật chính với tư cách khách ghé thăm và với tư cách người tham gia.',
      },
    ],
  },
};
