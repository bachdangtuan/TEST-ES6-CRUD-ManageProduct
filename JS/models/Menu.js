// Khai báo Đối tượng trong Sản Phẩm
export class Menu {

    arrSP = [];
    // thêm Sản Phẩm
    addProducts = (prd) => {

        this.arrSP.push(prd)

    }

    // Xuất màn Hình
    renderSP = function (selector) {

        var html = "";
        // for (let i = 0; i < this.arrSP.length; i++) {
        //     let test = this.arrSP[i];
        //     var html = `
        //          <tr>
        //   <td>${test.MaSP} </td>
        //   <td>${test.TenSP} </td>
        //   <td>${test.GiaSP} </td>
        //   <td>${test.HinhSP} </td>
        //   <td>${test.MoTa} </td>
        //   <td><button id="xoa"><i class="fa-solid fa-trash"></i></button>

        //               <button id ="editSanPham"><i class="fa-solid fa-screwdriver-wrench"></i></button></td>
        //            </tr>`
        //         Sum += html;
        // }

        this.arrSP.map(function (ma, i) {
            html += `
                      <tr>
                      <td>${ma.MaSP} </td>
                      <td>${ma.TenSP} </td>
                      <td>${ma.GiaSP} </td>
                      <td>${ma.HinhSP} </td>
                      <td>${ma.MoTa} </td>
                      <td><button id="xoa" class="btn btn-danger" onclick="xoaSanPham('${ma.MaSP}')">Xóa</button>
                      <button id="sua" class="btn btn-primary" onclick="suaSanPham('${ma.MaSP}')"data-toggle="modal" data-target="#myModal" >Sửa</button>
                      </td>
                   </tr>`
        })
        document.querySelector(selector).innerHTML = html;
    }
    //Lưu local
    luuStorage = function () {
        localStorage.setItem(`arrSanPham`, JSON.stringify(this.arrSP));
    }
    //Lấy local
    layStorage = function () {
        if (localStorage.getItem('arrSanPham')) {
            this.arrSP = JSON.parse(localStorage.getItem("arrSanPham"));
        }
    }
    // Xóa Sản Phẩm
    deletedSanPham = function (msSP) {
        // check index có vị trí bằng với giá trị nhập vào của Mã Sản phẩm
        let index = this.arrSP.findIndex(function (sp) {
            return sp.MaSP === msSP;
        })
        console.log('ma sp', msSP);
        console.log('arr', this.arrSP);
        console.log(index)
        this.arrSP.splice(index, 1);
    }

    // Lấy dữ liệu trả về ô input
    suaSanPham = function (msSP) {
        let index2 = this.arrSP.findIndex(function (sp) {
            return sp.MaSP === msSP;
        })
        let tradulieu = this.arrSP[index2]
        console.log("Sản Phẩm Cần Edit", tradulieu);
        // trả về input
        let outputSP = document.querySelectorAll(".form-group input, .form-group textarea");
        for (const output of outputSP) {
            let { id } = output;
            output.value = tradulieu[id];
        }
    }

    //
    layThongTinSP = function (id) {
        return this.arrSP.find(monAn => monAn.MaSP === id);
    }
    // Cập nhật sản phẩm
    updateSanPham = function (id, sanPhamUpdate) {
        let spCapNhat = this.layThongTinSP(id)
        console.log("log Sản phẩm CN",spCapNhat);
        if (spCapNhat) {
            for (let key in spCapNhat) {
                spCapNhat[key] = sanPhamUpdate[key];
                //Đưa thông tin người dùng thay đổi gán vào object trong mảng
                // monAnUpdate.tenMon = monAnCapNhat.tenMon;
            }
        }
    }

    constructor() {

    }
};
