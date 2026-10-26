export interface SectionData {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  stitBgImage?: string;
  align?: 'left' | 'right' | 'center';
  headerImage?: {
    src: string;
    alt: string;
  };
  paragraphs: string[];
  timelineData?: {
    date: string;
    title: string;
    description: string;
    badge?: string;
  }[];
  quotes?: {
    content: string;
    author: string;
    title: string;
    headline?: string;
  }[];
  stats?: {
    value: string;
    label: string;
    context: string;
  }[];
}

export interface ArticleData {
  seriesTitle: string;
  title: string;
  publication: string;
  category: string;
  publishDate: string;
  lts: string[];
  sapo: string;
  keyPrinciple: string;
  sections: SectionData[];
}

export const ARTICLE_DATA: ArticleData = {
  seriesTitle: "HÒA NHỊP HÀNH ĐỘNG “LÀM VÀ LÀM ĐÚNG, LÀM QUYẾT LIỆT, HIỆU QUẢ”",
  title: "Bài 1: Quyết sách thần tốc đạt kết quả vì nói đi đôi với làm",
  publication: "E-MAGAZINE SPECIAL",
  category: "LONGFORM • THỜI SỰ - CHÍNH TRỊ",
  publishDate: "2026",
  lts: [
    "LTS: Đất nước ta đang bước vào kỷ nguyên phát triển mới, được dẫn dắt bởi một hệ thống chính trị đã được kiện toàn sau khi tổ chức thành công Đại hội đại biểu toàn quốc lần thứ XIV của Đảng, bầu cử Quốc hội khóa XVI và HĐND các cấp nhiệm kỳ 2026-2031. Thông điệp: “Nhiệm vụ của chúng ta hiện nay là: Làm và làm đúng, làm quyết liệt, hiệu quả” của Tổng Bí thư, Chủ tịch nước Tô Lâm tại Hội nghị toàn quốc quán triệt, triển khai Nghị quyết Hội nghị Trung ương 2 khóa XIV ngày 13-4 là mệnh lệnh công vụ hiệu triệu hành động đối với hệ thống chính trị, mở ra bước chuyển chiến lược: từ tập trung hoàn thiện thể chế sang quyết liệt thực thi để mang lại kết quả thực chất, được người dân cảm nhận bằng những lợi ích cụ thể.",
    "Mục tiêu xuyên suốt này tiếp tục được Tổng Bí thư, Chủ tịch nước Tô Lâm nhấn mạnh tại Hội nghị toàn quốc quán triệt, triển khai Nghị quyết Hội nghị Trung ương 4 khóa XIV ngày 16-10: “Thành quả tăng trưởng phải tạo điều kiện để mỗi người dân phát triển bản thân và đóng góp cho đất nước”. Báo Sài Gòn Giải Phóng thực hiện tuyến bài này nhằm khắc họa cuộc chuyển mình mạnh mẽ của đất nước với nhịp điệu quản trị mới - một xung lực hành động lan tỏa mạnh mẽ từ Trung ương đến từng cấp cơ sở, với mục tiêu cao nhất: Tất cả vì hạnh phúc của nhân dân!"
  ],
  sapo: "Nhiều quyết sách chăm lo an sinh xã hội, phát triển kinh tế được hệ thống chính trị thực hiện nhanh chóng, với tốc độ chưa có tiền lệ. Sự hiện diện thần tốc của 107 ngôi trường phổ thông nội trú liên cấp vùng biên hay một nghị quyết tháo gỡ về thuế được Quốc hội thông qua chỉ sau 20 ngày có chủ trương… là những minh chứng sống động. Khoảng cách từ nghị trường đến đời sống, từ quyết sách đến thực tế đang được thu hẹp đến mức thấp nhất bằng một nguyên tắc tối thượng: Nói đi đôi với làm!",
  keyPrinciple: "Nói đi đôi với làm!",
  sections: [
    {
      id: "section-1",
      number: "01",
      title: "KỲ TÍCH 100 NGÀY ĐÊM\nNƠI BIÊN ẢI",
      stitBgImage: "/assets/aistudio/Bai_1-stit-1_a6c5772a.jpg",
      paragraphs: [
        "Chúng tôi trở lại Trường Phổ thông nội trú Tiểu học - THCS Sín Thầu (xã Sín Thầu, Điện Biên) những ngày này, trong lớp học thơm mùi sơn mới, tiếng đánh vần của những đứa trẻ người Hà Nhì vang lên rộn rã. Những lớp học nơi rẻo cao của Tổ quốc giờ đây còn có tivi cùng thiết bị dạy học hiện đại, bên bảng đen, phấn trắng quen thuộc. Năm học 2026-2027, trường có 1.013 học sinh, trong đó có 898 em nội trú; 745 em nhà cách trường từ 7km trở lên và 477 em đến từ những bản giáp biên. Em Khoàng Tư Cà, học sinh lớp 8A1, hào hứng khoe không còn phải vượt quãng đường 10km từ bản Phứ Ma đến trường mỗi ngày nên có thêm thời gian học bài và tham gia các hoạt động tại trường. Với những người làm cha, làm mẹ, gánh nặng cũng được trút bỏ khi địa phương có ngôi trường nội trú khang trang. Bà Triệu Thị Vân, bản Tá Miếu, xã Sín Thầu, bộc bạch, trước đây, mỗi khi mưa rét, đường núi trơn trượt, gia đình luôn thấp thỏm lo lắng cho con. Nay, con ở nội trú, bà hoàn toàn yên tâm, không còn phải lo thu xếp việc đưa đón con hàng ngày.",
        "Thầy Lê Bảo Khương, Hiệu trưởng Trường Phổ thông nội trú Tiểu học - THCS Sín Thầu, khẳng định, vượt lên trên ý nghĩa một công trình xây dựng mới, ngôi trường là cánh cửa mở tương tương lai cho hàng ngàn học trò vùng biên. Cách đó hàng trăm kilomet, tại Lào Cai, cô Mông Thị Duyên, Hiệu trưởng Trường Phổ thông nội trú Tiểu học - THCS Mường Khương (xã Mường Khương, tỉnh Lào Cai), không giấu được xúc động trước ngôi trường nơi biên thùy rộng gần 50.000m2, tổng mức đầu tư 255 tỷ đồng, được bà con xuýt xoa \"đẹp như công viên\". \"Nhiều em nhà xa cách trường hơn 20km, nay được học nội trú, điều kiện ăn ở bảo đảm\", cô Duyên chia sẻ.",
        "Để biến những \"giấc mơ có thật\" ấy thành hiện thực, hệ thống chính trị đã phải kích hoạt một cuộc chạy đua thần tốc chưa có tiền lệ. Tại phiên họp ngày 17-7-2025, Bộ Chính trị thống nhất chủ trương đầu tư xây dựng các trường phổ thông nội trú liên cấp tại 248 xã biên giới đất liền, giao chỉ tiêu chậm nhất đến khai giảng năm học 2026-2027 phải hoàn thành 100 trường. Một “đề bài” cực khó được đặt ra, đòi hỏi mọi quyết tâm hành động phải lập tức... thoát khỏi phòng họp. Đúng 10 ngày sau, tại Điện Biên, Tổng Bí thư Tô Lâm (thời điểm này, đồng chí Tô Lâm chưa giữ chức Chủ tịch nước - PV) và đoàn công tác Trung ương dự lễ khởi công xây dựng Trường liên cấp Tiểu học - THCS xã Si Pa Phìn. Đến ngày 9-11-2025, 108 trường phổ thông nội trú liên cấp được khởi công đồng loạt.",
        "Với mệnh lệnh “chỉ bàn làm, không bàn lùi”, một “quy trình” phối hợp xuyên suốt được kích hoạt: Bộ Tài chính tổng hợp, trình Thủ tướng cấp kinh phí; Bộ Xây dựng ban hành 14 mẫu thiết kế chuẩn theo từng vùng; Bộ NN-MT rà soát, bố trí quỹ đất; Bộ Nội vụ hoàn thiện chính sách cho giáo viên và học sinh vùng biên... Các địa phương chủ động bố trí ngân sách địa phương hoặc huy động nguồn lực xã hội hóa. Phó Thủ tướng Lê Tiến Châu liên tục chủ trì các cuộc họp để tháo gỡ những khó khăn, điểm nghẽn trong quá trình triển khai...",
        "Chỉ sau 6 tháng thi công, ngày 31-1-2026, Trường Phổ thông nội trú liên cấp Tiểu học - THCS Si Pa Phìn cán đích đầu tiên, mở ra chuỗi bứt phá từ 8 trường lên 20, 30 trường... Một hành trình gỡ vướng - vượt khó kiểu mẫu mang đến cơ hội học tập tốt cho hàng triệu học sinh vùng biên giới. Thứ trưởng Thường trực Bộ GD-ĐT Phạm Ngọc Thưởng đúc kết chiến dịch 100 ngày đêm bằng 3 từ: \"Rất quyết liệt!\". \"Cả chiến dịch gói gọn trong 100 ngày đêm, triển khai 108 trường ở 21 tỉnh, thành, nhiều địa bàn khó khăn... Để rồi, 107/108 trường biên giới được đưa vào sử dụng trong năm học mới 2026-2027, khai giảng đúng ngày 5-9. Áp lực tiến độ cùng rất nhiều thách thức, như địa hình hiểm trở, thời tiết bất lợi, điều kiện thi công khó khăn, thiếu nhân công..., là một “phép thử” cho bản lĩnh và quyết tâm của cả hệ thống chính trị\", Thứ trưởng Phạm Ngọc Thưởng nhận xét."
      ],
      stats: [
        { value: "108", label: "Ngôi trường PTNT liên cấp", context: "Khởi công tại 21 tỉnh, thành biên giới" },
        { value: "100", label: "Ngày đêm thần tốc", context: "Chiến dịch cao điểm đưa trường vào khai giảng" },
        { value: "1.013", label: "Học sinh Sín Thầu", context: "Với 898 học sinh ở nội trú yên tâm học tập" },
        { value: "255 tỷ", label: "Mức đầu tư Mường Khương", context: "Khuôn viên 50.000m² đẹp như công viên" }
      ],
      timelineData: [
        { date: "17-07-2025", title: "Chủ trương Bộ Chính trị", description: "Đầu tư xây dựng trường PTNT liên cấp tại 248 xã biên giới đất liền." },
        { date: "27-07-2025", title: "Khởi công Si Pa Phìn", description: "Tổng Bí thư Tô Lâm dự lễ khởi công Trường liên cấp Si Pa Phìn (Điện Biên)." },
        { date: "09-11-2025", title: "Khởi công đồng loạt 108 trường", description: "Kích hoạt mệnh lệnh 'chỉ bàn làm, không bàn lùi' trên 21 tỉnh, thành." },
        { date: "31-01-2026", title: "Trường Si Pa Phìn cán đích", description: "Cán đích sau 6 tháng thi công, mở đường cho chuỗi bứt phá toàn quốc." },
        { date: "05-09-2026", title: "107/108 trường khánh thành", description: "Tổ chức Lễ khai giảng năm học mới đúng tiến độ cam kết." }
      ],
      quotes: [
        {
          content: "Được ở nội trú, em không phải đi đường xa mỗi ngày, có thêm thời gian học bài và tham gia các hoạt động cùng các bạn.",
          author: "Khoàng Tư Cà",
          title: "Học sinh lớp 8A1, Trường PTNT Sín Thầu"
        },
        {
          content: "Rất quyết liệt! Cả chiến dịch triển khai gói gọn trong 100 ngày đêm, thực hiện 108 trường ở 21 tỉnh, thành... như là một “phép thử” cho bản lĩnh và quyết tâm của cả hệ thống chính trị.",
          author: "Phạm Ngọc Thưởng",
          title: "Thứ trưởng Thường trực Bộ Giáo dục và Đào tạo"
        }
      ]
    },
    {
      id: "section-2",
      number: "02",
      title: "20 NGÀY THẦN TỐC\nGỠ ĐIỂM NGHẼN, GIẢM THUẾ",
      stitBgImage: "/assets/aistudio/Bai_1-stit-2_60f76a52.jpg",
      align: "right",
      paragraphs: [
        "Nếu chiến dịch xây trường vùng biên là minh chứng cho năng lực tổ chức thực thi, thì trên mặt trận kinh tế, thực tiễn thời gian qua đã khẳng định, để “đường chạy” thông suốt, thể chế phải chủ động đi trước mở đường. Hành trình của một chính sách giờ đây đã thoát khỏi trạng thái “chờ đúng quy trình” để vận hành nhanh chóng và tường minh hơn, giải quyết kịp thời những đòi hỏi bức thiết từ cuộc sống.",
        "Dấu ấn rõ nét nhất là Kỳ họp không thường lệ thứ nhất, Quốc hội khóa XVI. Chỉ trong vỏn vẹn 17 ngày làm việc, cơ quan lập pháp đã hoàn thành khối lượng công việc đồ sộ: thông qua 15 luật, 6 nghị quyết quy phạm pháp luật và cho ý kiến đối với 7 dự án luật quan trọng khác. Bên cạnh các con số thống kê đó, kết quả kỳ họp còn thể hiện rõ tinh thần hành động quyết liệt tháo gỡ điểm nghẽn thực thi. Chương trình kỳ họp liên tục được điều chỉnh linh hoạt, ưu tiên việc cấp bách; đại biểu làm việc cả ngày thứ bảy, chủ nhật; các cơ quan của Quốc hội, Chính phủ tổ chức tiếp thu, giải trình, chỉnh lý dự thảo trong khoảng thời gian ngắn. Cường độ làm việc cao cho thấy, một Quốc hội hành động để đáp ứng yêu cầu mới, giải quyết ngay những vấn đề cấp bách.",
        "Tại kỳ họp, Quốc hội thông qua Nghị quyết giảm 30% thuế thu nhập cá nhân, thuế thu nhập doanh nghiệp đối với cá nhân, doanh nghiệp có doanh thu không quá 10 tỷ đồng/năm. Nhìn lại mốc thời gian mới thấy hết tốc độ làm việc thần tốc của bộ máy. Tại phiên họp Chính phủ thường kỳ ngày 3-8, Thủ tướng Lê Minh Hưng chỉ đạo Bộ Tài chính đề xuất biện pháp về thuế để tiếp sức cho doanh nghiệp nhỏ và vừa, cá nhân, hộ kinh doanh. Ngày 21-8, chỉ 3 ngày trước khi kỳ họp bế mạc, Chính phủ trình bổ sung nội dung trên vào chương trình nghị sự. “Vì tính cấp thiết của chính sách, Chính phủ đề xuất Ủy ban Thường vụ Quốc hội xem xét, cho phép xây dựng và ban hành nghị quyết theo trình tự, thủ tục rút gọn, đồng thời bổ sung dự án nghị quyết này vào chương trình kỳ họp không thường lệ thứ nhất”, Bộ trưởng Bộ Tài chính Ngô Văn Tuấn kể.",
        "Tính từ thời điểm người đứng đầu Chính phủ chỉ đạo cho đến khi Quốc hội bấm nút thông qua, toàn bộ quy trình chỉ gói gọn trong 20 ngày. Theo Bộ trưởng Bộ Tài chính, việc ban hành nghị quyết trong tháng 8, chính sách lập tức có hiệu lực trong quý 3-2026, giúp giảm áp lực tài chính và tác động tích cực tới hàng triệu hộ kinh doanh, doanh nghiệp. Nếu chờ đến kỳ họp vào tháng 10 mới trình thông qua, hiệu quả thực thi sẽ giảm nhiều, ảnh hưởng đến cơ hội sản xuất - kinh doanh trong mùa cao điểm cuối năm."
      ],
      stats: [
        { value: "20 ngày", label: "Quy trình từ chỉ đạo đến thông qua", context: "Kỷ kỷ thần tốc phản ứng chính sách thuế" },
        { value: "30%", label: "Mức giảm thuế TNCN và TNDN", context: "Cho cá nhân, doanh nghiệp doanh thu ≤ 10 tỷ/năm" },
        { value: "17 ngày", label: "Thời gian Kỳ họp không thường lệ XVI", context: "Thông qua 15 luật và 6 nghị quyết quy phạm" }
      ],
      timelineData: [
        { date: "03-08-2026", title: "Thủ tướng chỉ đạo Bộ Tài chính", description: "Thủ tướng Lê Minh Hưng yêu cầu đề xuất giải pháp thuế hỗ trợ doanh nghiệp và hộ kinh doanh." },
        { date: "21-08-2026", title: "Chính phủ trình bổ sung", description: "Chỉ 3 ngày trước bế mạc kỳ họp, Chính phủ trình dự thảo theo thủ tục rút gọn." },
        { date: "Tháng 8-2026", title: "Quốc hội bấm nút thông qua", description: "Ban hành Nghị quyết có hiệu lực ngay trong Quý 3-2026 cho hàng triệu hộ kinh doanh." },
        { date: "Từ 04/2026 - nay", title: "Đã xử lý vướng mắc 2.535 dự án", description: "Từ tháng 4/2026 đến nay đã xử lý vướng mắc cho 2.535 dự án (đưa vào sử dụng 86,6 nghìn ha; khơi thông nguồn vốn trên 1,76 triệu tỷ đồng), nâng tổng số dự án được tháo gỡ lên 3.557 dự án." }
      ],
      quotes: [
        {
          content: "Vì tính cấp thiết của chính sách, Chính phủ đề xuất Ủy ban Thường vụ Quốc hội xem xét, cho phép xây dựng và ban hành Nghị quyết theo trình tự, thủ tục rút gọn...",
          author: "Ngô Văn Tuấn",
          title: "Bộ trưởng Bộ Tài chính"
        }
      ]
    },
    {
      id: "section-3",
      number: "03",
      title: "CHỦ ĐỘNG XÓA\n“ĐỘ TRỄ” THỰC THI",
      stitBgImage: "/assets/aistudio/Bai_1-stit-3_9935be98.jpg",
      paragraphs: [
        "Song hành cùng quyết sách từ Trung ương, tinh thần “thể chế đi trước để mở đường” đang thẩm thấu sâu sắc, tạo thành xung lực hành động đồng bộ tại nhiều địa phương trên cả nước, theo hướng: cởi trói thủ tục để hành động nhanh hơn, hiệu quả hơn.",
        "Tại TPHCM, khoảng cách từ lúc tiếp nhận nghị quyết của Đảng đến khi bắt tay vào hành động thực tiễn đang được rút ngắn tối đa. Chỉ đúng một tuần sau hội nghị toàn quốc, ngày 7-8, Thành ủy TPHCM đã lập tức tổ chức hội nghị quán triệt, triển khai Nghị quyết Hội nghị Trung ương 3 để bàn thảo những đầu việc cụ thể. Phó Bí thư Thường ứng Thành ủy TPHCM Lê Quốc Phong nhấn mạnh, việc triển khai sớm là để nhanh chóng đưa những định hướng chiến lược của Trung ương vào chương trình hành động của thành phố.",
        "Cách làm khẩn trương đó tạo ra sự chuyển bộ nhanh. Khi chủ trương đã rõ, các cấp, các ngành phải xác định phần việc thuộc trách nhiệm của mình, chuẩn bị những nội dung có thể thực hiện trước và đưa vào kế hoạch cụ thể. Phương châm “làm quyết liệt” ở TPHCM càng được thể hiện rõ nét trong quá trình chuẩn bị thực thi Luật Phát triển đô thị. Ngay khi Quốc hội đang thảo luận dự thảo Luật Phát triển đô thị, TPHCM đã kích hoạt cơ chế “chạy song song”: khẩn trương rà soát toàn bộ nội dung sẽ được phân cấp, phân quyền để rút ngắn thời gian đưa các cơ chế, chính sách mới vào cuộc sống. Bí thư Thành ủy TPHCM Trần Lưu Quang khẳng định: “Tinh thần của thành phố là không chờ luật có hiệu lực mới bắt đầu chuẩn bị”. Chính nhờ cách làm đi tắt đón đầu đầy quyết đoán đó, thời điểm luật có hiệu lực (ngày 1-10), HĐND thành phố đã thông qua 25 nghị quyết cụ thể hóa, đưa các cơ chế vượt trội đi vào đời sống ngay từ ngày đầu tiên. Tinh thần khẩn trương đó đang được định hình thành nếp kỷ luật công vụ. Bí thư Thành ủy TPHCM Trần Lưu Quang nhấn mạnh, quyền hạn được trao càng lớn thì phải đi đôi với trách nhiệm thực thi rạch ròi. Trong đó, tinh thần làm quyết liệt, hiệu quả đang được TPHCM lượng hóa bằng việc liên tục rà soát, đánh giá cán bộ qua hệ thống chỉ số KPI thực chất. Những ai không làm được việc, né tránh trách nhiệm sẽ bị đào thải.",
        "Từ nghị trường đến các địa phương, tinh thần “làm quyết liệt” đang phá vỡ sức ì cũ để thiết lập nếp hành động mới. Tại Hội nghị toàn quốc quán triệt, triển khai thực hiện Nghị quyết Trung ương 4 vào ngày 16-10, Tổng Bí thư, Chủ tịch nước Tô Lâm tiếp tục yêu cầu nêu cao trách nhiệm, tháo gỡ mọi cản trở phát triển để không làm mất cơ hội của đất nước và Nhân dân; đồng thời đặt ra một yêu cầu mang tính nguyên tắc cho khâu thực thi: “Quyết định lãnh đạo, chỉ đạo phải có căn cứ thực tiễn và được theo dõi đến kết quả cuối cùng”. Mệnh lệnh sâu sắc ấy khẳng định, một chủ trương chỉ hoàn thành sứ mệnh khi tạo ra giá trị thụ hưởng thực tế cho xã hội. Đó cũng là điểm tựa vững chắc để cán bộ tuyến cơ sở - nơi sát sườn nhất với Nhân dân - vận hành với tâm thế kiên trì đeo bám, giải quyết việc của người dân đến cùng."
      ],
      stats: [
        { value: "7 ngày", label: "Quán triệt Nghị quyết Trung ương 3", context: "Thành ủy TPHCM triển khai chỉ 1 tuần sau HN toàn quốc" },
        { value: "25", label: "Nghị quyết HĐND TPHCM thông qua", context: "Cụ thể hóa Luật Phát triển đô thị ngay từ ngày đầu có hiệu lực (1-10)" },
        { value: "KPI", label: "Tối thượng phụng sự nhân dân", context: "Đánh giá cán bộ bằng chỉ số thực chất, đào thải né tránh" }
      ],
      quotes: [
        {
          content: "Khát vọng lớn phải được hiện thực hóa bằng tầm nhìn đúng, quyết sách có căn cứ và hành động có trách nhiệm. Mỗi kết quả hôm nay phải bồi đắp năng lực để đất nước tiến xa, tiến vững chắc hơn. Kỷ nguyên mới đòi hỏi nghĩ xa, quyết định đúng và hành động hiệu quả.",
          author: "TỔNG BÍ THƯ, CHỦ TỊCH NƯỚC TÔ LÂM",
          title: "(Phát biểu truyền đạt chuyên đề: “Lãnh đạo chiến lược trong kỷ nguyên mới: Tầm nhìn trăm năm - tư duy đột phá - kiến tạo phát triển - quản trị thực thi” tại Học viện Chính trị quốc gia Hồ Chí Minh vào ngày 14-9)."
        },
        {
          content: "Tinh thần của thành phố là không chờ luật có hiệu lực mới bắt đầu chuẩn bị.",
          author: "Trần Lưu Quang",
          title: "Bí thư Thành ủy TPHCM"
        },
        {
          content: "Quyết định lãnh đạo, chỉ đạo phải có căn cứ thực tiễn và được theo dõi đến kết quả cuối cùng.",
          author: "Tô Lâm",
          title: "Tổng Bí thư, Chủ tịch nước"
        },
        {
          content: "Tôi đặc biệt ấn tượng với tốc độ khẩn trương và phương pháp quán triệt, triển khai của các nghị quyết Trung ương của Thành ủy TPHCM trong thời gian qua. Việc học tập nghị quyết gắn sát sườn với nhiệm vụ của từng cơ quan, đơn vị. Cách làm này giúp cán bộ, đảng viên sau khi học tập nghị quyết đều hình dung rõ, đơn vị mình phải bắt tay thực hiện những việc gì, lộ trình ra sao và chịu trách nhiệm về sản phẩm đầu ra như thế nào trong thời gian tới.",
          author: "Ông TRẦN NGỌC LÂM",
          title: "Bí thư Chi bộ, Hiệu trưởng Trường THCS Văn Lang (phường Tân Định, TPHCM)",
          headline: "Ấn tượng với tốc độ cụ thể hóa nghị quyết"
        },
        {
          content: "Cộng đồng doanh nghiệp nhỏ và vừa cùng các hộ kinh doanh rất vui mừng, trân trọng cảm ơn sự quyết liệt của Chính phủ, Thủ tướng và Quốc hội. Ngay từ đầu nhiệm kỳ, Chính phủ đã trình Quốc hội thông qua việc nâng ngưỡng doanh thu không phải nộp thuế cho hộ kinh doanh từ 100 triệu đồng/năm lên 1 tỷ đồng/năm và tiếp đó là nghị quyết giảm 30% số thuế thu nhập cá nhân và số thuế thu nhập doanh nghiệp phải nộp của kỳ tính thuế năm 2026 và 2027. Điều đó cho thấy, Chính phủ đã hết sức nhạy bén trong việc tìm ra những điểm nghẽn và chủ động tháo gỡ. Để đạt mục tiêu tăng trưởng kinh tế 10% trở lên, các đường lối, chính sách đã khá toàn diện và đầy đủ. Tâm thế của cộng đồng doanh nghiệp hiện nay là: hành động quyết liệt để quyết tâm đóng góp vào mục tiêu tăng trưởng.",
          author: "Ông NGUYỄN VĂN THÂN",
          title: "Chủ tịch Hiệp hội Doanh nghiệp nhỏ và vừa Việt Nam",
          headline: "Chính sách nhạy bén gỡ khó cho doanh nghiệp"
        }
      ]
    },
    {
      id: "section-4",
      number: "04",
      title: "VƯỢT GIỚI HẠN, TÌM LỜI GIẢI\nĐỂ PHỤNG SỰ",
      stitBgImage: "/assets/aistudio/IMG_8308_e7a7178e.jpg",
      paragraphs: [
        "Trong kỷ nguyên phát triển mới của dân tộc, bên cạnh những con số tăng trưởng, làm và làm đúng, làm quyết liệt, hiệu quả không chỉ vì những chỉ tiêu phát triển kinh tế, mà còn được nỗ lực thực hiện để kịp… đền ơn, đáp nghĩa!",
        "Chiến dịch 500 ngày đêm đẩy mạnh tìm kiếm, quy tập và xác định danh tính hài cốt liệt sĩ là một điển hình. Đây là công cuộc tìm kiếm toàn diện, có quy mô lớn nhất từ trước tới nay được triển khai trên cả nước và trên đất nước bạn Lào, Campuchia với phương châm chỉ còn một liệt sĩ chưa được trở về, chiến dịch sẽ không dừng lại.",
        "Một bên là chiến dịch 100 ngày đêm vượt nắng thắng mưa dựng lên hơn trăm ngôi trường nội trú nơi biên ải để gieo mầm tương lai; một bên là chiến dịch 500 ngày đêm băng rừng, lội suối tìm kiếm, quy tập những người con ưu tú đã ngã xuống để đền ơn đáp nghĩa. Hai mũi hành động ấy tuy khác nhau về không gian và tính chất công việc, nhưng có điểm chung: vượt lên trên giới hạn của những nhiệm vụ thông thường, để tìm lời giải cho trách nhiệm phụng sự, trước hết là với nhân dân.",
        "Hàng trăm ngày đêm triển khai trên thực địa là vô số lần các lực lượng làm nhiệm vụ đối diện với khó khăn, có lúc tưởng chừng bế tắc. Nhưng khi nhiệm vụ được kích hoạt, nguồn lực đặt để đúng chỗ thì phương pháp vận hành linh hoạt, sáng tạo trở thành chìa khóa quan trọng nhất. Bám sát chỉ đạo với tinh thần “làm hết sức, chạy đua với thời gian”, nguyên tắc xử lý công việc được quán triệt xuyên suốt: vướng ở đâu, tháo gỡ ngay tại chỗ; phần việc nào sức người chưa làm được thì ứng dụng khoa học - kỹ thuật vào hỗ trợ, tiếp sức…",
        "Phía sau những con số tổng kết ngắn gọn, báo cáo kết quả là những ngày đêm cả hệ thống chính trị phải căng mình đối diện với những khó khăn trong quá trình thực thi.",
        "Với chiến dịch tìm kiếm, quy tập hài cốt liệt sĩ, đó là những cuộc chạy đua nghiệt ngã với tuổi tác của các nhân chứng lịch sử để chắp nối từng thông tin cách đây nhiều chục năm, khi địa hình biến đổi và manh mối gần như đứt gãy hoàn toàn. Với những công trình an sinh vùng biên, đó là khi vừa giải quyết được vấn đề thi công tại địa hình hiểm trở, giao thông khó khăn, nguồn lực khan hiếm, chi phí cao thì đến công tác giải phóng mặt bằng phức tạp hay sự lúng túng ban đầu của địa phương trong triển khai quy trình mới, chính sách mới, nhất là về ngân sách.",
        "Trong những thời khắc quyết định ấy, nếu Chính phủ và các địa phương vẫn duy trì tư duy an toàn, thực hiện theo quy trình, chờ đủ từng thủ tục theo tuần tự thông thường mới quyết định bổ sung kinh phí, kết quả hôm nay chắc chắn sẽ khác.",
        "Suy cho cùng, bản lĩnh dám nghĩ, dám làm, sáng tạo vượt qua những rào cản về thủ tục, quy trình với một tâm thế trong sáng, vì lợi ích chung và tuyệt đối không vụ lợi chính là chất xúc tác mạnh mẽ nhất để biến chủ trương thành hiện thực. Đó cũng chính là câu trả lời thuyết phục nhất của một nền công vụ kiến tạo trước đòi hỏi của đất nước trong giai đoạn phát triển cũng như sự kỳ vọng của nhân dân."
      ]
    }
  ]
};
