import { Menu } from "../models/Menu.js";
import { ObjsanPham } from "../models/sanPham.js"



let menu = new Menu()

// menu.layStorage();
//Get API xuất màn hình
menu.getAPI(); 

// Lấy thông tin SP

let addProducts = () => {

  let listSp = new ObjsanPham()

  let inputSP = document.querySelectorAll(".form-group input, .form-group textarea");
  // chạy vòng lặp for of với từ khóa là key cho các giá trị nhập vào
  for (let input of inputSP) {

    let { id, value } = input;

    listSp[id] = value;

  }


  menu.addProducts(listSp)
  menu.pushAPI(listSp);
  // menu.luuStorage()
  menu.renderSP('tbody')
  // menu.renderSP('tbody');

  // luuStorage(arrSanPham);
}
document.getElementById("addProducts").addEventListener('click', addProducts);

// Xóa Sản Phẩm
window.xoaSanPham = function (...abc) {
  menu.deletedSanPham(...abc);
  // menu.luuStorage();
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
  // menu.luuStorage();
  menu.renderSP('tbody');
}
document.getElementById("editProducts").addEventListener('click', editProducts)


// Tìm kiếm Sản Phẩm

let timkiemSP = () => {
  // lấy dữ liệu người dùng nhập vào
  let keyword = document.getElementById("inputTK").value;

  //  menu.timkiemSP(keyword);

  const arrTimKiem = menu.timkiemSP(keyword);

  console.log(arrTimKiem);

  menu.renderSP('tbody', arrTimKiem);
}
document.getElementById("inputTK").addEventListener('input', timkiemSP)


