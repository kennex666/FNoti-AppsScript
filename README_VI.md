# FNoti - Open Source
Bảng thông báo cho sinh viên sử dụng Google Apps Script

[Xem file README.md tiếng Anh tại đây](README.md)

## Tác giả
Dương Thái Bảo - Là sinh viên Khoá 17, trường Đại Học Công nghiệp TP.HCM

## Mục đích
Dự án này là một dự án cá nhân nhằm phục vụ cho mục đích tạo ra một hệ thống sử dụng ngay, giúp các bạn làm việc trong một dự án có thể lưu trữ các thông tin quan trọng một cách trực quan. Sử dụng Google Apps Script và HTML cơ bản, không yêu cầu thiết lập & máy chủ phức tạp.

## Yêu cầu
* Tài khoản Google
* Apps Script: [Trang chủ](https://script.google.com/home/)
* Google Forms và Google Sheets
* GitHub Page,... dùng để host file html

## Hướng dần sử dụng:

### Google Forms
1. Tạo một form bao gồm các thông tin:
* `ID`: Dùng để định danh bảng thông báo cho nhóm nào (Short Answer)
* `TYPE`: Loại thông báo dạng drop down hoặc radio tuỳ bạn, có 4 loại: INFO, IMPORTANT, UPDATE, REQUIRE_ACTION (viết in hoa)
* `CONTENT`: Dùng để lưu trữ tin nhắn thông báo (Paragraph)
* `IS_PINNED`: Radio gồm 2 giá trị: 0 và 1. Chọn 1 nếu cần ghim thông báo.
2. Link với Sheets
3. Mở Sheets lên và copy ID sheet lại 
`https://docs.google.com/spreadsheets/d/xxx/edit` trong đó `xxx` là id của Sheet
4. Nhớ lưu lại tên sheet để dùng cho bước sau.

### Google Apps Script
1. Tạo dự án
2. Copy file code trong `api_appscript.gs` và dán vào file code
3. Sửa thông tin ID và tên của Sheet
3. Deploy (Web App)
4. Copy URL Execute Script

### Deploy Web
1. Sửa lại API URL trong file `index.html` bằng URL của Google Apps Script
2. Tạo data test bằng form tạo ở trên, sau đó điền theo ID bạn đã nhập (Khuyến khích viết liền, không dấu, chỉ A-Z, a-z, 0-9, dấu - và _
3. Truy cập thử
`index.html?id=xxx&`


## CÁC VẤN ĐỀ LIÊN QUAN ĐẾN THÔNG TIN, ĐIỀU KHOẢN SỬ DỤNG
  * Dự án ban đầu được phát triển cho mục đích cá nhân, nhưng nhận thấy tiềm năng hữu ích nên chia sẻ cho cộng đồng mà không nhằm mục đích thương mại. Do đó, chúng tôi không chịu trách nhiệm đối với bất kỳ thiệt hại nào liên quan đến việc sử dụng sản phẩm này.

  * Bạn có thể sử dụng với mục đích cá nhân, nếu thương mại hoá (bao gồm giao diện, tính năng sử dụng trên source gốc, hoặc tuỳ chỉnh logic liên quan), nếu có thể xin hãy ghi lại thông tin của dự án miễn phi này.
