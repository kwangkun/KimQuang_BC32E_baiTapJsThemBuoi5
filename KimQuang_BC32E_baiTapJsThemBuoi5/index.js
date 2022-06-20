// Bài 3:
document.getElementById('btnB3').onclick = function () {
    // Input: name: string; tN, pT: number
    var name = document.getElementById('hoTen').value;
    var tN = Number(document.getElementById('thuNhap').value);
    var pT = Number(document.getElementById('phuThuoc').value);

    var tNCT = tN - 4e+6 - pT * 1.6e+6;
    var thue = 0;
    // Output: string
    var ketQua = '';

    // Process:
    if (tNCT <= 60e+6) {
        thue = 0.05 * tNCT;
    } else if (tNCT > 60e+6 && tNCT <= 120e+6) {
        thue = 0.1 * tNCT;
    } else if (tNCT > 120e+6 && tNCT <= 210e+6) {
        thue = 0.15 * tNCT;
    } else if (tNCT > 210e+6 && tNCT <= 384e+6) {
        thue = 0.2 * tNCT;
    } else if (tNCT > 384e+6 && tNCT <= 624e+6) {
        thue = 0.25 * tNCT;
    } else if (tNCT > 624e+6 && tNCT <= 960e+6) {
        thue = 0.30 * tNCT;
    } else if (tNCT > 960e+6) {
        thue = 0.35 * tNCT;
    } else {
        ketQua = 'Số tiền thu nhập không hợp lệ';
    };

    ketQua = 'Họ tên: ' + name + '; Tiền thuế thu nhập cá nhân: ' + thue.toLocaleString() + ' VND';

    if (thue < 0) {
        ketQua = 'Số tiền thu nhập không hợp lệ';
    }

    document.getElementById('kQB3').innerHTML = ketQua;
};

// Bài 4:
function themTag() {
    if (document.getElementById('selectB4').value === 'doanhNghiep') {
        document.getElementById('ext').innerHTML = '<input class="form-control col-4" style="display: block;" placeholder="Số Kết Nối" id="soKN" type="number"></input>';
        var sKN = Number(document.getElementById('soKN').value);
    } else {
        document.getElementById('soKN').style.display = 'none';
    };
};

document.getElementById('btnB4').onclick = function () {
    // Input: type, cusCod: string; channNumb, sKN, tong: number
    var type = document.getElementById('selectB4').value;
    var cusCod = document.getElementById('maKH').value;
    var channNumb = Number(document.getElementById('soK').value);
    var tong = 0;

    // Output: string
    var ketQua = '';

    // Process:

    if (type === 'doanhNghiep' && sKN <= 10) {
        tong = 15 + 75 + 50 * channNumb;
    } else if (type === 'doanhNghiep' && sKN > 10) {
        tong = 15 + 75 + ((sKN - 10) * 5) + 50 * channNumb;
    } else if (type === 'nhaDan') {
        tong = 4.5 + 20.5 + 7.5 * channNumb;
    }

    ketQua = 'Mã khách hàng: ' + cusCod + '; Tiền cáp: ' + '$' + tong.toLocaleString();
    document.getElementById('kQB4').innerHTML = ketQua;
};