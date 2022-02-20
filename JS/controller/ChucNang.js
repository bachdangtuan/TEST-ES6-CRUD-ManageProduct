import { Menu } from "../models/Menu.js";
import { ObjsanPham } from "../models/sanPham.js"

// Lấy thông tin sản phẩm từ nút addProducts

// dùng let với const thôi nha a bỏ var đi

let menu = new Menu()

// lấy danh sách SP từ localStorage

menu.layStorage();

// xuất màn hình

menu.renderSP('tbody');

// Lấy thông tin SP

let addProducts = () => {

  // var danhSachSP = new objsanPham;
  //kiểm tra kiểu dữ liệu của hàm vừa khai báo
  // console.log("kiểu dữ liệu của biến danhSachSP là:  ", typeof danhSachSP);
  let listSp = new ObjsanPham()

  let inputSP = document.querySelectorAll(".form-group input, .form-group textarea");
  // chạy vòng lặp for of với từ khóa là key cho các giá trị nhập vào
  for (let input of inputSP) {
    /* lấy ra id và value của từng thể input
    giống cách khai báo
    let id = key.id <=> key.tenSP
    let value = key.value
    */
    let { id, value } = input;
    //Đối tượng Obj danhSachSP[đối tượng trong obj] = giá trị nhập vào
    listSp[id] = value;

  }
  //kiểm tra nhập vào
  // console.log("kiểm tra nhập vào thành công là:  ", inputSP);
  // // đẩy dữ liệu và mảng Sản Phẩm => 1 mảng sản phẩm chứa nhiều sản phẩm
  // // arrSanPham.push(danhSachSP);
  // //kiểm tra mảng sản phẩm
  // console.log("mảng danh sách sản phẩm", arrSanPham);

  // Chạy chức năng xuất danh sách sản phẩm

  menu.addProducts(listSp)

  menu.luuStorage()

  menu.renderSP('tbody');

  // luuStorage(arrSanPham);
}
document.getElementById("addProducts").addEventListener('click', addProducts);

// Xóa Sản Phẩm
window.xoaSanPham = function (...abc) {
  menu.deletedSanPham(...abc);
  menu.luuStorage();
  menu.renderSP('tbody');
}


// Sửa Sản Phẩm
window.suaSanPham = function (a) {

  menu.suaSanPham(a);

}
// Cập nhật Sản Phẩm
let editProducts = () => {
  let inputSPnew = document.querySelectorAll(".form-group input, .form-group textarea");
  const sanPhamEdit = new ObjsanPham();

  for (let input of inputSPnew) {
    let { id, value } = input;
    sanPhamEdit[id] = value;
  }
  console.log('Sản Phẩm Cập Nhật là', sanPhamEdit)
  // Gán object mới cho mảng ArrSP
  menu.updateSanPham(sanPhamEdit.MaSP, sanPhamEdit)
  menu.luuStorage();
  menu.renderSP('tbody');
}
document.getElementById("editProducts").addEventListener('click', editProducts)


// Tìm kiếm Sản Phẩm

let timkiemSP = () => {
  // lấy dữ liệu người dùng nhập vào
  let keyword = document.getElementById("inputTK").value;

  menu.timkiemSP(keyword);
  menu.renderSP('tbody');


}
document.getElementById("inputTK").addEventListener('input', timkiemSP)