$(document).ready(function(){
  function checkMa(){
    var ma = $("#ma").val();
    if (ma == "") {
      $("#ma").next().html("* Bắt buộc nhập");
      return false;
    }
    let reg = /^K16-\d{9}$/;
    if (!reg.test(ma)) {
      $("#ma")
        .next()
        .html(
          "* Mã thành viên chỉ dùng theo mẫu K16-xxxxxxxxx, gồm 13 ký tự, ký tự đầu K là in hoa, kế tiếp 16-xxxxxxxxx, x là chữ số"
        );
      return false;
    }
    $("#ma").next().html("*");
    return true;
  }

  function checkTen(){
    var ten = $("#ten").val();
    if (ten == "") {
      $("#ten").next().html("* Bắt buộc nhập");
      return false;
    }
    let reg = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
    if (!reg.test(ten)) {
      $("#ten")
        .next()
        .html(
          "* Họ tên chỉ dùng chữ hoa đầu không dùng số"
        );
      return false;
    }
    $("#ten").next().html("*");
    return true;
  }

  function checkLop(){
    var lop = $("#lop").val();
    if (lop == "") {
      $("#lop").next().html("* Bắt buộc nhập");
      return false;
    }
    let reg = /^[A-Z0-9]{11}$/;
    if (!reg.test(lop)) {
      $("#lop")
        .next()
        .html(
          "* Lớp dùng 11 ký tự gồm chữ in hoa và số"
        );
      return false;
    }
    $("#lop").next().html("*");
    return true;
  }

  function checkNgay(){
    var ngay = $("#ngay").val();
    if (ngay == "") {
      $("#ngay").next().html("* Bắt buộc nhập");
      return false;
    }
    var day = Date.parse(ngay);
    var today = Date.now();
    var result = day - today;
    if (result < 0 || result / (1000 * 24 * 3600) < 30) {
      $("#ngay")
        .next()
        .html("* Ngày tham gia sau ngày hiện tại 30 ngày");
      return false;
    }
    $("#ngay").next().html("*");
    return true;
  }

  function checkSDT(){
    var sdt = $("#sdt").val();
    if (sdt == "") {
      $("#sdt").next().html("* Bắt buộc nhập");
      return false;
    }
    let reg = /^0\d{3}-\d{3}-\d{3}$/;
    if (!reg.test(sdt)) {
      $("#sdt")
        .next()
        .html(
          "* Điện thoại theo mẫu 0xxx-xxx-xxx"
        );
      return false;
    }
    $("#sdt").next().html("*");
    return true;
  }

  function checkEmail(){
    var email = $("#email").val();
    if (email == "") {
      $("#email").next().html("* Bắt buộc nhập");
      return false;
    }
    let reg = /^[a-zA-Z0-9]{5}@iuh\.edu\.vn$/;
    if (!reg.test(email)) {
      $("#email")
        .next()
        .html(
          "* Email theo mẫu: xxxxx@iuh.edu.vn"
        );
      return false;
    }
    $("#email").next().html("*");
    return true;
  }
  $("#ma").blur(function (e) {
    checkMa();
  });

  $("#ten").blur(function (e) {
    checkTen();
  });

  $("#lop").blur(function (e) {
    checkLop();
  });

  $("#ngay").blur(function (e) {
    checkNgay();
  });

  $("#sdt").blur(function(e){
    checkSDT();
  })

  $("#email").blur(function(e){
    checkEmail();
  })

  var stt = 1;
  $("#submit").click(function (e) {
    e.preventDefault();
    var ma = $("#ma").val();
    var ten = $("#ten").val();
    var lop = $("#lop").val();
    var ngay = $("#ngay").val();
    var sdt = $("#sdt").val();
    var email = $("#email").val();
    document.getElementById("data").innerHTML += `<tr>
                            <td>${stt}</td>
                            <td>${ma}</td>
                            <td>${ten}</td>
                            <td>${lop}</td>
                            <td>${ngay}</td>
                            <td>${sdt}</td>
                            <td>${email}</td>
                          </tr>`;
    stt++;
    $(".btn-close").click();
  });
})