import type { BlogPost } from './blog-posts';

// Vietnamese edition of the blog posts.
//
// This mirrors POSTS_EN in blog-posts.ts: same slugs, same order, same dates,
// same images, same HTML structure (heading/list counts and order). The English
// version is the source of truth; this file only re-expresses it in Vietnamese
// prose. Every hedge in the English text survives the translation — planned
// stays planned, unverified stays unverified.

export const POSTS_VI: BlogPost[] = [
  {
    slug: 'day-2-walkthrough-save-strategy',
    title: 'Hướng dẫn từng bước Ngày 2 trong The Freak Circus: lều xiếc, bản lưu và kết cục xấu',
    description: 'Một hướng dẫn có đánh dấu tiết lộ nội dung cho phiên bản 0.2 về đoạn mở đầu bị giam giữ, các lều của rạp xiếc, phần giới thiệu nhân vật, các điểm lưu game, và cách khám phá Ngày 2 an toàn nhất mà không nhầm lẫn biến thể cảnh với tuyến đã hoàn thành.',
    date: '2026-09-02',
    tags: ['Ngày 2', 'Hướng dẫn từng bước', 'Phiên bản 0.2'],
    image: '/images/home/characters.webp',
    imageAlt: 'Dàn nhân vật The Freak Circus quây quanh nhân vật chính',
    readingTime: 'Đọc trong 10 phút',
    content: `
      <p class="article-lede">Ngày 2 là lúc <em>The Freak Circus</em> thôi chỉ là một phần giới thiệu đầy bất an và bắt đầu siết tay quanh nhân vật chính. Câu hỏi hữu ích không phải là "nên khóa tuyến hoàn chỉnh nào?" — phiên bản 0.2 chưa có kết cục hoàn chỉnh của Pierrot hay Harlequin — mà là "nên lưu ở đâu để xem được các biến thể hiện có mà không phải chơi lại toàn bộ bản nguyên mẫu?"</p>
      <div class="walkthrough-note"><strong>Giới hạn của hướng dẫn</strong><p>Bài viết này áp dụng cho bản nguyên mẫu 0.2 công khai và chứa tiết lộ cốt truyện. Trang chính thức xác nhận năm phần giới thiệu nhân vật và một kết cục xấu. Trang không xác nhận nhiều tuyến hoàn chỉnh, một hệ thống sưu tầm vật phẩm, hay một menu cảnh ẩn có thể mở khóa.</p></div>

      <h2>Tạo các bản lưu này trước khi áp lực bắt đầu</h2>
      <p>Ngày 2 đủ ngắn để chơi lại, nhưng đoạn mở đầu đủ dài để việc lặp lại chỉ nhằm thử một câu trả lời trở nên nhàm chán. Hãy giữ các ô lưu riêng biệt thay vì ghi đè lên bản lưu mới nhất:</p>
      <ol class="walkthrough-steps">
        <li><strong>NGÀY 2 — BẮT ĐẦU:</strong> khoảnh khắc đầu tiên ngày mới trao quyền điều khiển cho bạn.</li>
        <li><strong>PHÒNG BỊ GIAM:</strong> trước khi dấn vào một câu trả lời căng thẳng với Pierrot hoặc Harlequin.</li>
        <li><strong>QUAY LẠI RẠP XIẾC:</strong> trước khi bước vào một lều trình diễn.</li>
        <li><strong>NHÁNH LỀU:</strong> một ô lưu mới cho từng lều hoặc phần giới thiệu nhân vật.</li>
        <li><strong>CẢNH CUỐI:</strong> trước bất kỳ lựa chọn nào nghe có vẻ dứt khoát, thách thức hoặc cố tình nguy hiểm.</li>
      </ol>
      <p>Cách này đáng tin hơn một bản lưu duy nhất liên tục bị ghi đè. Nếu một cảnh kết thúc sớm hơn dự kiến — hoặc đi đến kết cục xấu — bạn vẫn còn một điểm sạch chỉ lùi lại vài phút.</p>

      <h2>Đoạn mở đầu trong phòng giam: hãy đọc sự tương phản, đừng đo thanh cảm tình</h2>
      <p>Ngày mở màn với nhân vật chính bị chế ngự trong một căn phòng lạ. Pierrot trình bày hành động của mình như sự bảo vệ; sự xuất hiện của Harlequin biến lời tuyên bố đó thành một cuộc đối đầu. Cảnh này quan trọng vì nó cho thấy hai đối thủ áp đặt quyền kiểm soát khác nhau ra sao, chứ không phải vì nó yêu cầu bạn chọn ngay một tuyến tình yêu vĩnh viễn.</p>
      <p>Ở lượt chơi đầu, hãy trả lời theo cách thấy tự nhiên và tiếp tục. Khi chơi lại, quay lại bản lưu <strong>PHÒNG BỊ GIAM</strong> và mỗi lần đổi một câu trả lời. Như vậy bạn sẽ nhận ra mình tìm được một biến thể cảnh thực sự hay chỉ là một câu thoại khác.</p>
      <div class="walkthrough-tip"><strong>Đừng diễn giải quá mức các đạo cụ.</strong><p>Chiếc mặt nạ và tấm vé đỏ là những vật phẩm có ý nghĩa trong cốt truyện, nhưng phiên bản 0.2 không thiết lập một hệ thống đồ vật thông thường mà việc thu thập chúng sẽ mở khóa các kết cục sau này. Màu vé trong game này quả thật mang nghĩa đã được xác nhận — đỏ và xanh lá đánh dấu một lựa chọn của nhân vật chính, còn hồng nằm dưới dàn nhân vật chính — nhưng đó là tín hiệu phân nhánh chứ không phải một danh sách cần thu thập. Hãy coi chiếc mặt nạ là một vật phẩm trong cảnh, trừ khi chính game đưa ra một tương tác sau đó.</p></div>

      <h2>Quay lại rạp xiếc: cách khám phá các lều</h2>
      <p>Phần rạp xiếc mở rộng dàn nhân vật qua những không gian theo chủ đề. Chiến lược tốt nhất rất đơn giản: lưu trước khi vào, xem hết cảnh mà không bỏ qua, rồi dùng bản lưu đó cho biến thể tiếp theo. Đừng coi một phần giới thiệu nhân vật là một tuyến hoàn chỉnh.</p>

      <h3>Lều xanh dương — Ticket Taker và những tấm gương</h3>
      <p>Trình tự gương được xây dựng để khiến thông tin thị giác trở nên khó tin. Hãy nhìn kỹ xem hình phản chiếu nào đang lên tiếng và Ticket Taker định hướng cách bạn hiểu những gì mình thấy ra sao. Không cần phải giải mọi hình ảnh như một câu đố ngay trong lần đầu; mục tiêu thực tế là hoàn tất phần giới thiệu và giữ lại một bản lưu cho lần đọc chậm hơn thứ hai.</p>

      <h3>Lều màu cyan — Doctor</h3>
      <p>Phần giới thiệu của Doctor dựa nhiều nhất vào sự chế ngự, soi xét và hình ảnh kinh dị y khoa. Nếu những chủ đề này khiến bạn khó chịu, đây là lúc dùng tính năng bỏ qua một cách thận trọng hoặc tạm dừng. Xét về tuyến, vâng lời hay kháng cự có thể thay đổi sắc thái của cuộc đối đáp, nhưng cả hai đều không nên được quảng bá như một tuyến hay kết cục hoàn chỉnh của Doctor.</p>

      <h3>Không gian biểu diễn tím hoặc đen — Jester</h3>
      <p>Buổi biểu diễn của Jester chứa một phần nền truyện dày đặc bậc nhất Ngày 2. Hãy để lời thoại diễn ra bình thường thay vì bấm qua nhanh. Quan trọng hơn, hãy coi buổi biểu diễn như một câu chuyện được kể <em>bên trong</em> game: nó tiết lộ rạp xiếc nói về quá khứ của mình như thế nào, nhưng nó không tự động là một bản tường thuật trung lập, đầy đủ về động cơ của mọi nhân vật.</p>

      <h2>Cách bảo vệ lượt chơi khỏi kết cục xấu</h2>
      <p>Mô tả phiên bản chính thức liệt kê một kết cục xấu. Một hướng dẫn thận trọng không nên bịa ra một "câu trả lời đúng" phổ quát khi chưa có phép thử lựa chọn có thể tái hiện, nên hãy dùng chính game làm tín hiệu:</p>
      <ul>
        <li>Lưu trước những câu trả lời công khai nguy hiểm hoặc nghe có vẻ kết thúc.</li>
        <li>Nếu câu chuyện cắt sang một kết cục hoặc quay lại menu, đọc bản lưu nhánh gần nhất.</li>
        <li>Chỉ đổi câu trả lời có ý nghĩa cuối cùng trước tiên; đừng lập tức chơi lại Ngày 2 ngay.</li>
        <li>Giữ bản lưu ở kết cục xấu nếu bạn muốn một hồ sơ đầy đủ về bản nguyên mẫu hiện tại.</li>
      </ul>
      <p>Quan trọng nhất, chạm đến kết cục xấu không có nghĩa là bản lưu bị hỏng. Nó nghĩa là bạn đã tìm thấy một trong số ít kết quả mà bản build hiện tại nói rõ là có sẵn.</p>

      <h2>Một lộ trình hai lượt gọn gàng</h2>
      <div class="walkthrough-route"><div><strong>Lượt 1 — cốt truyện</strong><p>Chơi liên tục, chọn tự nhiên và chỉ lưu tại năm điểm kiểm tra nói trên. Tránh xem hướng dẫn trong lúc đang diễn ra các cảnh.</p></div><div><strong>Lượt 2 — độ phủ</strong><p>Quay lại các bản lưu ở lều và cảnh cuối. Mỗi lần đảo ngược một câu trả lời quan trọng và ghi chú điều gì thực sự thay đổi.</p></div></div>
      <p>Phương pháp này kém hoành tráng hơn một biểu đồ "tất cả kết cục" khổng lồ, nhưng nó phù hợp với bản build thực sự tồn tại. Phiên bản 0.2 là một bản nguyên mẫu tập trung vào giới thiệu nhân vật; nó không phải một bộ sưu tập tuyến hoàn chỉnh.</p>

      <h2>Thế nào là hoàn thành Ngày 2?</h2>
      <p>Bạn đã theo kịp khi chạm đến hết phần cốt truyện công khai hiện tại, chứ không phải khi mở khóa một kết cục tình yêu cuối cùng vốn không tồn tại. Một lượt chơi kỹ lưỡng nên để bạn có:</p>
      <ul class="walkthrough-checklist">
        <li>cuộc xung đột trong phòng giam được xem trọn vẹn không bỏ qua;</li>
        <li>bản lưu trước khi quay lại rạp xiếc được giữ nguyên;</li>
        <li>các phần giới thiệu của Ticket Taker, Doctor và Jester đã xem;</li>
        <li>kết cục xấu hoặc được ghi lại hoặc được né an toàn;</li>
        <li>một bản lưu cuối sạch, sẵn sàng cho một bản cập nhật chính thức trong tương lai.</li>
      </ul>
      <p>Ngày 3 vẫn đang được phát triển. Hãy giữ bản lưu cuối này, nhưng kiểm tra ghi chú phát hành tương lai trước khi cho rằng các lựa chọn của phiên bản 0.2 sẽ được áp nguyên vẹn sang bản build công khai tiếp theo.</p>

      <h2>Những khẳng định hướng dẫn này cố ý không đưa ra</h2>
      <p>Một số hướng dẫn mô tả nhiều kết cục hoàn chỉnh, một thư viện cảnh ẩn, những chiếc cài ghim sưu tầm với hiệu ứng cơ chế trong tương lai, hoặc các tuyến chơi trọn vẹn cho mọi nhân vật được giới thiệu. Trang chính thức hiện không xác nhận điều nào trong số đó là tính năng hoàn chỉnh. Để biết trạng thái đã kiểm chứng, hãy dùng <a href="/vi/day-3">trang theo dõi Ngày 3</a> và <a href="/vi/wiki">Wiki Phiên bản 0.2</a> của trang.</p>
    `,
  },
  {
    slug: 'day-1-walkthrough-first-playthrough',
    title: 'Hướng dẫn từng bước Ngày 1 trong The Freak Circus: một lượt chơi đầu tiên thận trọng',
    description: 'Một hướng dẫn thực tế cho phiên bản 0.2 về cách gặp Pierrot, đọc sự đối đầu manh nha, đặt các bản lưu hữu ích và đến được Ngày 2 mà không đuổi theo những tuyến chưa hoàn thành.',
    date: '2026-09-02',
    tags: ['Ngày 1', 'Hướng dẫn từng bước', 'Người chơi mới'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'Một cảnh từ bản nguyên mẫu hiện tại của The Freak Circus',
    readingTime: 'Đọc trong 8 phút',
    content: `
      <p class="article-lede">Ngày 1 phát huy tốt nhất khi bạn để nó gây khó chịu. Ngày này giới thiệu Pierrot trên đoạn đường đi làm bình thường, rồi dần biến một cuộc gặp nhỏ thành khởi đầu của một cuộc đối đầu nguy hiểm. Bạn không cần một bảng đáp án hoàn hảo để đến Ngày 2; bạn cần vài bản lưu đặt hợp lý và một ý niệm rõ ràng về những gì bản nguyên mẫu hiện tại có thể — và không thể — giải quyết.</p>
      <div class="walkthrough-note"><strong>Giới hạn của hướng dẫn</strong><p>Đây là hướng dẫn có đánh dấu tiết lộ nội dung cho phiên bản công khai 0.2. Nó giải thích cách tiến triển và chiến lược chơi lại, mà không giả vờ rằng Pierrot, Harlequin hay các nhân vật rộng hơn đã có kết cục hoàn chỉnh.</p></div>
      <div class="walkthrough-note"><strong>Về việc lưu game</strong><p>Nhà phát triển chưa từng công bố vị trí lưu game, số ô lưu, hành vi tự lưu, hay bất kỳ quy trình chuyển bản lưu nào từ trình duyệt sang máy tính cho game này. Các tên bản lưu dưới đây là nhãn bạn tự đặt cho ô lưu của mình bằng giao diện lưu và đọc tiêu chuẩn của engine, không phải tên tệp chính thức.</p></div>

      <h2>Trước khi bắt đầu: dựng một lượt chơi mà bạn thực sự quay lại được</h2>
      <p>Các cảnh báo nội dung chính thức gồm máu, cái chết, ngược đãi, bắt cóc, sử dụng ma túy không đồng ý, chế ngự thân thể và tiếp xúc cơ thể không mong muốn. Ngày 1 không thể hiện mọi cảnh báo ở cường độ tối đa, nhưng nó xác lập tông nền. Hãy quyết định xem những chủ đề này có phù hợp với bạn trước khi chạy theo việc hoàn thành mọi thứ.</p>
      <p>Dùng ba ô lưu có tên ngay từ đầu:</p>
      <ol class="walkthrough-steps">
        <li><strong>NGÀY 1 — SẠCH:</strong> trước lựa chọn có sức nặng đầu tiên.</li>
        <li><strong>PIERROT — ĐƯỜNG PHỐ:</strong> trước khi chọn cách phản hồi trong cuộc gặp trên đường đi làm.</li>
        <li><strong>NGÀY 1 — CUỐI:</strong> trước cụm cảnh cuối cùng đưa câu chuyện tiến tới Ngày 2.</li>
      </ol>
      <p>Đừng liên tục lưu đè lên ô đầu tiên. Một điểm kiểm tra sạch hữu ích hơn ảnh chụp màn hình lựa chọn của người khác, vì bạn có thể tự thử trên bản build hiện tại.</p>

      <h2>Cuộc gặp trên phố với Pierrot</h2>
      <p>Phần giới thiệu của Pierrot là bản lề cảm xúc của Ngày 1. Cảnh này hỏi nhân vật chính phản ứng thế nào trước một người lạ im lặng đang bị đối xử như kẻ ngoài cuộc. Lời văn phát huy hơn khi bạn chọn một câu trả lời mà bạn đứng vững sau lưng, thay vì cố dịch ngược một "điểm yêu thích" vô hình.</p>
      <p>Ở lượt đầu, giữ nhất quán: nếu bạn đến gần anh ấy bằng sự quan tâm, giữ nguyên tông đó xuyên suốt cảnh; nếu bạn nghi ngờ, để sự khó chịu kéo dài. Ở lượt hai, đọc <strong>PIERROT — ĐƯỜNG PHỐ</strong> và chỉ đổi câu trả lời chính đầu tiên. So sánh lời thoại và ngôn ngữ cơ thể thay vì cho rằng nhánh đã mở khóa một tuyến hoàn chỉnh.</p>
      <div class="walkthrough-tip"><strong>Mẹo hoàn thành</strong><p>Đừng chơi lại chỉ vì một câu trả lời thấy gượng gạo. Ngày 1 được thiết kế để tiếp tục xuyên qua sự khó chịu. Save-scum từng câu làm vỡ nhịp và thường cho bạn ít thông tin hơn một lượt chơi trọn vẹn không gián đoạn.</p></div>

      <h2>Khi cuộc đối đầu bắt đầu mở rộng</h2>
      <p>Harlequin không đơn thuần là một lựa chọn sáng sủa hơn thay cho Pierrot. Sự hiện diện của anh ấy thay đổi ý nghĩa của cuộc gặp đầu tiên bằng cách biến sự chú ý thành cạnh tranh. Hãy xem mỗi nghệ sĩ xử lý khoảng cách, sự đồng thuận và sự do dự của nhân vật chính ra sao. Những tương phản đó quan trọng hơn việc cố tuyên bố người thắng ở Ngày 1.</p>
      <p>Phần còn lại của rạp xiếc thuộc về vòng cung giới thiệu của bản nguyên mẫu. Thấy Jester, Doctor hay Ticket Taker không có nghĩa là bạn đã vào một tuyến tình yêu hoàn chỉnh. Trang chính thức chỉ nói rằng năm phần giới thiệu nhân vật hiện có; các kết cục đã lên kế hoạch vẫn chưa hoàn thành.</p>

      <h2>Cách đến Ngày 2</h2>
      <p>Ngày 2 đã nằm trong phiên bản 0.2. Nó không phải một bản tải riêng và không cần mã tuyến bí mật. Hãy tiếp tục câu chuyện sau các cảnh cuối của Ngày 1 và để đoạn chuyển tiếp chạy. Nếu game bất ngờ quay về một điểm trước đó:</p>
      <ul>
        <li>xác nhận màn hình tiêu đề hiển thị bản build 0.2 hiện tại;</li>
        <li>đọc <strong>NGÀY 1 — CUỐI</strong> thay vì chơi lại từ đầu;</li>
        <li>tránh bấm qua quá nhanh các đoạn chuyển tiếp hoặc cảnh có hoạt ảnh;</li>
        <li>ở bản trình duyệt, giữ nguyên thẻ trang trong khi cảnh tải xong, vì bản lưu trình duyệt nằm trong bộ nhớ của trình duyệt.</li>
      </ul>

      <h2>Chiến lược lượt đầu tốt nhất cố tình rất đơn giản</h2>
      <div class="walkthrough-route"><div><strong>Lượt đầu</strong><p>Chọn tự nhiên, không bỏ qua lời thoại và để độ căng tích tụ. Mục tiêu của bạn là hiểu dàn nhân vật, không phải tối ưu một tuyến.</p></div><div><strong>Lượt hai</strong><p>Quay lại bản lưu trên phố và đổi một câu trả lời. Dùng bản lưu cuối cho mọi biến thể cuối Ngày 1 thay vì chơi lại từ màn hình tiêu đề.</p></div></div>

      <h2>Các sai lầm thường gặp ở Ngày 1</h2>
      <h3>Tìm một "kết cục tốt của Pierrot"</h3>
      <p>Phiên bản 0.2 không chứa kết cục hoàn chỉnh của Pierrot. Một câu trả lời ấm áp có thể thay đổi cảm giác của một cảnh mà không biến bản nguyên mẫu thành một tuyến hoàn chỉnh.</p>
      <h3>Giả sử mỗi câu thoại đều thay đổi Ngày 2</h3>
      <p>Một phần lời thoại chỉ để thiết lập giọng nói và không khí. Trừ khi hai lượt chơi tạo ra một thay đổi tái hiện được, đừng nâng một câu thoại thành khóa tuyến.</p>
      <h3>Chỉ dùng một ô lưu</h3>
      <p>Đây là cách nhanh nhất biến một lần chơi lại ngắn thành khởi động lại toàn bộ. Hãy giữ các điểm kiểm tra trên phố và cuối Ngày 1.</p>
      <h3>Bỏ qua những phần khó chịu</h3>
      <p>Những dấu hiệu cảnh báo của câu chuyện là một phần của việc khắc họa nhân vật. Nếu nội dung đủ gánh được với bạn, đọc kỹ những khoảnh khắc đó sẽ giúp Ngày 2 dễ hiểu hơn nhiều. Nếu không, dừng lại là một lựa chọn hoàn toàn hợp lệ.</p>

      <h2>Danh sách kiểm tra hoàn thành Ngày 1</h2>
      <ul class="walkthrough-checklist">
        <li>bạn đã gặp Pierrot trên đường đi làm;</li>
        <li>bạn đã giữ một bản lưu trước câu trả lời chính đầu tiên;</li>
        <li>bạn đã thấy cuộc đối đầu trung tâm bắt đầu thành hình;</li>
        <li>bạn đã đến đoạn chuyển tiếp sang Ngày 2;</li>
        <li>bạn không nhầm một phần giới thiệu với một kết cục hoàn chỉnh.</li>
      </ul>
      <p>Khi đánh dấu đủ các ô đó, hãy tiếp tục với <a href="/vi/blog/day-2-walkthrough-save-strategy">hướng dẫn Ngày 2</a>. Để có bối cảnh nhân vật mà không kèm suy đoán tuyến, hãy đọc hồ sơ đã kiểm chứng của <a href="/vi/characters/pierrot">Pierrot</a> và <a href="/vi/characters/harlequin">Harlequin</a>.</p>
    `,
  },
  {
    slug: 'current-prototype-guide',
    title: 'Bản nguyên mẫu hiện tại của The Freak Circus thực sự gồm những gì',
    description: 'Một hướng dẫn rõ ràng, ít tiết lộ nội dung về phiên bản 0.2: những gì chơi được ngay, những gì vẫn đang được phát triển, và người chơi mới nên mong đợi điều gì.',
    date: '2026-08-15',
    tags: ['Phiên bản 0.2', 'Người chơi mới', 'Hướng dẫn game'],
    image: '/the-freak-circus-cover.jpg',
    imageAlt: 'Tranh bìa của The Freak Circus',
    readingTime: 'Đọc trong 5 phút',
    content: `
      <p class="article-lede"><em>The Freak Circus</em> tốt nhất nên được tiếp cận như một màn mở đầu được chăm chút, chứ không phải một visual novel hoàn chỉnh với đầy đủ tuyến. Bản build công khai hiện tại là phiên bản 0.2 và vẫn được ghi là bản nguyên mẫu.</p>
      <h2>Câu trả lời ngắn</h2>
      <p>Bản build hiện có giới thiệu xung đột trung tâm và năm thành viên của dàn nhân vật. Nó gồm một kết cục xấu, trong khi phần kịch bản lớn hơn cùng các kết luận đã lên kế hoạch của Pierrot, Harlequin, nhân vật chính và kết cục chung vẫn đang được phát triển.</p>
      <p>Sự phân biệt này quan trọng. Một nhân vật xuất hiện trong bản nguyên mẫu không tự động nghĩa là nhân vật đó đã có một tuyến tình yêu hoàn chỉnh hay một kết cục cuối cùng.</p>
      <h2>Một buổi chơi đầu tiên trông như thế nào</h2>
      <p>Trang chính thức mô tả một buổi chơi trung bình kéo dài khoảng nửa giờ. Điều đó khiến bản nguyên mẫu dễ trải nghiệm, nhưng nó cũng có nghĩa là lượt chơi đầu được thiết kế để xác lập tông, các mối quan hệ và mối nguy — chứ không phải để giải quyết mọi đầu mối.</p>
      <ul><li>Hãy kỳ vọng tranh nhân vật và phông nền nguyên bản.</li><li>Hãy kỳ vọng các biến thể cảnh có ý nghĩa và một kết cục xấu hiện có.</li><li>Đừng kỳ vọng mọi kết cục đã lên kế hoạch đều chơi được ngay.</li></ul>
      <h2>Biết ranh giới nội dung trước khi chơi</h2>
      <p>Đây là một câu chuyện kinh dị tâm lý chỉ dành cho người trưởng thành. Các cảnh báo gồm máu, cái chết, ngược đãi, bắt cóc, tống thuốc, chế ngự thân thể và tiếp xúc không đồng ý. Hãy đọc các cảnh báo đó trước khi quyết định game có phù hợp với bạn hay không.</p>
      <h2>Một cách dùng hướng dẫn của fan tốt hơn</h2>
      <p>Kiểm tra số bản build trước khi theo bất kỳ lời khuyên tuyến nào, giữ một bản lưu sạch trước các lựa chọn lớn, và coi ảnh chụp màn hình hay bảng lựa chọn không kèm phiên bản đã thử nghiệm là diễn giải của cộng đồng. Một hướng dẫn hữu ích nên cho bạn biết đã quan sát được gì, trên bản build nào, và tiết lộ nội dung bắt đầu từ đâu.</p>
    `,
  },
  {
    slug: 'browser-or-download',
    title: 'Trình duyệt hay tải về? Chọn cách chơi phù hợp',
    description: 'So sánh bản trình duyệt với các bản tải Windows, macOS, Linux và Android, rồi chuẩn bị các tệp lưu của bạn trước khi chuyển phiên bản.',
    date: '2026-08-14',
    tags: ['Tải xuống', 'Trình duyệt', 'Cài đặt'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'Một cảnh từ bản trình duyệt của The Freak Circus',
    readingTime: 'Đọc trong 4 phút',
    content: `
      <p class="article-lede">Câu chuyện là như nhau, nhưng cách chơi tốt nhất phụ thuộc vào việc bạn muốn thiết lập bao nhiêu và liệu bạn có cần một bản sao cục bộ mang theo được hay không.</p>
      <h2>Chọn bản trình duyệt để bắt đầu nhanh nhất</h2>
      <p>Phiên bản HTML5 là lựa chọn đơn giản nhất cho một cái nhìn đầu tiên: mở game, chờ trang tải và bắt đầu mà không cần cài đặt một gói nén nào. Nó cũng hữu ích khi bạn chơi trên máy dùng chung và không muốn giữ lại tệp game.</p>
      <p>Bộ nhớ trình duyệt có thể bị các công cụ riêng tư hoặc việc đặt lại trình duyệt xóa sạch, nên đó không phải nơi tốt nhất cho một bản lưu mà bạn không thể chấp nhận mất.</p>
      <h2>Chọn bản tải về để có một bản sao cục bộ lâu dài</h2>
      <p>Các gói Windows, macOS, Linux và Android được liệt kê cho phiên bản 0.2. Bản cục bộ tránh được giới hạn bộ nhớ trình duyệt và thường là lựa chọn thoải mái hơn cho các lượt chơi lại.</p>
      <ul><li>Chọn gói khớp với hệ điều hành của bạn.</li><li>Giải nén trọn gói máy tính trước khi khởi chạy game.</li><li>Sao lưu bản lưu trước khi thay thế một bản build cũ hơn.</li></ul>
      <h2>Vì sao nguồn tải quan trọng</h2>
      <p>Hãy dùng trang itch.io của nhà phát triển thay vì một bản đăng lại hay bộ cài được đóng gói lại. Nhà phát triển xác định trang đó là trang phân phối chính thức và đề nghị người chơi không dùng các bản sao được tải lên lại.</p>
      <h2>Nếu có trục trặc</h2>
      <p>Trước tiên hãy xác nhận số bản build và nền tảng. Với sự cố trình duyệt, thử một trình duyệt hiện đại thuộc dòng Chrome hoặc Edge và tắt tính năng dịch trang hung hãn cho thẻ game. Với gói máy tính, giải nén trọn vẹn và giữ ứng dụng cùng các tệp đi kèm.</p>
    `,
  },
  {
    slug: 'day-3-rumor-checklist',
    title: 'Chờ Ngày 3 mà không sa vào tin đồn ngày phát hành',
    description: 'Một danh sách kiểm tra thực tế để tách tiến độ phát triển thật khỏi các đếm ngược, phỏng đoán và những khẳng định được tái chế về chương tiếp theo.',
    date: '2026-08-13',
    tags: ['Ngày 3', 'Cập nhật', 'Kiểm chứng dữ kiện'],
    image: '/images/home/characters.webp',
    imageAlt: 'Tranh nhân vật của The Freak Circus',
    readingTime: 'Đọc trong 5 phút',
    content: `
      <p class="article-lede">Ngày 3 đang được phát triển, nhưng hoạt động phát triển không đồng nghĩa với một ngày phát hành đã xác nhận. Giữ hai ý niệm này tách riêng là cách dễ nhất để tránh các trang đếm ngược gây hiểu lầm và tin đồn tái chế.</p>
      <h2>Những gì thực sự đã được xác lập</h2>
      <p>Trang game công khai nói rằng câu chuyện còn tiếp thêm một ngày trong game và phần này vẫn đang được phát triển. Trang không công bố ngày phát hành. Cho tới khi một thông báo phát hành có ngày xuất hiện, bất kỳ ngày cụ thể nào cũng nên bị coi là suy đoán.</p>
      <h2>Tín hiệu tiến độ hữu ích — nhưng có giới hạn</h2>
      <p>Lập trình lời thoại, tranh mới, thay đổi phông nền, kiểm thử và xem trước cảnh đều cho thấy công việc đang tiến triển. Không cột mốc nào trong số đó tự thân nói lên một bản build công khai ổn định sẽ sẵn sàng khi nào.</p>
      <h2>Thử một lần kiểm tra tin đồn nhanh</h2>
      <ol><li>Tìm ngày đăng chính xác và tên tác giả rõ ràng.</li><li>Kiểm tra câu chữ nói "đã phát hành" hay chỉ "đang phát triển".</li><li>Tách ảnh chụp công việc đang làm khỏi một bản build tải được.</li><li>Từ chối các trang biến một ước tính của fan thành đồng hồ đếm ngược.</li></ol>
      <h2>Dùng tốt thời gian chờ đợi</h2>
      <p>Giữ các bản lưu hiện có, ghi chú bản build nào đã tạo chúng, và tránh ghi đè ô lưu của lượt chơi đầu. Khi bản build tiếp theo đến, đọc ghi chú thay đổi trước khi cho rằng lời khuyên tuyến cũ vẫn còn đúng.</p>
    `,
  },
  {
    slug: 'pierrot-height-age-order',
    title: 'Chiều cao và thứ tự tuổi của Pierrot trong The Freak Circus',
    description: 'Pierrot cao 198 cm và đứng thứ ba trong số năm người theo thứ tự tuổi chính thức tính từ lớn nhất — những gì nhà phát triển đã công bố, và những gì cộng đồng fan thêm vào trên nền đó.',
    date: '2026-09-20',
    tags: ['Pierrot', 'Chiều cao', 'Dữ kiện nhân vật'],
    image: '/images/characters/pierrot-1.webp',
    imageAlt: 'Pierrot, gã hề im lặng ở trung tâm The Freak Circus',
    readingTime: 'Đọc trong 8 phút',
    content: `
      <p class="article-lede">Pierrot cao 198 cm, và trong thứ tự tuổi do nhà phát triển công bố, anh đứng thứ ba trong năm, tính từ lớn đến nhỏ. Hai con số này đến từ cùng một tư liệu chính thức như phần còn lại của bảng nhân vật, và giữa chúng là đủ để dứt điểm phần lớn tranh luận lưu hành trên mạng về vóc dáng và tuổi của anh — trong khi để lại hai khoảng trống mà cộng đồng fan tự lấp.</p>
      <div class="walkthrough-note"><strong>Bài viết này dựa trên gì</strong><p>Chiều cao, thứ tự tuổi và bảng xếp hạng sức mạnh đến từ bảng biểu và các câu trả lời AMA do nhà phát triển công bố. Không có tuổi do fan gán, ngày sinh hay con số ước lượng nào được coi là dữ kiện ở đây. Tư liệu đến từ wiki của cộng đồng hâm mộ được ghi nhãn là phái sinh từ fan chứ không phải thông tin chính thức.</p></div>

      <h2>Chiều cao: 198 cm</h2>
      <p>Nhà phát triển đã công bố một bảng chiều cao cùng bộ tham chiếu được dùng khi vẽ dàn nhân vật. Mục của Pierrot ghi 198 cm, quy đổi khoảng 6 ft 5.95 in. Điều này đặt anh ở vị trí cao thứ hai trong năm nhân vật đã giới thiệu: thấp hơn Doctor chín centimet ở mức 207 cm, và cao hơn Harlequin mười một centimet ở mức 187 cm.</p>
      <p>Vì bảng này vốn là tài liệu tham chiếu để vẽ, chứ không phải một bộ số liệu viết lại sau đó, nó là loại phép đo giữ được độ ổn định. Hai điều theo sau từ đó. Toàn bộ dàn nhân vật đã giới thiệu chỉ trải 24 cm, từ 207 của Doctor xuống 183 của Ticket Taker — một dải hẹp, và là phép thử hữu ích cho fan art vẽ một nhân vật vượt hẳn lên trên nhân vật khác. Và khoảng cách mười một centimet giữa hai nhân vật chính của tuyến tình yêu là có thật, cũng là lý do wiki của cộng đồng hâm mộ coi nó có ý nghĩa với cách Pierrot và Harlequin được dàn dựng đối chọi nhau.</p>
      <h2>Thứ tự tuổi: thứ ba trong năm, tính từ lớn</h2>
      <p>Một câu trả lời AMA riêng đã nhận yêu cầu xếp dàn nhân vật từ lớn đến nhỏ và đưa ra một trình tự cố định:</p>
      <ol class="walkthrough-steps">
        <li><strong>Ticket Taker</strong> — thứ nhất, lớn tuổi nhất.</li>
        <li><strong>Doctor</strong></li>
        <li><strong>Pierrot</strong> — thứ ba.</li>
        <li><strong>Jester</strong></li>
        <li><strong>Harlequin</strong> — cuối cùng, nhỏ tuổi nhất.</li>
      </ol>
      <p>Pierrot nhờ đó ngồi giữa đoàn gánh: lớn tuổi hơn Jester và Harlequin, nhỏ hơn Ticket Taker và Doctor. Trong một dàn nhân vật dựng quanh cuộc đối đầu giữa hai đầu của danh sách, đứng thứ ba nghĩa là anh lớn tuổi hơn người cạnh tranh với mình và nhỏ tuổi hơn hai nhân vật giữ rạp xiếc đứng vững.</p>
      <h3>"Thứ ba" không nói cho bạn điều gì</h3>
      <p>Nó không đưa ra con số, và không đưa ra khoảng cách. Một thứ tự tương đối chỉ nói nhân vật này lớn hơn nhân vật kia; hai nhân vật liền kề trong danh sách vẫn có thể cách xa nhau nhiều năm. Chưa từng có con số tuổi nào được công bố cho bất kỳ ai trong năm người, khiến thứ tự này là thông tin tuổi tác duy nhất nhà phát triển từng phát hành. Điều đó quan trọng vì một con số cụ thể là thứ các trang fan thêm vào dàn nhân vật này nhiều nhất, và những con số đó gần như không bao giờ có nguồn.</p>
      <div class="walkthrough-tip"><strong>Cách kiểm tra một khẳng định chiều cao hay tuổi tìm thấy ở nơi khác</strong><p>Hỏi ba câu. Nguồn có trỏ về bảng biểu của nhà phát triển, một câu trả lời AMA hay một bài đăng chính thức không? Nó có phân biệt con số đã công bố với ước lượng không? Và nó có cho biết thông tin mô tả bản build nào không? Một hướng dẫn trả lời cả ba câu có thể tin về chi tiết; một hướng dẫn không trả lời câu nào chỉ là trang trí đè lên phỏng đoán của người khác.</p></div>

      <h2>Sức mạnh là một danh sách khác</h2>
      <p>Nhà phát triển cũng công bố một bảng xếp hạng sức mạnh thể chất thuần túy, và nó không đi theo chiều cao. Pierrot đứng đầu — trước Harlequin và Jester đồng hạng nhì, rồi Doctor, và Ticket Taker đứng cuối.</p>
      <p>Pierrot vừa cao thứ hai vừa mạnh nhất là một nét khắc họa nhân vật có chủ đích, không phải trùng hợp của bảng biểu. Tóm tắt chính thức gọi anh là "yandere" thầm lặng ("yandere" là kiểu nhân vật ám ảnh, sở hữu tình cảm đối với người mình yêu), và một nhân vật áp đảo về thể chất mà gần như hoàn toàn im lặng là một loại mối đe dọa riêng: nguy hiểm không nằm ở việc anh sẽ tự xưng danh, mà ở việc anh không cần phải vậy. Mô tả trên wiki của cộng đồng hâm mộ — hiền lành và lễ độ bề ngoài trong khi bám theo nhân vật chính — khớp với hình dạng đó, dù cách khắc họa cụ thể ấy là phái sinh từ fan.</p>

      <h2>Những gì đã xác nhận và những gì được thêm vào</h2>
      <ul>
        <li><strong>Nhà phát triển xác nhận:</strong> chiều cao 198 cm, vị trí thứ ba trong thứ tự tuổi, vị trí đầu bảng xếp hạng sức mạnh, cách gọi "yandere" thầm lặng, và việc một kết cục tình yêu của Pierrot đã được lên kế hoạch.</li>
        <li><strong>Từ bản build hiện tại:</strong> ngoại hình, các cảnh, và cách anh phản ứng với nhân vật chính giữa các nhánh.</li>
        <li><strong>Phái sinh từ fan:</strong> mô tả trang phục chi tiết — mặt nạ trắng khe dọc đen, mắt vàng, mũ hề đỏ-đen, áo motley đỏ — lý do trong truyện cho sự im lặng của anh, và bất kỳ tuổi hay ngày sinh cụ thể nào gán cho anh.</li>
      </ul>
      <p>Một điểm đính chính nhỏ về trang phục và sự im lặng, vì cả hai hay bị tóm tắt sai. Thuyết của wiki cộng đồng hâm mộ là luật không nói ở nơi công cộng do Jester đặt ra, người mà Pierrot kính trọng sâu sắc. Đó là chi tiết thỏa mãn, nhất quán với cách hai nhân vật được viết, nhưng nó đến từ wiki chứ không phải nhà phát triển. Thông tin từ chính nhà phát triển dừng ở cụm "yandere" thầm lặng và coi sự im lặng là khắc họa nhân vật chứ không phải một đoạn lồng tiếng bị thiếu.</p>

      <h2>Vì sao những con số này đáng quan tâm</h2>
      <p>Số đo là phần dễ kiểm tra nhất của một hồ sơ nhân vật và cũng là phần hay bị bịa nhất, và game này từng có cả hai: một bảng biểu công bố có thật, và rất nhiều con số không xuất phát từ nó. Biết Pierrot cao 198 cm và lớn tuổi thứ ba nghĩa là bạn nhận ra ngay khi một wiki lặng lẽ đổi sang con số khác — và hữu ích hơn, bạn đọc các cảnh của anh với một hình dung chính xác. Một nhân vật cao 198 cm đồng thời mạnh nhất trong năm sẽ hành xử trên màn hình khác với một người tầm thước, và cách dàn dựng của game dựa trên điều đó là có thật.</p>
      <p>Để có bức tranh đầy đủ về cả dàn nhân vật, <a href="/vi/characters/heights">hướng dẫn chiều cao và xếp hạng</a> liệt kê cả năm nhân vật, và <a href="/vi/characters/pierrot">hồ sơ Pierrot</a> nói kỹ hơn về trạng thái tuyến cùng tư liệu cộng đồng.</p>
    `,
  },
  {
    slug: 'harlequin-height-age-order',
    title: 'Chiều cao và thứ tự tuổi của Harlequin trong The Freak Circus',
    description: 'Harlequin cao 187 cm và là nhỏ tuổi nhất trong năm nhân vật đã giới thiệu — những con số nhà phát triển công bố, và những khẳng định của fan mà chúng mâu thuẫn.',
    date: '2026-09-24',
    tags: ['Harlequin', 'Chiều cao', 'Dữ kiện nhân vật'],
    image: '/images/characters/harlequin-1.webp',
    imageAlt: 'Harlequin, đối thủ sân khấu của Pierrot trong The Freak Circus',
    readingTime: 'Đọc trong 8 phút',
    content: `
      <p class="article-lede">Harlequin cao 187 cm, thấp nhất trong năm nhân vật đã giới thiệu, và nhỏ tuổi nhất trong năm theo thứ tự tuổi nhà phát triển công bố. Cả hai dữ kiện đều được ghi nhận rõ ràng. Còn cái tuổi cụ thể lưu hành cho anh trên mạng thì thường thì không — và phần đông mâu thuẫn với tuyên bố tuổi duy nhất mà nhà phát triển thực sự đưa ra.</p>
      <div class="walkthrough-note"><strong>Phạm vi và nguồn</strong><p>Chiều cao, thứ tự tuổi và bảng xếp hạng sức mạnh lấy từ bảng biểu và các câu trả lời AMA do nhà phát triển công bố. Mô tả trang phục, tóm tắt tính cách, cùng mọi tuổi hay ngày sinh cụ thể đến từ wiki của cộng đồng hâm mộ và được đánh dấu là phái sinh từ fan. Bài viết này không coi một ước tính trong truyện là phép đo.</p></div>

      <h2>Chiều cao: 187 cm</h2>
      <p>Mục của Harlequin trong bảng chiều cao của nhà phát triển ghi 187 cm, khoảng 6 ft 1.62 in. Điều đó khiến anh thấp nhất trong năm nhân vật đã giới thiệu: thấp hơn Doctor ở 207 cm hai mươi centimet, thấp hơn Pierrot 11 cm, thấp hơn Jester 5 cm, và cao hơn Ticket Taker 4 cm.</p>
      <p>Phần thú vị của con số đó là nó đi kèm với gì. Harlequin đồng giữ hạng nhì trong bảng sức mạnh của nhà phát triển cùng Jester, sau Pierrot và trước Doctor cùng Ticket Taker. Wiki của cộng đồng hâm mộ đọc tổ hợp đó — nhỏ tuổi nhất và thấp nhất, nhưng đồng hạng mạnh nhì — như lý do Harlequin được viết nhanh nhẹn và thiên về thể chất thay vì nặng nề. Cách đọc đó là diễn giải, nhưng là diễn giải dựng trên hai con số đã công bố chứ không dựng trên phỏng đoán.</p>
      <h2>Thứ tự tuổi: cuối cùng trong năm</h2>
      <p>Thứ tự tuổi của nhà phát triển, từ lớn đến nhỏ, là Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Harlequin đứng thứ năm — nhỏ tuổi nhất trong dàn đã giới thiệu, và nhỏ hơn người đồng tuyến tình yêu còn lại hai bậc.</p>
      <p>Đây là một dữ kiện có căn cứ thật sự và cũng là một trong những dữ kiện bị bóp méo nhiều nhất trên mạng. Một lượng lớn tư liệu fan gán cho Harlequin một con số tuổi cụ thể, và vài con số trong đó không thể dung hòa với một thứ tự công bố đặt anh dưới một Ticket Taker và Doctor lớn tuổi hơn nhiều và trên không ai cả. Thứ tự mới là bản đáng tin, và nó cũng là bản duy nhất tồn tại: chưa từng có con số tuổi nào được công bố cho bất kỳ nhân vật nào của game này.</p>
      <div class="walkthrough-tip"><strong>Nếu muốn trích tuổi của anh, hãy trích thứ tự</strong><p>Viết "nhỏ tuổi nhất trong năm nhân vật đã giới thiệu" thay vì một con số. Nó chính xác, có nguồn, và sống sót qua lần cập nhật tới. Những con số các trang fan gán cho dàn nhân vật này có thói quen bị các câu trả lời AMA sau đó bác bỏ — chính vì thế nhà phát triển công bố một thứ tự thay vì một con số.</p></div>

      <h2>Khoảng cách mười một centimet</h2>
      <p>Harlequin thấp hơn Pierrot 11 cm, và khoảng cách đó đủ lớn để đọc được trên màn hình mà không cần phóng đại. Wiki của cộng đồng hâm mộ coi khoảng cách này có ý nghĩa với cách hai nhân vật chính được dàn dựng đối chọi — người im lặng lấp đầy khung hình, người sân khấu di chuyển quanh nó. Đó là chủ ý thiết kế hay hậu quả của bộ tham chiếu hình vẽ thì nhà phát triển chưa từng nói, nên nó nằm ở cột của cộng đồng fan.</p>
      <p>Phần được xác nhận đơn giản hơn: bảng được nhà phát triển công bố như tài liệu tham chiếu dùng khi vẽ hình, đó là lý do các con số được coi là chuẩn thay vì đọc ước lượng từ tranh. Nếu một fan art vẽ Harlequin cao hơn Pierrot, đó là cách vẽ phong cách hóa; các con số chính thức vẫn là 187 và 198.</p>

      <h2>Tư liệu chính thức nói gì về anh</h2>
      <p>Ngoài các bảng biểu, nhà phát triển đã nói trực tiếp nhiều điều về Harlequin. Tóm tắt chính thức gọi anh là "đối thủ quyến rũ" của Pierrot và mô tả game được dẫn dắt bởi người này hay người kia — cách đóng khung rõ ràng nhất có thể cho một câu chuyện có hai tuyến tình yêu và không có tuyến nào khác.</p>
      <p>Một câu trả lời AMA đáng trích dẫn cẩn thận vì rất dễ đọc sai. Khi được hỏi về những vết cắn Harlequin để lại lúc tán tỉnh, câu trả lời là chúng không phải lời cầu hôn, vết dấu không để lại sẹo, và hôn nhân cùng việc ve vãn giữa các quái vật vận hành khác với cách nhân vật chính hiểu. Đoạn trao đổi nhỏ đó làm việc thật: nó xác lập rằng sự tán tỉnh của Harlequin chạy trên chính logic của rạp xiếc, và hệ quy chiếu của nhân vật chính không phải hệ quy chiếu của những người quanh họ.</p>
      <p>Wiki của cộng đồng hâm mộ thêm rằng Harlequin thấy an toàn khi ở cạnh Doctor, Doctor là người anh thích nhất trong rạp xiếc, và anh hòa thuận với Ticket Taker dù khẩu vị bất đồng. Nó cũng ghi một liên kết ngầm với cái chết của Columbina — rằng Harlequin đã giết cô để "cứu" cô — điều mà chính wiki đóng khung như hàm ý chứ không phải tuyên bố. Dáng dấp chung của lịch sử rạp xiếc được xác nhận trong các câu trả lời AMA, nên câu chuyện là thật; cách đọc cụ thể về phần của Harlequin trong đó không được nguồn chính xác nhận.</p>

      <h2>Trạng thái tuyến: đã lên kế hoạch, chưa chơi được</h2>
      <p>Một kết cục tình yêu của Harlequin là một trong bốn kết luận nhà phát triển đã nêu tên, bên cạnh của Pierrot, của nhân vật chính, và kết cục hợp nhất "All together". Cả bốn chưa được triển khai. Bản build hiện tại chứa đúng một kết cục — kết cục xấu «Missing» ở Ngày 1 — nên không có điều kiện kích hoạt nào để công bố và không có hướng dẫn từng bước trung thực nào để viết.</p>
      <ul>
        <li><strong>Đã xác nhận:</strong> chiều cao của anh, vị trí cuối trong thứ tự tuổi, đồng hạng nhì về sức mạnh, cách gọi "đối thủ quyến rũ" của Pierrot, lời đính chính rằng vết cắn tán tỉnh không phải lời cầu hôn, và việc kết cục tình yêu của Harlequin đã được lên kế hoạch.</li>
        <li><strong>Từ bản build hiện tại:</strong> ngoại hình, các cảnh, và việc một số lần xuất hiện của anh thay đổi tùy nhánh cốt truyện, được một ghi chú lỗi chính thức xác nhận.</li>
        <li><strong>Phái sinh từ fan:</strong> mô tả mặt nạ — mặt nạ trắng có hình thoi xanh lục và tam giác xanh lục, mắt xanh màu nọc độc, tóc đen xoăn có lọn khoá hình trái tim — tiểu sử cá nhân, và chi tiết quan hệ của anh với Columbina.</li>
      </ul>

      <h2>Ghép các con số lại</h2>
      <p>Số đo chính thức của Harlequin mô tả một nhân vật rất cụ thể: nhỏ tuổi nhất, thấp nhất, và đồng hạng mạnh nhì trong một gánh năm người, người cạnh tranh sự chú ý với thành viên cao nhì và mạnh nhất của chính gánh đó. Anh không áp đảo về sức mạnh và cũng không thiếu kinh nghiệm — anh nhanh nhẹn, sân khấu, và vận hành từ một vị trí mà cuộc đối đầu thực sự ngang sức. Điều đó hữu dụng hơn hẳn một cái tuổi bịa ra, và nó được ghi nhận đầy đủ.</p>
      <p>Để xem cả dàn nhân vật cùng lúc, xem <a href="/vi/characters/heights">hướng dẫn chiều cao và xếp hạng</a>; để biết trạng thái tuyến và các mối quan hệ của anh, xem <a href="/vi/characters/harlequin">hồ sơ Harlequin</a>.</p>
    `,
  },
  {
    slug: 'the-freak-circus-endings-list',
    title: 'Các kết cục của The Freak Circus: cái nào tồn tại và cái nào không',
    description: 'Một danh sách trạng thái đầy đủ về các kết cục trong The Freak Circus — một kết cục xấu đã triển khai, bốn kết luận đã lên kế hoạch, và những tuyến không tồn tại.',
    date: '2026-09-28',
    tags: ['Kết cục', 'Tuyến', 'Phiên bản 0.2'],
    image: '/images/home/characters.webp',
    imageAlt: 'Dàn nhân vật The Freak Circus tụ họp quanh nhân vật chính',
    readingTime: 'Đọc trong 9 phút',
    content: `
      <p class="article-lede">The Freak Circus hiện có một kết cục chơi được, và bốn kết cục nữa mà nhà phát triển đã nêu tên nhưng chưa viết vào bất kỳ bản build nào. Gần như mọi biểu đồ "tất cả kết cục" trên mạng gộp hai loại đó vào nhau, và đó là lý do cùng một câu hỏi nhận được bốn câu trả lời khác nhau. Dưới đây là danh sách kèm trạng thái của từng mục được nêu rõ ràng.</p>
      <div class="walkthrough-note"><strong>Phạm vi của danh sách</strong><p>Danh sách này áp dụng cho bản nguyên mẫu 0.2 công khai và những tuyên bố do chính nhà phát triển công bố về công việc đã lên kế hoạch. Nó chứa tiết lộ cốt truyện cho kết cục duy nhất hiện có. Không kết luận nào do fan đặt ra hay fan đặt tên được liệt thành kết cục, vì chưa có thứ gì trong số đó tồn tại như một kết cục cho tới khi nhà phát triển phát hành nó.</p></div>

      <h2>Bản tóm tắt ngắn</h2>
      <ul>
        <li><strong>Chơi được ngay: 1.</strong> Kết cục «Missing» — một kết cục xấu ở Ngày 1.</li>
        <li><strong>Đã công bố là lên kế hoạch: 4.</strong> Pierrot (tình yêu), Harlequin (tình yêu), nhân vật chính (không tình yêu), và "All together" (đa tình cảm).</li>
        <li><strong>Lựa chọn tuyến đã xác nhận: 4.</strong> Pierrot, Harlequin, cả hai, hoặc không chọn ai.</li>
        <li><strong>Tuyến không tồn tại: Jester, Ticket Taker, Doctor.</strong></li>
        <li><strong>Tổng số kết cục chính thức: chưa công bố.</strong> Nhà phát triển nói nhiều kết cục đã được lên kế hoạch nhưng không thể đưa ra con số.</li>
      </ul>

      <h2>Kết cục duy nhất tồn tại</h2>
      <p>Phiên bản 0.2 chứa đúng một kết cục, và đó là một kết cục xấu. Nó xảy ra ở Ngày 1 với điều kiện cố ý đơn giản: nếu nhân vật chính không làm gì khi Pierrot bị một người đàn ông chế nhạo trước đám đông, nhân vật chính sẽ được một nhân vật không rõ lai lịch trao một tấm vé hồng, bị đưa tới lều hồng, và bị mọi thành viên rạp xiếc từ chối. Trò chơi nói thẳng rằng nhân vật chính đã không thu hút được sự chú ý của Pierrot và gặp kết cục bi kịch.</p>
      <p>Đó là một kết cục thật với hậu quả thật, không phải chỗ giữ chỗ — và nó là toàn bộ nội dung của mục kết cục trong bản build hiện tại. Xét về cấu trúc, nó cũng là lập luận của trò chơi thu nhỏ lại: một nhân vật chính không tham gia vào xung đột trung tâm sẽ bị lặng lẽ rời khỏi nó.</p>
      <div class="walkthrough-tip"><strong>Hãy ghi lại nó thay vì né nó</strong><p>Kết cục «Missing» là kết quả duy nhất bản build chính thức cung cấp, nên chạm tới nó nghĩa là hoàn tất bản nguyên mẫu hiện tại chứ không phải phá hỏng nó. Nếu một hướng dẫn bảo bạn đọc lại bản lưu và đừng bao giờ thấy nó, hướng dẫn đó đang coi kết cục như thứ cần bảo vệ chứ không phải thứ đang tồn tại.</p></div>

      <h2>Bốn kết cục đã lên kế hoạch</h2>
      <p>Nhà phát triển liệt kê bốn kết luận trên trang chính thức và trong FAQ chính thức. Hai là kết cục tình yêu, một cố ý không có tình yêu, và một là kết cục đa tình cảm.</p>
      <ul>
        <li><strong>Kết cục của Pierrot (tình yêu)</strong> — nhân vật chính kết thúc cùng Pierrot. Liệt kê là công việc đã lên kế hoạch và nhiều lần được mô tả là vẫn đang phát triển.</li>
        <li><strong>Kết cục của Harlequin (tình yêu)</strong> — nhân vật chính kết thúc cùng Harlequin. Kịch bản cho nó chưa hoàn thành.</li>
        <li><strong>Kết cục của nhân vật chính (không tình yêu)</strong> — nhân vật chính khép lại câu chuyện không có tình yêu. Nhà phát triển xác nhận tuyến này tồn tại trên mặt ý tưởng và rằng vẫn có thể chọn tình bạn bên cạnh nó.</li>
        <li><strong>"All together" (đa tình cảm)</strong> — nhân vật chính yêu Pierrot và Harlequin cùng lúc. Một kết luận được liệt kê riêng, không phải biến thể của tuyến tình yêu nào.</li>
      </ul>
      <p>Quan trọng là đừng biến danh sách này thành một con số. Nhà phát triển từng được hỏi thẳng game hoàn chỉnh sẽ có bao nhiêu kết cục và trả lời rằng nhiều kết cục đã lên kế hoạch nhưng không thể đưa ra con số, vì kịch bản vẫn đang viết dở. Một trang viết "The Freak Circus có năm kết cục" đã lấy bốn kết luận đã nêu tên cộng một kết cục đã triển khai và tạo ra một tổng số nhà phát triển chưa từng nói.</p>

      <h2>Nhân vật nào có thể đi tuyến</h2>
      <p>Câu trả lời chính thức rất hẹp: Pierrot, Harlequin, cả hai, hoặc không chọn ai. Tuyến nhân vật chính chính là lựa chọn "không chọn ai" — được xác nhận không có tình yêu, nhưng vẫn cho phép bạn chọn kết bạn với dàn nhân vật.</p>
      <p>Không có tuyến cho Jester, Ticket Taker hay Doctor. Nhà phát triển nói rằng nếu thêm tuyến mới sau này, nhiều khả năng chúng đến dưới dạng bản mở rộng hoặc DLC, và điều đó chưa được quyết định. Việc biến các nhân vật còn lại thành lựa chọn tình yêu được mô tả như một khả năng chứ không phải một cam kết — một sự phân biệt quan trọng, vì các hướng dẫn fan hay mô tả những tuyến đó ở thời hiện tại như thể chúng chỉ đang bị ẩn đi.</p>
      <p>Hai khẳng định lưu hành rộng rãi không tương ứng với bất cứ điều gì nhà phát triển từng mô tả: rằng tuyến Jester "mở khóa ở Ngày 2", và rằng Doctor có kết cục "Clean Hands". Bản cập nhật Ngày 2 thêm nhân vật, hình vẽ động, menu thiết kế lại, và một bản Android — không thêm tuyến mới.</p>

      <h2>Vì sao các hướng dẫn bất đồng về con số</h2>
      <p>Các trang khác nhau trả lời những câu hỏi khác nhau. Có trang chỉ đếm phần chơi được, có trang chỉ đếm phần nhà phát triển nêu tên, có trang đếm hỗn hợp kết luận đã kế hoạch và suy đoán fan. Xếp bất kỳ khẳng định nào vào ba nhóm — đã triển khai, đã lên kế hoạch, hoặc chưa được xác minh — giải quyết bất đồng nhanh hơn là tranh luận về con số.</p>
      <p>Hai lưu ý áp dụng cho danh sách đã lên kế hoạch. Kịch bản vẫn đang được viết, nên tập hợp kết luận có thể thay đổi trước khi bất kỳ cái nào phát hành. Và Ngày 3 là nơi các kết luận mới đang được viết ngay bây giờ, khiến danh sách hiện tại là một ảnh chụp của một kế hoạch đang tiến hành chứ không phải một danh mục hoàn chỉnh.</p>

      <h2>Điều này nghĩa là gì khi chơi</h2>
      <p>Hãy coi bản nguyên mẫu là hai ngày đầu của một câu chuyện ba ngày. Phần có sẵn là một vòng cung mở đầu xác lập dàn nhân vật, cuộc đối đầu, và một kết cục thất bại. Cấu trúc tuyến tồn tại trong phần phân nhánh; các kết luận chưa tồn tại trong bản build. Chơi phiên bản hiện tại là cách xem cơ chế phân nhánh vận hành, không phải cách hoàn thành trò chơi.</p>
      <p>Để có bản phân tích đầy đủ kèm nguồn, xem <a href="/vi/endings">hướng dẫn kết cục và tuyến</a>; để biết gì đang được viết, xem <a href="/vi/day-3">trang theo dõi Ngày 3</a>.</p>
    `,
  },
  {
    slug: 'five-characters-overview',
    title: 'Năm nhân vật của The Freak Circus',
    description: 'Một trang tổng quan về năm nhân vật đã giới thiệu — Pierrot, Harlequin, Jester, Doctor và Ticket Taker — kèm chiều cao, xếp hạng và trạng thái tuyến.',
    date: '2026-10-01',
    tags: ['Nhân vật', 'Tổng quan', 'Phiên bản 0.2'],
    image: '/images/characters/jester-1.webp',
    imageAlt: 'Jester, nhân vật quyền lực của The Freak Circus',
    readingTime: 'Đọc trong 10 phút',
    content: `
      <p class="article-lede">Phiên bản 0.2 giới thiệu năm nhân vật, và cả năm đều có cảnh giới thiệu riêng trong bản build công khai. Con số đó thường là nguồn gốc của một giả định sai lầm thứ hai — rằng năm nhân vật được giới thiệu nghĩa là năm tuyến có sẵn. Không phải vậy. Hai người trong số họ có tuyến tình yêu đã lên kế hoạch, ba người không có tuyến nào, và chưa kết cục đã kế hoạch nào chơi được hiện nay.</p>
      <div class="walkthrough-note"><strong>Cách đọc bài tổng quan này</strong><p>Chiều cao, vị trí thứ tự tuổi và hạng sức mạnh đến từ bảng nhà phát triển công bố. Trạng thái tuyến và kết cục theo đúng tuyên bố của nhà phát triển. Chi tiết tính cách và quan hệ được quy cho wiki của cộng đồng hâm mộ sẽ được ghi nhãn như vậy, vì phần lớn chi tiết thú vị về dàn nhân vật này đến từ tư liệu cốt truyện chứ không phải bài đăng của nhà phát triển.</p></div>

      <h2>Dàn nhân vật nhìn nhanh</h2>
      <ul>
        <li><strong>Pierrot</strong> — 198 cm, lớn tuổi thứ ba, mạnh nhất. Sự ám ảnh im lặng ở trung tâm câu chuyện và người cao hơn trong hai nhân vật chính của tuyến tình yêu.</li>
        <li><strong>Harlequin</strong> — 187 cm, nhỏ tuổi nhất, đồng hạng nhì về sức mạnh. "Đối thủ quyến rũ" của Pierrot và người thấp hơn trong hai nhân vật chính của tuyến tình yêu.</li>
        <li><strong>Jester</strong> — 192 cm, lớn tuổi thứ tư, đồng hạng nhì về sức mạnh. Nhân vật quyền lực khiến rạp xiếc có cảm giác như một định chế. Không có tuyến.</li>
        <li><strong>Doctor</strong> — 207 cm, lớn tuổi thứ hai, mạnh hạng ba. Cao nhất trong năm người và một trong những hiện diện lâm sàng nhất của dàn nhân vật. Không có tuyến.</li>
        <li><strong>Ticket Taker</strong> — 183 cm, lớn tuổi nhất, yếu nhất. Người giữ ngưỡng cửa và nhân vật gắn chặt nhất với phần phân nhánh. Không có tuyến.</li>
      </ul>
      <p>Ba dữ kiện áp dụng cho cả năm người cùng lúc. Bảng chiều cao do nhà phát triển công bố như tài liệu tham chiếu khi vẽ hình, đó là lý do các con số là chuẩn. Thứ tự tuổi chỉ mang tính tương đối — không có con số tuổi cho bất kỳ ai. Và bảng xếp hạng sức mạnh được công bố như một lời phụ chú bên một câu hỏi của fan, nên nó đọc lên như khắc họa nhân vật chứ không phải một màn chỉ số.</p>

      <h2>Pierrot</h2>
      <p>Nhân vật mà trò chơi xây quanh đó. Tóm tắt chính thức gọi anh là "yandere" thầm lặng ("yandere" là kiểu nhân vật ám ảnh, sở hữu tình cảm đối với người mình yêu) — cách mô tả của chính nhà phát triển, và là lý do mỗi cử chỉ của anh đều nặng ký trong một thể loại vận hành bằng lời thoại. Wiki của cộng đồng hâm mộ khắc họa anh hiền lành và lễ độ bề ngoài trong khi bám theo nhân vật chính, và bảo vệ cả nhân vật chính lẫn Columbina; nó cũng ghi một câu trả lời của nhà phát triển rằng Pierrot sẽ không bao giờ bỏ rơi nhân vật chính, một cách dứt khoát. Một kết cục tình yêu của Pierrot đã được lên kế hoạch và đang phát triển.</p>
      <h2>Harlequin</h2>
      <p>Nếu Pierrot vận hành bằng sự bền bỉ, Harlequin vận hành bằng màn trình diễn. Tóm tắt chính thức gọi anh là "đối thủ quyến rũ" của Pierrot và đóng khung trò chơi được dẫn dắt bởi người này hay người kia. Wiki của cộng đồng hâm mộ mô tả anh vô tư, tàn nhẫn, hay trêu chọc và thầm ghen tị — và ghi chú rằng anh không thoải mái với sự yêu thương, điều đổi khung cuộc đối đầu thành thứ mà anh khao khát không kém gì Pierrot. Kết cục tình yêu của anh đã được lên kế hoạch và chưa triển khai.</p>
      <h2>Jester</h2>
      <p>Nhân vật hay bị mô tả sai nhất trên mạng, thường bằng cách gán cho anh một tuyến tình yêu mà anh không có. Anh giữ vai trò nhân vật quyền lực của rạp xiếc: wiki của cộng đồng hâm mộ gọi anh là thủ lĩnh và phản diện chính, điềm tĩnh thay vì dễ bùng nổ, và cộng đồng fan cũng mô tả anh kiểm soát lũ "Fools" và gọi con người là đám mèo hoang. Những chi tiết đó là diễn giải các cảnh của anh chứ không phải tuyên bố của nhà phát triển, nhưng quyền lực của anh trên các nhân vật khác là nhất quán xuyên suốt bản build. Không có tuyến Jester và không có kết cục Jester.</p>
      <h2>Doctor</h2>
      <p>Cao nhất trong năm người ở 207 cm nhưng chỉ mạnh hạng ba, điều wiki của cộng đồng hâm mộ lý giải bằng sự ưu ái mưu trí hơn sức mạnh thô. Phần giới thiệu của anh dựa nhiều nhất vào chế ngự, soi xét và hình ảnh kinh dị y khoa, và sự điềm tĩnh của anh được mô tả là vỡ ra rõ rệt ở một quãng cảm xúc cụ thể. Anh không có tuyến và không có kết cục, và kết cục "Clean Hands" một số trang fan cũ gán cho anh không được bất kỳ nguồn chính nào hỗ trợ.</p>
      <h2>Ticket Taker</h2>
      <p>Lớn tuổi nhất, thấp nhất, và đứng cuối bảng xếp hạng sức mạnh — vậy mà là một trong những nhân vật được ghi nhận kỹ nhất trong tư liệu chính thức, vì hệ thống vé là một trong số ít cơ chế đã xác nhận của trò chơi. Nhà phát triển xác nhận tám loại vé, với hồng nằm dưới dàn nhân vật chính và đỏ cùng xanh lá báo hiệu một lựa chọn của nhân vật chính. Anh không có tuyến, và một số hướng dẫn fan lâu đời mô tả một tuyến tình yêu Ticket Taker mở khóa bằng sự bền bỉ và đối thoại khéo léo; không có tuyến như vậy trong bản build công khai.</p>

      <h2>Thực sự có thể đi tuyến với ai</h2>
      <p>Các lựa chọn tuyến đã xác nhận là Pierrot, Harlequin, cả hai, hoặc không chọn ai. Lựa chọn "không chọn ai" tương ứng với kết cục của nhân vật chính, không liên quan tình yêu nhưng vẫn cho phép tình bạn với dàn nhân vật. Jester, Ticket Taker và Doctor không có tuyến; nhà phát triển mô tả việc biến họ thành lựa chọn tình yêu là một khả năng chứ không phải cam kết, và gợi ý bất kỳ bổ sung nào như vậy nhiều khả năng đến dưới dạng bản mở rộng hoặc DLC.</p>
      <div class="walkthrough-tip"><strong>Cách dùng một hồ sơ nhân vật</strong><p>Đọc phần xác nhận trước và phần cộng đồng sau. Các mục xác nhận vẫn đúng sau lần cập nhật tới; tư liệu cộng đồng là diễn giải của bản build hiện tại và có thể được hiệu chỉnh khi thêm cảnh mới. Những hồ sơ trộn hai loại mà không ghi nhãn mới là những hồ sơ cần thận trọng.</p></div>

      <h2>Điều còn thiếu trong dàn nhân vật</h2>
      <p>Columbina là cựu thành viên của rạp xiếc, cái chết của cô định hình tiểu sử của cả hai nhân vật chính, nhưng cô không thuộc năm nhân vật đã giới thiệu và không xuất hiện trong bảng chiều cao công bố. Thiết kế của cô vẫn đang trong quá trình sản xuất và nhà phát triển cố tình giữ lại chi tiết. Ai viết về dàn nhân vật này nên vừa coi cô là một phần có thật trong lịch sử câu chuyện, vừa là một nhân vật chưa hoàn thành.</p>
      <p>Để có hồ sơ đầy đủ, xem các trang <a href="/vi/characters/pierrot">Pierrot</a>, <a href="/vi/characters/harlequin">Harlequin</a>, <a href="/vi/characters/jester">Jester</a>, <a href="/vi/characters/the-doctor">Doctor</a> và <a href="/vi/characters/ticket-taker">Ticket Taker</a>, cùng <a href="/vi/characters/heights">hướng dẫn chiều cao và xếp hạng</a>.</p>
    `,
  },
  {
    slug: 'ticket-types-explained',
    title: 'Hệ thống vé trong The Freak Circus được giải thích',
    description: 'Nhà phát triển đã xác nhận tám loại vé trong The Freak Circus, trong đó hồng, đỏ và xanh lá mang những ý nghĩa cụ thể cho cách câu chuyện phân nhánh.',
    date: '2026-10-05',
    tags: ['Vé', 'Cơ chế', 'Nhánh rẽ'],
    image: '/images/characters/ticket-taker-1.webp',
    imageAlt: 'Ticket Taker, nhân vật kiểm soát hệ thống vé của trò chơi',
    readingTime: 'Đọc trong 8 phút',
    content: `
      <p class="article-lede">Vé là một trong số ít hệ thống của The Freak Circus mà nhà phát triển giải thích trực tiếp, và phần giải thích đó bao quát rộng hơn phần lớn hướng dẫn fan thừa nhận. Số lượng đã xác nhận là tám loại vé. Hồng nằm dưới dàn nhân vật chính, đỏ và xanh lá đánh dấu một lựa chọn của nhân vật chính, và tổ hợp hồng-đỏ nghĩa là Ticket Taker tự động lấy phương án đỏ.</p>
      <div class="walkthrough-note"><strong>Điều gì được ghi nhận và điều gì không</strong><p>Số loại vé và ý nghĩa của hồng, đỏ, xanh lá đến từ nhà phát triển. Danh sách đầy đủ cả tám — tên gọi và màu sắc của các loại còn lại — chưa được công bố, nên bài viết này không đoán về chúng. Việc nhận dạng nhân vật trong quán cà phê trao tấm vé hồng là Ticket Taker cải trang là phái sinh từ fan và được đánh dấu như vậy.</p></div>

      <h2>Những gì nhà phát triển đã xác nhận</h2>
      <ul>
        <li><strong>Tồn tại tám loại vé.</strong> Đây là một phép đếm, xác nhận trực tiếp.</li>
        <li><strong>Hồng nằm dưới dàn nhân vật chính.</strong> Đó là cấp bậc bạn nhận khi không được các nghệ sĩ săn đuổi.</li>
        <li><strong>Đỏ và xanh lá chỉ một lựa chọn của nhân vật chính.</strong> Hai màu này đánh dấu một quyết định thuộc về người chơi.</li>
        <li><strong>Hồng kết hợp đỏ nghĩa là Ticket Taker tự động lấy phương án đỏ.</strong> Trong trường hợp đó, lựa chọn được quyết định thay cho bạn, bởi nhân vật quản lý toàn bộ hệ thống.</li>
      </ul>
      <p>Quy tắc cuối là quy tắc hữu ích nhất để đọc các cảnh, vì nó cho bạn biết trò chơi không đơn thuần trao lựa chọn và để bạn chọn tự do. Một số quyết định do rạp xiếc quyết định. Một nhân vật chính không hành động không nhận kết quả trung lập; họ nhận kết quả của rạp xiếc.</p>

      <h2>Tấm vé hồng và kết cục duy nhất tồn tại</h2>
      <p>Tấm vé hồng xuất hiện trong bản build hiện tại, và là vật khởi đầu kết cục duy nhất được triển khai của trò chơi. Ở Ngày 1, nếu nhân vật chính không làm gì khi Pierrot bị một người đàn ông chế nhạo trước đám đông, một nhân vật không rõ lai lịch trao nhân vật chính tấm vé hồng. Nhân vật chính bị đưa đến lều hồng và bị mọi thành viên rạp xiếc từ chối, và trò chơi nói rằng họ đã không thu hút được sự chú ý của Pierrot và gặp kết cục bi kịch.</p>
      <p>Wiki của cộng đồng hâm mộ nhận dạng nhân vật quán cà phê đó — người đàn ông "Không rõ" — là Ticket Taker cải trang. Cách nhận dạng đó phái sinh từ fan, nhưng nó kết nối trực tiếp với kết cục duy nhất mà bản build chứa, và giải thích vì sao nhân vật không có tuyến riêng lại hóa ra quan trọng về mặt cơ chế.</p>
      <div class="walkthrough-tip"><strong>Đừng coi vé là vật sưu tầm</strong><p>Phiên bản 0.2 không thiết lập một hệ thống đồ vật thông thường mà vé được thu thập để mở khóa kết cục tương lai. Vé ở đây đánh dấu vị thế và lựa chọn, không phải một danh sách kiểm tra. Nếu một hướng dẫn mô tả kệ trưng vé, bộ đếm vé, hay một tấm vé ẩn cho mỗi kết cục, nó đang mô tả một hệ thống mà bản build không có.</p></div>

      <h2>Vì sao một nhân vật phụ giữ chặt phần phân nhánh</h2>
      <p>Ticket Taker không có tuyến và không có kết cục, đứng cuối trong năm người về sức mạnh và thấp nhất dàn nhân vật. Trong một trò chơi mà lựa chọn tuyến là Pierrot, Harlequin, cả hai hoặc không chọn ai, điều đó lẽ ra khiến anh thành nhân vật nền. Hệ thống vé là lý do anh không phải vậy.</p>
      <p>Hãy nghĩ xem tấm vé làm gì trong thế giới truyện: nó quyết định bạn được phép trở thành ai. Một tấm vé hồng đặt bạn dưới các nghệ sĩ, chính xác vị trí mà kết cục «Missing» đặt nhân vật chính — bên ngoài, bị quan sát, bị chặn ở cửa lều. Đỏ và xanh lá đánh dấu lựa chọn thuộc về người chơi. Và khi hồng và đỏ kết hợp, nhân vật quyền lực lấy đi lựa chọn của người chơi. Một nhân vật quản lý quy tắc đó không phải người gác cửa; anh là cơ chế rạp xiếc dùng để quản lý nhân vật chính.</p>
      <p>Nó cũng khớp với cách khắc họa của anh. Wiki của cộng đồng hâm mộ mô tả anh phục tùng và cống hiến cho chương trình của rạp xiếc, trưởng thành và chuyên nghiệp, ám ảnh về sự sạch sẽ và ngăn nắp, và phát biểu nguyên tắc của anh thẳng thắn: ở nơi này, không ai thoát vai. Hệ thống chính là nhân vật. Một màn trình diễn vận hành bằng vé cần người phát chúng.</p>

      <h2>Các màu đọc lên như thế nào trong thực tế</h2>
      <ul>
        <li><strong>Hồng</strong> — bạn trong tòa nhà nhưng không trong màn diễn. Đây là cấp bậc kết thúc kết cục duy nhất hiện có trong bản build.</li>
        <li><strong>Đỏ</strong> — một quyết định được quy cho bạn, và rạp xiếc có thể ghi đè khi nó đi kèm hồng.</li>
        <li><strong>Xanh lá</strong> — một quyết định được quy cho bạn, không bị ghi đè.</li>
        <li><strong>Năm loại còn lại</strong> — chưa được ghi nhận riêng. Số lượng được xác nhận; danh tính không công khai.</li>
      </ul>
      <p>Đáng nói thật lòng là có bao nhiêu trong số này hiển thị được. Phiên bản 0.2 là một bản nguyên mẫu tập trung giới thiệu với một kết cục, và hệ thống vé được mô tả như một bộ quy tắc chứ không được trình diễn sâu. Người chơi ở bản build hiện tại phần lớn sẽ thấy hồng trong thực tế, cộng thêm đỏ và xanh lá ở nơi lựa chọn được đưa ra. Đọc hệ thống như một bản đồ phân nhánh đầy đủ là vượt quá những gì bản build hiện đang thể hiện.</p>

      <h2>Điều gì xác nhận và điều gì cộng đồng thêm vào</h2>
      <ul>
        <li><strong>Nhà phát triển xác nhận:</strong> có tám loại vé; hồng nằm dưới dàn nhân vật chính; đỏ và xanh lá chỉ lựa chọn của nhân vật chính; hồng cộng đỏ nghĩa là Ticket Taker tự động lấy phương án đỏ; và Ticket Taker không có tuyến.</li>
        <li><strong>Từ bản build hiện tại:</strong> nhân vật chính được trao tấm vé hồng trong Ngày 1, và tấm vé dẫn thẳng vào kết cục «Missing».</li>
        <li><strong>Phái sinh từ fan:</strong> người đàn ông "Không rõ" ở quán cà phê là Ticket Taker cải trang, biệt danh "kẻ thao túng hiện thực", và chi tiết lịch sử của anh với Columbina.</li>
      </ul>
      <p>Để xem điều này kết nối với các kết cục ra sao, xem <a href="/vi/endings">hướng dẫn kết cục</a>; để có hồ sơ riêng của nhân vật, xem <a href="/vi/characters/ticket-taker">trang Ticket Taker</a>.</p>
    `,
  },
  {
    slug: 'columbina-what-is-known',
    title: 'Những điều đã biết về Columbina trong The Freak Circus',
    description: 'Columbina định hình tiểu sử của cả hai nhân vật chính, nhưng thiết kế của cô vẫn đang trong quá trình sản xuất — những gì nhà phát triển xác nhận về cô và những gì cộng đồng fan thêm vào.',
    date: '2026-10-07',
    tags: ['Columbina', 'Cốt truyện', 'Dữ kiện nhân vật'],
    image: '/images/characters/columbina-1.webp',
    imageAlt: 'Columbina, cựu thành viên rạp xiếc nằm ở trung tâm tiểu sử của cả hai nhân vật chính',
    readingTime: 'Đọc trong 8 phút',
    content: `
      <p class="article-lede">Columbina là nhân vật ai cũng nhận ra mà chẳng ai mô tả được một cách chắc chắn. Cái chết của cô định hình tiểu sử của cả hai nhân vật chính tuyến tình yêu, và cộng đồng fan đã dựng một cách đọc đáng kể về cô quanh điều đó. Đồng thời, nhà phát triển nói thiết kế của cô vẫn đang trong quá trình sản xuất và các chi tiết đang bị cố tình giữ lại. Cả hai điều đó cùng đúng một lúc, và bài viết này là về giữ chúng tách riêng.</p>
      <div class="walkthrough-note"><strong>Phạm vi bài viết</strong><p>Bài này bao gồm những gì nhà phát triển xác nhận, những gì wiki của cộng đồng hâm mộ ghi lại, và nơi hai bên xung đột. Nó chứa tiết lộ cốt truyện về tiểu sử chung của hai nhân vật chính. Không khẳng định nào về Columbina được trình bày như đã chốt trừ khi nhà phát triển nói ra.</p></div>

      <h2>Những gì nhà phát triển đã xác nhận</h2>
      <ul>
        <li><strong>Cô là cựu thành viên của rạp xiếc.</strong> Lịch sử của cô với gánh diễn đã nằm phía sau, không còn bên trong nó.</li>
        <li><strong>Cái chết của cô định hình tiểu sử cả hai nhân vật chính.</strong> Pierrot và Harlequin đều đang chạy trốn một thứ gì đó liên quan đến cô.</li>
        <li><strong>Nhân vật chính không có liên hệ với Columbina.</strong> Nhà phát triển xác nhận trực tiếp điều này, đáng nói rõ ràng vì các thuyết fan thường đặt nhân vật chính vào câu chuyện của cô.</li>
        <li><strong>"Columbina" nghĩa là "chim bồ câu nhỏ".</strong> Nhà phát triển xác nhận ý nghĩa của cái tên.</li>
        <li><strong>Thiết kế của cô vẫn đang trong quá trình sản xuất, và chi tiết đang bị cố tình giữ lại.</strong> Hình dáng nhân vật chưa hoàn thành và nhà phát triển đã nói vậy.</li>
        <li><strong>Không có chiều cao chính thức cho cô.</strong> Bảng chiều cao công bố bao phủ năm nhân vật đã giới thiệu, và cô không nằm trong số đó.</li>
      </ul>
      <p>Điểm cuối ấy kết nối với một chi tiết trong các bản cập nhật phát triển. Một bản cập nhật chính thức gần đây nhắc một cảnh mới rất ngắn đề cập đến cô, và ghi chú rằng thiết kế của cô được lên kế hoạch để giữ các bóng hình hồi tưởng nhất quán. Nói cách khác, câu chuyện đang xác nhận sự hiện diện của cô trong khi nhân vật vẫn đang được vẽ — một vị trí bất thường để một hướng dẫn fan viết về, và là lý do bài này cố tình ngắn gọn về phần khắc họa.</p>

      <h2>Những gì wiki của cộng đồng hâm mộ ghi lại</h2>
      <p>Wiki của cộng đồng hâm mộ là nguồn của phần lớn điều người ta nói về Columbina, và hai khẳng định của nó đủ quan trọng để nêu tên.</p>
      <p>Thứ nhất là cô và Pierrot chưa từng có quan hệ tình cảm. Điều này mâu thuẫn với một cách đọc phần tường thuật chuyện tình của chính rạp xiếc và ngược với giả định rằng bi kịch ở trung tâm quá khứ Pierrot là một mối tình. Nhà phát triển riêng biệt nói Pierrot đã bước qua đoạn lịch sử ấy và trưởng thành từ đó — gợi ý rằng quá khứ là nguồn của tính cách chứ không phải một vết thương cố định.</p>
      <p>Thứ hai là một liên kết ngầm với vai trò của Harlequin trong cái chết của cô: wiki ghi rằng Harlequin giết cô để "cứu" cô, và Pierrot từ chối tham gia. Wiki đóng khung đây là hàm ý chứ không phải tuyên bố, và nó nên được đọc đúng như vậy. Nhà phát triển xác nhận dáng dấp chung của lịch sử rạp xiếc trong các câu trả lời AMA, nên câu chuyện là thật; cách đọc cụ thể về phần của Harlequin trong đó không được nguồn chính xác nhận.</p>
      <div class="walkthrough-note"><strong>Ghi nhãn tư liệu cộng đồng là tư liệu cộng đồng</strong><p>"Wiki của cộng đồng hâm mộ ghi rằng Harlequin giết cô để cứu cô" là một khẳng định khác với "Harlequin giết cô để cứu cô". Cái đầu có thể đối chiếu với nguồn. Cái sau không, vì không nguồn nào phát biểu vậy. Những hướng dẫn bỏ phần quy nguồn đang đưa ra một quyết định biên tập mà bằng chứng không ủng hộ.</p></div>

      <h2>Vì sao các chi tiết bị giữ lại là có chủ đích</h2>
      <p>Có lý do nhà phát triển giữ lại cụ thể của cô, và đó không phải một vụ việc lịch trình. Một nhân vật có thiết kế chưa xong không thể được mô tả bằng lời cuối cùng — chiều cao, trang phục và bóng hình đều đang được quyết định, và bất kỳ hướng dẫn nào nói ra chúng sẽ đang mô tả một ý định chứ không phải dữ kiện. Đó cũng là vì sao không có ngày sinh chính thức hay con số tuổi chính thức nào cho cô, và vì sao "ngày sinh duy nhất được xác nhận" trong dàn nhân vật này thuộc về một người khác hẳn.</p>
      <p>Hệ quả thực tế cho người đọc là bất kỳ trang nào mô tả Columbina chi tiết — ngoại hình, chiều cao, vai trò chính xác của cô trong đêm cô chết — đều đang mô tả thứ chưa được quyết định, bất kể mức tự tin mà trang đó tạo ra.</p>

      <h2>Cô xuất hiện ở đâu trong bản build hiện tại</h2>
      <ul>
        <li><strong>Như tiểu sử.</strong> Lịch sử của cả hai nhân vật chính xoay quanh cô, và bản build hiện tại tiết lộ lịch sử đó theo từng mảnh chứ không trong một cảnh.</li>
        <li><strong>Như một cái tên.</strong> Ghi chú bảo trì chính thức ghi lại một dòng thoại trước đó chưa hoàn chỉnh xuất hiện khi tên cô được nhập, và một bản cập nhật phát triển gần hơn mô tả một cảnh ngắn mới nhắc đến cô.</li>
        <li><strong>Như một bóng hình.</strong> Ghi chú phát triển nhắc đến các bóng hình hồi tưởng, ngụ ý rằng cô nhìn thấy được trong quá khứ ngay cả khi thiết kế chưa xong.</li>
      </ul>
      <p>Việc cô được nhắc trong bản build trong khi vẫn đang được sản xuất không phải mâu thuẫn mà nhà phát triển cần giải thích. Đó là cách công việc đang được thực hiện, và là lý do một hướng dẫn cẩn trọng có thể nói về cô mà không cần mô tả cô.</p>

      <div class="walkthrough-tip"><strong>Một cách thực tế để theo dõi cô</strong><p>Đừng chờ một trang wiki tóm tắt hộ bạn. Hãy xem những cảnh ngắn nhắc đến cô, ghi chú cách trò chơi tự dùng từ ngữ cho cô, và coi mọi chi tiết mô tả tìm thấy ở nơi khác là một đề xuất cho tới khi nhà phát triển cho thấy thiết kế hoàn chỉnh. Như vậy câu chuyện đi trước suy đoán — cách duy nhất để quá trình phát triển nhân vật này thực sự làm bạn ngạc nhiên.</p></div>

      <h2>Cách nói về Columbina một cách có trách nhiệm</h2>
      <ul>
        <li>Quy khẳng định của fan về cộng đồng fan, một cách rõ ràng và mỗi lần.</li>
        <li>Đừng công bố chiều cao, tuổi, ngày sinh hay trang phục như dữ kiện cho cô.</li>
        <li>Đừng đặt nhân vật chính vào câu chuyện của cô; nhà phát triển đã loại trừ điều đó.</li>
        <li>Hãy đọc mục ghi "chưa từng yêu đương với Pierrot" như sự sửa một cách hiểu sai phổ biến, không phải thêm một mối tình mới.</li>
        <li>Hãy coi mối "giết cô để cứu cô" là một hàm ý mà cộng đồng fan rút ra, không phải một sự kiện đã xác nhận.</li>
      </ul>
      <p>Cô là trung tâm cảm xúc của một câu chuyện về hai người không ngừng cạnh tranh, và là lý do cả hai đều tổn thương. Bao nhiêu đó là nói được một cách an toàn. Phần còn lại của bức tranh sẽ đáng đọc khi nhà phát triển vẽ xong cô và công bố chi tiết — và trang này sẽ được cập nhật lúc đó thay vì lấp đầy bây giờ.</p>
    `,
  },
  {
    slug: 'day-3-release-status',
    title: 'The Freak Circus Ngày 3: trạng thái phát hành và tiến độ đã xác minh',
    description: 'Một báo cáo trạng thái đã xác minh về Ngày 3 trong The Freak Circus — những gì các bản cập nhật phát triển chính thức xác nhận, phạm vi beta nghĩa là gì, và vì sao chưa có ngày nào.',
    date: '2026-10-10',
    tags: ['Ngày 3', 'Cập nhật', 'Kiểm chứng dữ kiện'],
    image: '/images/community/weekly-update-day3-20261009.jpg',
    imageAlt: 'Một hình ảnh cập nhật phát triển chính thức từ bản build Ngày 3',
    readingTime: 'Đọc trong 9 phút',
    content: `
      <p class="article-lede">Ngày 3 đang được thực hiện, chưa hoàn thành, và chưa có ngày phát hành nào được công bố. Tổ hợp đó là toàn bộ bản tóm tắt trung thực. Mọi thứ khác lưu hành về Ngày 3 — tháng, cuối tuần, đếm ngược — là suy diễn dựng trên hoạt động phát triển, và nhà phát triển đã đề nghị rõ ràng không lặp lại các khẳng định ngày từ bên ngoài.</p>
      <div class="walkthrough-note"><strong>Trạng thái nhìn nhanh</strong><p>Bản build công khai hôm nay: phiên bản 0.2. Ngày 3 đang trong phát triển tích cực. Chưa có ngày, tháng hay cuối tuần phát hành nào được công bố. Các con số trích dẫn dưới đây là con số theo phạm vi beta, không phải phần trăm của toàn bộ tính năng, và khác biệt đó quan trọng.</p></div>

      <h2>Những gì các bản cập nhật chính thức xác nhận</h2>
      <p>Nhà phát triển đăng các bản cập nhật phát triển hàng tuần và loạt câu trả lời AMA trên Tumblr chính thức, và các bài về Ngày 3 ở đó tạo thành một bản ghi đáng tin về công việc đang diễn ra. Các mục gần đây mô tả:</p>
      <ul>
        <li><strong>Tiếp tục lập trình với tài nguyên tạm.</strong> Các cảnh mới được mã hóa vẫn dùng tài nguyên tạm và chỉ hoạt động một phần, với chuyển tiếp, lựa chọn và hình ảnh sẽ được tinh chỉnh khi các quyết định cảnh ấy được chốt.</li>
        <li><strong>Một cảnh mới rất ngắn đề cập đến Columbina.</strong> Thiết kế nhân vật của cô được lên kế hoạch sớm để các bóng hình hồi tưởng giữ được tính nhất quán.</li>
        <li><strong>Tiến độ beta.</strong> Một bản cập nhật trước đó mô tả một phần của bản beta Ngày 3 là hoàn tất và đặt beta ở khoảng 30–40% của toàn bộ bản cập nhật. Một bản cập nhật sau đó mô tả đã gần xong nửa phần nội dung dự kiến cho đợt thử beta.</li>
        <li><strong>Kịch bản lớn hơn Ngày 2</strong>, kèm nội dung kết cục xấu bổ sung và các cảnh ẩn được mô tả.</li>
        <li><strong>Cảnh quán cà phê đang trong quá trình thực hiện</strong>, với một số lựa chọn và tình huống cần chỉnh sửa thêm, cùng nhiều phác thảo và có thể thêm phông nền mới vẫn còn cần.</li>
        <li><strong>Chọn hình vẽ mới</strong> cho Harlequin, Pierrot và Jester, với chỉnh sửa và hình mới cho Doctor dự kiến khi phát triển đến cảnh của anh.</li>
      </ul>
      <p>Không điều nào trong đó là lịch phát hành. Các bản cập nhật về kịch bản, tranh, hình vẽ và lập trình xác nhận phát triển đang tích cực; chúng không có nghĩa là Ngày 3 đã xong. Ngày 3 chỉ nên được coi là đã phát hành khi một bản build công khai mới thực sự xuất hiện.</p>
      <div class="walkthrough-tip"><strong>Đọc phần trăm cẩn thận</strong><p>"30–40% của toàn bộ bản cập nhật" và "gần nửa phần nội dung dự kiến cho beta" mô tả hai phạm vi khác nhau. Cái đầu đo toàn bộ bản cập nhật; cái sau đo phần nội dung nhỏ hơn dành cho beta. Không cái nào là phần trăm của trò chơi hoàn chỉnh, và bản beta tự nó là một cột mốc chứ không phải một bản phát hành.</p></div>

      <h2>Vì sao chưa đưa ra ngày nào</h2>
      <p>Lập trường của nhà phát triển nhất quán trong FAQ chính thức và các câu trả lời Askbox: chưa có ngày phát hành nào được công bố, và các khẳng định ngày từ ngoài các bài đăng chính thức không nên được lặp lại. Đó là một chỉ dẫn có chủ đích tới cộng đồng fan, không phải một sơ suất.</p>
      <p>Có bối cảnh thực tế cho điều đó. Cùng giai đoạn phát triển còn bao gồm việc xử lý các bản tải lên trái phép trên Google Play, và nhà phát triển ghi nhận rằng một bản phát hành trên cửa hàng chính thức sẽ có thông báo riêng. Một ngày công bố trước khi bản build hoàn tất, và trước khi vấn đề phân phối được giải quyết, sẽ là một lời hứa không thể giữ.</p>

      <h2>Ngày 3 dự kiến sẽ thay đổi điều gì</h2>
      <p>Hình dung kế hoạch của Ngày 3 lớn hơn những gì đến trước nó, và điều đó kéo theo hệ quả trực tiếp cho những gì bản build hiện tại thể hiện và không thể hiện.</p>
      <ul>
        <li><strong>Nội dung kết cục xấu mới</strong> được mô tả trong các bài phát triển, nghĩa là mục kết cục trong bản build sẽ lớn lên vượt kết cục «Missing» duy nhất hiện có.</li>
        <li><strong>Các cảnh ẩn</strong> cũng được mô tả, một thứ khác hẳn tuyến — cảnh ẩn là nội dung, không phải kết luận.</li>
        <li><strong>Nhánh nhiều hơn.</strong> Kịch bản lớn hơn của Ngày 2, và công việc phân nhánh được mô tả gồm những đoạn nhiều lựa chọn cần thử nghiệm thêm.</li>
        <li><strong>Câu chuyện của Columbina.</strong> Cảnh ngắn mới và công việc bóng hình hồi tưởng cùng chỉ về việc nhiều hơn của tiểu sử chung sẽ lộ ra.</li>
      </ul>
      <p>Điều chưa được công bố là bất kỳ trong bốn kết cục đã kế hoạch nào phát hành trong Ngày 3. Các kết cục đã lên kế hoạch vẫn là đã lên kế hoạch.</p>

      <h2>Điều gì đã được xác nhận về bản phát hành</h2>
      <p>Vài điều về cách Ngày 3 sẽ được phân phối đã chốt, dù ngày thì chưa.</p>
      <ul>
        <li><strong>Nó sẽ là một bản build công khai trên trang chính thức.</strong> Nhà phát triển xác nhận trang itch.io là trang chính thức duy nhất, nên Ngày 3 sẽ xuất hiện ở đó thay vì qua một trình khởi chạy bên thứ ba hay một cửa hàng riêng.</li>
        <li><strong>Nền tảng đã được thiết lập.</strong> Phiên bản 0.2 có cho trình duyệt, Windows, macOS, Linux và Android, nên cùng bộ nền tảng là kỳ vọng hợp lý cho Ngày 3 — dù chưa có thứ tự phát hành theo từng nền tảng nào được công bố.</li>
        <li><strong>Bất kỳ bản phát hành cửa hàng chính thức nào sẽ được thông báo riêng.</strong> Nhà phát triển ghi nhận một phiên bản cửa hàng sẽ có thông báo riêng thay vì đến lặng lẽ cùng bản cập nhật itch.io.</li>
        <li><strong>Các bản tải lên trái phép đang được xử lý.</strong> Thời gian đã dành để xử lý các bản tải lên trái phép trên Google Play, một vấn đề phân phối chứ không phải phát triển — nhưng nó nghĩa là con đường người chơi đến một bản phát hành chính thức vẫn chưa hoàn toàn đơn giản.</li>
      </ul>

      <h2>Cách tự kiểm tra trạng thái hiện tại</h2>
      <ol class="walkthrough-steps">
        <li><strong>Mở trang itch.io chính thức</strong> và xác nhận bản build được liệt kê vẫn là phiên bản 0.2.</li>
        <li><strong>Đọc các mục devlog theo thứ tự.</strong> Chúng có ghi ngày và là từ nguồn chính.</li>
        <li><strong>Kiểm tra Tumblr chính thức</strong> cho bản cập nhật hàng tuần mới nhất và loạt câu trả lời AMA.</li>
        <li><strong>Coi bất kỳ ngày nào tìm thấy ở nơi khác là chưa xác minh</strong>, trừ khi nó xuất hiện trong một trong các nơi trên.</li>
        <li><strong>Bỏ qua các trang đếm ngược.</strong> Một đếm ngược là một ước tính của fan có gắn đồng hồ.</li>
      </ol>
      <p>Nhà phát triển đã xác nhận không có máy chủ Discord chính thức, nên bất kỳ máy chủ nào không được liên kết từ các trang itch.io, Tumblr, Patreon hay Bluesky chính thức đều nên bị coi là do fan vận hành hoặc không được phép. Quy tắc đó áp dụng cho cả thông báo ngày: một ngày được trích trong Discord fan là ngày của fan.</p>

      <h2>Nên làm gì với bản build hiện tại trong lúc chờ</h2>
      <p>Giữ bản lưu, ghi chú bản build nào đã tạo chúng, và tránh ghi đè ô của lượt chơi đầu. Khi bản build tiếp theo đến, đọc ghi chú thay đổi trước khi cho rằng lời khuyên tuyến của phiên bản 0.2 còn đúng. Phân nhánh của một bản nguyên mẫu có thể được tổ chức lại giữa các bản build, và danh sách kết cục sẽ thay đổi khi kịch bản hoàn tất.</p>
      <p>Để có bản ghi từng ngày, xem <a href="/vi/day-3">trang theo dõi Ngày 3</a> của trang, và để biết bản build hiện tại đã chứa gì, xem <a href="/vi/blog/current-prototype-guide">hướng dẫn bản nguyên mẫu</a>.</p>
    `,
  },
  {
    slug: 'browser-vs-download',
    title: 'Bản trình duyệt hay bản tải về? Nên chơi The Freak Circus theo cách nào',
    description: 'Một so sánh thực tế giữa bản trình duyệt và các bản tải máy tính, Android của The Freak Circus, kèm việc lưu game hoạt động khác nhau ra sao.',
    date: '2026-10-13',
    tags: ['Trình duyệt', 'Tải xuống', 'Cài đặt'],
    image: '/images/home/about-game.webp',
    imageAlt: 'The Freak Circus, trang itch.io chính thức duy nhất của trò chơi',
    readingTime: 'Đọc trong 8 phút',
    content: `
      <p class="article-lede">Cả hai phiên bản chạy cùng một bản build 0.2 của cùng một câu chuyện, nên lựa chọn không phải về nội dung. Nó là về độ tin cậy, việc thiết lập, và bạn sẵn tin giao trình duyệt giữ bao nhiêu tiến trình. Với phần lớn người chơi, câu trả lời là: trình duyệt trước, tải về khi bạn bắt đầu quan tâm tới bản lưu.</p>
      <div class="walkthrough-note"><strong>Mọi thứ đến từ một nơi</strong><p>Nhà phát triển đã nói trang itch.io là trang chính thức duy nhất của trò chơi, và đề nghị đừng tải lên lại hay đăng lại trò chơi. Không có máy chủ Discord chính thức. Nếu một trang đề nghị "tải xuống đầy đủ" ở nơi khác, nó nhiều nhất là không có giấy phép — và trang này sẽ không liên kết tới nó.</p></div>

      <h2>Những gì hiện có</h2>
      <ul>
        <li><strong>Trình duyệt web (HTML5)</strong> — chạy trong trình duyệt qua trang itch.io chính thức. Không cần cài đặt.</li>
        <li><strong>Windows</strong> — bản dựng cho PC, phiên bản 0.2.</li>
        <li><strong>macOS</strong> — bản dựng cho Mac, phiên bản 0.2.</li>
        <li><strong>Linux</strong> — bản dựng cho Linux, phiên bản 0.2.</li>
        <li><strong>Android</strong> — bản dựng APK, phiên bản 0.2.</li>
      </ul>
      <p>Tất cả đều theo giá tự chọn, nên bản build đầy đủ có thể được tải miễn phí và trả tiền là ủng hộ tự nguyện cho một nhà phát triển từng mô tả dự án phần lớn là công việc một mình.</p>

      <h2>Chọn bản trình duyệt khi</h2>
      <p>Bản trình duyệt là cách bắt đầu nhanh nhất và dễ nhất để vừa chơi vừa đọc hướng dẫn. Không cần giải nén gói nào, không cần khớp nền tảng, và không có gì cần gỡ cài đặt sau này. Nó cũng là lựa chọn hợp lý trên máy dùng chung hoặc tạm thời mà bạn không muốn để lại tệp trò chơi.</p>
      <p>Chơi trên trình duyệt là một lối được duy trì chứ không phải tình cờ: nhà phát triển đã ghi lại các lần treo riêng của trình duyệt — gồm một lần trong lều Ticket Taker và một số đoạn có hoạt ảnh — và phát hành bản sửa cho chúng. Lưu ý còn lại đã biết là bấm qua một số cảnh quá nhanh có thể làm hiệu ứng hình ảnh lệch nhịp, nên hãy nhẫn nại một chút với bản trình duyệt khi bấm nhanh.</p>

      <h2>Chọn bản tải về khi</h2>
      <p>Các bản máy tính là lựa chọn tốt hơn cho chơi lại nhiều lần, và cho ai định giữ nguyên vẹn một bản lưu của lượt đầu. Bản cài cục bộ không chịu giới hạn bộ nhớ trình duyệt, tự giữ một bản sao tệp trò chơi, và cho bạn giao diện Ren'Py đầy đủ với chức năng quay lui trong lịch sử — tính năng khiến việc so sánh nhánh trở nên khả thi thay vì nhàm chán.</p>
      <div class="walkthrough-tip"><strong>Giải nén trọn các gói máy tính trước khi khởi chạy</strong><p>Gói máy tính đến dạng nén. Hãy giải nén toàn bộ gói và giữ ứng dụng cùng các tệp đi kèm, rồi khởi chạy. Chạy tệp thực thi ngay bên trong gói nén là nguyên nhân phổ biến nhất của một bản build có vẻ khởi động xong rồi hành xử sai.</p></div>

      <h2>Việc lưu khác nhau thế nào, và điều gì chưa được ghi nhận</h2>
      <p>Đây là nơi hai phiên bản thực sự khác nhau, và nơi các lời khuyên đã công bố ít đáng tin nhất.</p>
      <ul>
        <li><strong>Cả hai dùng giao diện tiêu chuẩn của engine.</strong> The Freak Circus là một bản phát hành Ren'Py, nên việc lưu dùng các nút lưu và đọc thông thường, một danh sách ô lưu, lưu nhanh và đọc nhanh, cùng quay lui trong lịch sử.</li>
        <li><strong>Cả hai có điểm vào Ngày 2.</strong> Menu gồm một nút Ngày 2 kèm phần giới thiệu ngắn, nên bạn có thể tiếp tục vào Ngày 2 mà không phải chơi lại Ngày 1.</li>
        <li><strong>Bản lưu trình duyệt nằm trong bộ nhớ trình duyệt.</strong> Xóa dữ liệu trang, mở cửa sổ riêng tư, hoặc chạy cấu hình riêng tư khắt khe có thể xóa chúng mà không báo trước, và chúng gắn với hồ sơ trình duyệt đã tạo ra chúng. Đây là lý do đơn lẻ phổ biến nhất khiến người chơi báo mất tiến trình.</li>
        <li><strong>Tài liệu lưu chính thức không tồn tại.</strong> Nhà phát triển chưa công bố vị trí lưu, số ô lưu, hành vi tự lưu, hay việc bản lưu trình duyệt có thể chuyển vào bản máy tính hay không. Bất kỳ hướng dẫn nào đưa một đường dẫn cụ thể, số ô lưu, hay quy trình chuyển đảm bảo đều đang mô tả hành vi engine chứ không phải câu trả lời chính thức cho trò chơi này.</li>
      </ul>
      <p>Ren'Py có các thao tác xuất và nhập bản lưu trong lớp phủ engine, và việc chúng hoạt động ổn định để chuyển bản lưu trình duyệt sang bản máy tính của trò chơi này chưa được xác nhận. Hãy coi là đáng thử chứ không phải quy trình chắc chắn, và sao lưu mọi thứ bạn quan tâm trước khi thử nghiệm.</p>

      <h2>Một quy tắc đơn giản</h2>
      <ul>
        <li><strong>Đọc một lần, trên máy dùng chung, hoặc không muốn cài đặt gì:</strong> dùng bản trình duyệt.</li>
        <li><strong>Dự định chơi lại, so sánh nhánh, hay giữ một bản lưu dài hạn:</strong> tải bản cho nền tảng của bạn.</li>
        <li><strong>Trên điện thoại:</strong> APK Android là lựa chọn được hỗ trợ.</li>
        <li><strong>Bất kể nền tảng:</strong> lấy bản tải từ trang itch.io chính thức, và tự giữ bản sao lưu của bất kỳ bản lưu nào bạn sẽ tiếc nếu mất.</li>
      </ul>
      <p>Không phiên bản nào cho bạn nhiều câu chuyện hơn phiên bản kia. Phiên bản 0.2 chứa cùng hai ngày và cùng một kết cục duy nhất theo cả hai cách, nên khác biệt thực tế hoàn toàn nằm ở tiến trình của bạn được giữ an toàn ra sao.</p>

      <h2>Những khác biệt khác đáng biết</h2>
      <p>Ba điều nhỏ hơn tách hai phiên bản, và không điều nào liên quan chất lượng.</p>
      <ul>
        <li><strong>Ngôn ngữ và lồng tiếng.</strong> Trò chơi phát hành với tiếng Anh, tiếng Bồ Đào Nha Brazil và tiếng Trung giản thể, bản tiếng Trung được rà soát lại cho phiên bản 0.2. Lồng tiếng chỉ có tiếng Anh, do Darthsuki thực hiện, nên cài đặt ngôn ngữ đổi văn bản chứ không đổi âm thanh trong mọi phiên bản.</li>
        <li><strong>Dữ liệu nhập và xử lý văn bản.</strong> Các bản máy tính hỗ trợ các tiện ích bàn phím, chuột và cửa sổ thông thường, gồm việc cuộn lại một cảnh. Chơi trình duyệt phụ thuộc trang, ổn cho một lượt đọc thẳng nhưng vụng về hơn khi so hai nhánh cạnh nhau.</li>
        <li><strong>Menu và giao diện.</strong> Menu có điểm vào Ngày 2 ở cả hai phiên bản, tính năng đơn lẻ hữu ích nhất cho ai muốn quay lại nội dung hiện tại mà không chơi lại Ngày 1.</li>
      </ul>
      <p>Còn một cảnh báo không phân biệt phiên bản áp dụng cho cả hai: trò chơi xếp hạng 18+, và các cảnh báo nội dung đã công bố gồm máu, cái chết, giết người và hình ảnh ghê tởm, ám chỉ ăn thịt người, ngược đãi, bắt cóc, sử dụng ma túy không đồng ý, chế ngự thân thể, và tiếp xúc cơ thể không đồng ý. Hãy đọc danh sách đó trước khi quyết định bạn muốn đọc trước bao nhiêu phần câu chuyện.</p>
      <p>Để có danh sách nền tảng và ghi chú an toàn, xem <a href="/vi/download">hướng dẫn tải xuống</a>; để biết việc lưu hoạt động ra sao, xem <a href="/vi/save">hướng dẫn lưu game</a>.</p>
    `,
  },
  {
    slug: 'why-only-one-ending',
    title: 'Vì sao The Freak Circus hiện chỉ có một kết cục',
    description: 'The Freak Circus phát hành với một kết cục chơi được vì nó là một bản nguyên mẫu — cách kết cục xấu đã triển khai, bốn kết cục đã lên kế hoạch và Ngày 3 khớp nhau.',
    date: '2026-10-16',
    tags: ['Kết cục', 'Phiên bản 0.2', 'Phát triển'],
    image: '/images/home/faq.webp',
    imageAlt: 'Bản nguyên mẫu hiện tại của The Freak Circus, phiên bản 0.2',
    readingTime: 'Đọc trong 8 phút',
    content: `
      <p class="article-lede">Lý do chỉ có một kết cục không phải vì các kết cục khác bị ẩn, hay vì chúng mở khóa trong một lượt chơi sau của phiên bản 0.2, hay vì bạn bỏ lỡ một điều kiện. Lý do là trò chơi đang là một bản nguyên mẫu, và kết cục là phần của kịch bản được viết cuối cùng.</p>
      <div class="walkthrough-note"><strong>Bài viết này giải thích gì</strong><p>Quan hệ giữa kết cục duy nhất đã triển khai, bốn kết cục nhà phát triển đã nêu tên, và trạng thái kịch bản. Nó chứa tiết lộ cho kết cục duy nhất tồn tại trong bản build công khai.</p></div>

      <h2>Một kết cục, và đó là kết cục xấu</h2>
      <p>Phiên bản 0.2 chứa đúng một kết cục: «Missing». Nó đạt được ở Ngày 1 khi nhân vật chính không làm gì trong lúc Pierrot bị một người đàn ông chế nhạo trước đám đông. Một nhân vật không rõ lai lịch trao nhân vật chính tấm vé hồng, đưa họ tới lều hồng, và mọi thành viên rạp xiếc từ chối họ. Trò chơi nói rằng nhân vật chính đã không thu hút được sự chú ý của Pierrot và gặp kết cục bi kịch.</p>
      <p>Kết cục đó không phải chỗ giữ chỗ cho một kết cục tốt. Nó là một đoạn văn hoàn chỉnh với một chủ đề gắn kèm — một nhân vật chính khước từ tham gia xung đột trung tâm sẽ bị rời khỏi nó — và là kết luận duy nhất bản build hiện tại chính thức cung cấp.</p>

      <h2>Bốn kết luận đã lên kế hoạch, và chưa cái nào nằm trong bản build</h2>
      <ul>
        <li><strong>Kết cục của Pierrot</strong> — một kết luận tình yêu cùng Pierrot.</li>
        <li><strong>Kết cục của Harlequin</strong> — một kết luận tình yêu cùng Harlequin.</li>
        <li><strong>Kết cục của nhân vật chính</strong> — một kết luận không có tình yêu, dù vẫn có thể chọn tình bạn bên cạnh.</li>
        <li><strong>"All together"</strong> — nhân vật chính yêu Pierrot và Harlequin cùng lúc.</li>
      </ul>
      <p>Chúng được nhà phát triển nêu tên trên trang chính thức và trong FAQ chính thức, và nhiều lần được mô tả là vẫn đang phát triển. Không có danh sách kích hoạt nào được công bố cho bất kỳ cái nào, vì chẳng có gì để kích hoạt. Một hướng dẫn từng bước để mở khóa kết cục Harlequin sẽ đang mô tả một bản build không tồn tại công khai.</p>
      <h3>Và không có tổng số chính thức</h3>
      <p>Cộng các con số ra năm rất dễ. Tổng đó chưa từng được nói ra. Nhà phát triển nói nhiều kết cục đã lên kế hoạch nhưng không đưa được con số, vì kịch bản vẫn đang viết dở — và một kết luận đã kế hoạch có thể được gộp, làm lại, hay bổ sung trước khi phát hành.</p>

      <h2>Kết cục là thứ cuối cùng một kịch bản tạo ra</h2>
      <p>Đây là lý do thực tế khiến bản build hiện tại có hình dáng như vậy. Một câu chuyện phân nhánh phải được xây từ trong ra: một ngày cần các cảnh, các cảnh cần lựa chọn, lựa chọn cần hậu quả nuôi các cảnh sau, và chỉ khi đó hình dáng một kết luận mới tồn tại. Bản build hiện tại có Ngày 1 và 2 với phần giới thiệu, nhánh và biến thể cảnh, cộng một kết cục đặt ở nơi nó minh họa một hậu quả.</p>
      <p>Danh sách tính năng chính thức một cách bất thường là trung thực về điều này. Nó ghi năm nhân vật giới thiệu, một kết cục xấu đã triển khai, phần giới thiệu nhân vật hoàn tất, với phần còn lại của câu chuyện vẫn đang phát triển. Đó là bốn khẳng định riêng, và nhất quán với một dự án đã xong phần mở đầu và vẫn đang xây phần giữa lẫn phần kết.</p>
      <div class="walkthrough-tip"><strong>Cách thử một nhánh có thực sự khác không</strong><p>Vì không có kết cục để so sánh, phép thử có ý nghĩa là xem một cảnh có thay đổi không. Đọc một bản lưu, đổi một câu trả lời có ý nghĩa, và so phần tiếp theo. Nếu hai lượt cho khác biệt tái hiện được trong lời thoại, dàn cảnh hay người xuất hiện, nhánh là thật. Nếu chúng chỉ ra một câu thoại khác, đó là biến thể, không phải tuyến.</p></div>

      <h2>Ngày 3 là nơi các kết luận đang được viết</h2>
      <p>Ngày tiếp theo trong trò chơi đang trong phát triển tích cực, và các bản cập nhật chính thức mô tả một kịch bản lớn hơn Ngày 2, kèm nội dung kết cục xấu bổ sung và các cảnh ẩn. Mục kết cục đúng nghĩa là loại thứ lớn lên: bản build hiện tại liệt kê một kết cục xấu, và ghi chú cập nhật nhắc thêm nội dung kết cục đang được viết.</p>
      <p>Đó cũng là vì sao chưa có ngày phát hành. Nhà phát triển đề nghị không lặp lại các khẳng định ngày từ bên ngoài, điều đọc lên như một cố gắng ngăn một lịch trình hình thành quanh công việc chưa xong. Các bản cập nhật phát triển mô tả tiến độ beta — một phần beta hoàn tất, beta ở khoảng 30–40% bản cập nhật, sau đó gần nửa nội dung beta dự kiến — nhưng beta là một cột mốc, không phải một bản phát hành.</p>

      <h2>Điều này nghĩa là gì với người chơi hôm nay</h2>
      <ul>
        <li><strong>Không có gì để mở khóa.</strong> Chơi phiên bản 0.2 đến cùng sẽ chạm kết cục «Missing», và đó là toàn bộ nội dung kết cục của bản build.</li>
        <li><strong>Chơi lại vẫn đáng làm.</strong> Phân nhánh là thật, và biến thể cảnh, lần xuất hiện nhân vật, cùng các cách đọc khác đều là thứ bản build hiện tại chứa.</li>
        <li><strong>Đừng mua hay săn một gói "tất cả kết cục"</strong> cho một trò chơi hiện có một kết cục. Mọi thứ ngoài trang itch.io chính thức đều không được phép.</li>
        <li><strong>Giữ bản lưu của bạn.</strong> Các lựa chọn của phiên bản 0.2 chưa chắc ánh xạ sang bản build công khai tiếp theo, và danh sách kết cục sẽ thay đổi.</li>
      </ul>
      <p>Bản tóm tắt trung thực là The Freak Circus hiện là hai ngày và một chút của một câu chuyện ba ngày, với ngày cuối đang được sản xuất. Phần bạn chơi được là một màn mở đầu xây tốt với các nhánh thật. Phần bạn không chơi được là kết cục — và lúc này, điều đó gồm cả các kết cục tốt.</p>
      <p>Để có danh sách kết cục và tuyến kèm nguồn, xem <a href="/vi/endings">hướng dẫn kết cục</a>; để biết trạng thái phát triển, xem <a href="/vi/day-3">trang theo dõi Ngày 3</a>.</p>
    `,
  },
  {
    slug: 'reading-fan-guides-safely',
    title: 'Cách đọc hướng dẫn fan mà không nhận thông tin sai',
    description: 'Một phương pháp đánh giá bất kỳ hướng dẫn fan nào về The Freak Circus — xếp khẳng định vào đã triển khai, đã lên kế hoạch và chưa xác minh, và nhận diện những lỗi phổ biến nhất.',
    date: '2026-10-19',
    tags: ['Kiểm chứng dữ kiện', 'Hướng dẫn', 'Cộng đồng'],
    image: '/images/community/fanart-1.webp',
    imageAlt: 'Tranh cộng đồng về các nhân vật The Freak Circus',
    readingTime: 'Đọc trong 9 phút',
    content: `
      <p class="article-lede">Mọi visual novel có cộng đồng fan nhỏ và nhiệt tình rốt cuộc đều tích tụ những hướng dẫn bất đồng nhau, và một số trong đó sai một cách đầy tự tin. Đọc chúng không khó nếu bạn có phương pháp. Phương pháp đơn giản: xếp mọi khẳng định vào ba nhóm — đã triển khai, đã lên kế hoạch, hoặc chưa được xác minh — và từ chối cho một khẳng định đổi nhóm chỉ vì nó xuất hiện đủ nhiều lần.</p>
      <div class="walkthrough-note"><strong>Vì sao điều này quan trọng ở đây</strong><p>The Freak Circus có ba tính chất bất thường khiến hướng dẫn xấu trở nên phổ biến: trò chơi là một bản nguyên mẫu với một kết cục triển khai duy nhất, dàn nhân vật có số đo công bố nhưng không có tuổi công bố, và nhiều tư liệu nhân vật thú vị đến từ các trang wiki của cộng đồng hâm mộ thay vì bài đăng của nhà phát triển. Mỗi điều đã tạo ra một loại thông tin sai riêng.</p></div>

      <h2>Ba nhóm</h2>
      <ul>
        <li><strong>Đã triển khai.</strong> Bạn có thể chạm tới trong bản build công khai ngay bây giờ. Một kết cục đạt tiêu chuẩn: «Missing», kết cục xấu ở Ngày 1, đạt được bằng cách không làm gì khi Pierrot bị chế nhạo.</li>
        <li><strong>Đã lên kế hoạch.</strong> Nhà phát triển đã nêu tên, và nó chưa nằm trong bản build. Bốn cái đạt: Pierrot, Harlequin, nhân vật chính, và "All together".</li>
        <li><strong>Chưa được xác minh.</strong> Không nguồn chính, nhưng được lặp rộng rãi. Đường dẫn bản lưu, số ô lưu, lịch tự lưu, tuổi và ngày sinh chính xác, tổng thời gian hoàn thành, ngày phát hành Ngày 3, và bất kỳ con số kết cục cụ thể nào.</li>
      </ul>
      <p>Phần lớn tranh luận dữ kiện về trò chơi này tan ra khi mỗi câu nằm trong một nhóm. "Trò chơi có năm kết cục" là lỗi gộp: một kết cục triển khai cộng bốn cái đã kế hoạch, được trình bày như một tổng đã xác nhận mà nhà phát triển chưa từng đưa.</p>

      <h2>Năm câu hỏi để đặt cho một hướng dẫn</h2>
      <ol class="walkthrough-steps">
        <li><strong>Đây nói về bản build nào?</strong> Phiên bản 0.2 là bản công khai hiện tại. Một hướng dẫn không bao giờ nêu phiên bản đang mô tả trí nhớ của tác giả.</li>
        <li><strong>Nó có dẫn nguồn không?</strong> Một trang chính thức, một mục devlog, một câu trả lời AMA, một bài đăng Tumblr. Hướng dẫn không chỉ ra được một trong các thứ đó là đang diễn giải.</li>
        <li><strong>Nó có ghi nhãn tư liệu cộng đồng là tư liệu cộng đồng không?</strong> Chi tiết trang phục, lý do Pierrot im lặng, vai trò Harlequin trong cái chết của Columbina — đều hữu ích, đều đến từ wiki của cộng đồng hâm mộ, đều đáng được ghi nhãn.</li>
        <li><strong>Nó có nói tiết lộ nội dung bắt đầu từ đâu không?</strong> Một hướng dẫn tiết lộ mở đầu Ngày 2 mà không báo trước không hữu ích hơn cái có báo.</li>
        <li><strong>Nó có giữ đúng mức dè dặt ở nơi cần không?</strong> "Đã lên kế hoạch", "chưa triển khai", "chưa xác nhận" không phải điểm yếu của một hướng dẫn. Chúng là phần vẫn còn đúng sau lần cập nhật tới.</li>
      </ol>

      <h2>Những lỗi cụ thể đáng bắt gặp</h2>
      <h3>Tuyến tình yêu cho những nhân vật không có tuyến</h3>
      <p>Các lựa chọn tuyến đã xác nhận là Pierrot, Harlequin, cả hai, hoặc không chọn ai. Không có tuyến Jester, không có tuyến Ticket Taker, và không có tuyến Doctor. Nhà phát triển mô tả việc biến các nhân vật còn lại thành lựa chọn tình yêu là một khả năng chứ không phải cam kết, và bất kỳ tuyến nào như vậy nhiều khả năng đến dưới dạng bản mở rộng hoặc DLC. Các hướng dẫn mô tả một tuyến Ticket Taker "mở khóa bằng kiên trì và đối thoại khéo léo", một kết cục "Clean Hands" của Doctor, hay một tuyến Jester "mở khóa ở Ngày 2" đều đang mô tả những thứ không tồn tại. Bản cập nhật Ngày 2 thêm nhân vật, hình vẽ động, menu thiết kế lại và một bản Android — không thêm tuyến mới.</p>
      <h3>Một "kết cục tốt" không tồn tại</h3>
      <p>Không có kết cục tốt nào được triển khai. Kết cục duy nhất trong bản build là một kết cục xấu, và các kết luận tình yêu thường được mô tả như các kết quả "tốt" chính là các kết cục đã lên kế hoạch nêu trên — chưa hoàn thành, và không đảm bảo là kết quả mà fan mong đợi.</p>
      <h3>Con số chính xác mà không có nguồn</h3>
      <p>Tuổi cụ thể, ngày sinh, chiều cao cho Columbina, tổng thời gian chơi, số kết cục chính xác, và vị trí bản lưu chi tiết đều là phát minh của fan khoác áo dữ liệu. Các phép đo thật là bảng chiều cao của nhà phát triển và thứ tự tuổi tương đối — và chưa từng có con số tuổi nào được công bố cho bất kỳ ai trong dàn nhân vật.</p>
      <h3>Ngày cho Ngày 3</h3>
      <p>Chưa có ngày phát hành nào được công bố, và nhà phát triển đã đề nghị không lặp lại các khẳng định ngày từ bên ngoài. Một trang đếm ngược là một ước tính của fan có gắn đồng hồ. Ngày duy nhất có giá trị là ngày trên trang itch.io chính thức hoặc trong một bài đăng chính thức.</p>

      <h2>Đọc nguồn mà không mù quáng tin</h2>
      <p>Wiki của cộng đồng hâm mộ thực sự có giá trị với trò chơi này và đáng dùng — với một lưu ý cụ thể. Nó tổng hợp tư liệu nhân vật từ chính các cảnh của trò chơi, nghĩa là mô tả nhân vật của nó gần nguồn, còn các suy luận và ngày tháng của nó thì không phải từ nguồn chính. Thói quen thực tế là giữ hai thứ tách riêng trong lúc đọc.</p>
      <ul>
        <li><strong>Wiki làm tốt:</strong> chi tiết trang phục, giải thích trong truyện, tóm tắt quan hệ, và bản ghi những gì nhà phát triển đã trả lời trong các chủ đề AMA.</li>
        <li><strong>Wiki làm sai:</strong> con số tuổi và phần lớn ngày sinh, chiều cao cho Columbina, và các cách đọc sự kiện mơ hồ được nói chắc hơn mức bằng chứng cho phép.</li>
        <li><strong>Cần làm:</strong> chép phần mô tả, giữ phần dè dặt.</li>
      </ul>
      <div class="walkthrough-tip"><strong>Một phép thử một dòng cho mọi khẳng định</strong><p>Hỏi: "Nhà phát triển có thể bác điều này vào ngày mai mà chẳng ai để ý không?" Nếu có, khẳng định cần dè dặt hoặc quy nguồn. "Nhà phát triển xác nhận tám loại vé" không thể bị bác một cách lặng lẽ. "Harlequin 21 tuổi" thì có thể, và đã từng bị.</p></div>

      <h2>Một điều nữa: bạn lấy trò chơi ở đâu</h2>
      <p>Trước khi đánh giá bất kỳ hướng dẫn nào, kiểm tra liên kết nguồn của nó. Nhà phát triển đã nói trang itch.io là trang chính thức duy nhất của trò chơi và đề nghị đừng tải lên lại hay đăng lại trò chơi. Không có máy chủ Discord chính thức, nên mọi máy chủ không được liên kết từ các trang itch.io, Tumblr, Patreon hay Bluesky chính thức là do fan vận hành hoặc không được phép.</p>
      <p>Các hướng dẫn đẩy một "bản tải mirror", một chương trình "xác minh", hay một bộ cài "đã vá" không phải là hướng dẫn. Đừng bao giờ cài một chương trình riêng hay tắt phần mềm diệt virus để có được trò chơi này.</p>

      <h2>Một thói quen làm việc</h2>
      <p>Đọc ghi chú phạm vi của hướng dẫn trước. Nếu nó nói rõ bản build nào được bao phủ, nguồn nằm ở đâu, và phần nào vẫn đang phát triển, phần còn lại có thể được tin theo tỷ lệ đó. Nếu nó mở đầu bằng một khẳng định tự tin về một kết cục không tồn tại, hãy đặt xuống — đó là một hướng dẫn sẽ tự tin nói sai điều về mọi thứ khác nữa.</p>
      <p>Để có phiên bản đã kiểm chứng của các chủ đề được tìm kiếm nhiều nhất, bắt đầu với <a href="/vi/endings">hướng dẫn kết cục</a>, <a href="/vi/characters/heights">hướng dẫn chiều cao</a>, và <a href="/vi/save">hướng dẫn lưu game</a> — tất cả đều tách dữ kiện đã xác nhận khỏi khẳng định chưa xác minh theo cùng một cách.</p>
    `,
  },
];
