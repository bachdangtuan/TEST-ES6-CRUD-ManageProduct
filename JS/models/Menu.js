// Khai báo Đối tượng trong Sản Phẩm
export class Menu {

    arrSP = [];
    // thêm Sản Phẩm
    addProducts = (prd) => {

        this.arrSP.push(prd)

    }
    // Get API
    getAPI = () => {
        axios({
            url: 'https://621e368a849220b1fc93323b.mockapi.io/DATA'
        }).then(result => {
            //this.arrSP.push([...result.data])
            if (result?.data) {
                result.data.forEach(element => {
                    this.arrSP.push({ ...element })
                });
                // console.log(result.data);
                // console.log('array length:', this.arrSP.length);
                this.renderSP('tbody')
            }
        })
    }
    // Push API

    pushAPI = (prod) => {
        axios({
            url: 'https://621e368a849220b1fc93323b.mockapi.io/DATA',
            method: 'POST',
            data: prod
        }).then(() => { })
    }
    // Deleted API

    // delAPI = (hihiu) =>{
    //     axios({
    //         url: 'https://621e368a849220b1fc93323b.mockapi.io/DATA',
    //         method: "DELETE",

    //     }).then(result => {
    //         console.log('Result',result.data);

    //      })
    // }
    // Xuất màn Hình
    renderSP = function (selector, prdList, getSP) {

        var html = "";
        const arrRender = prdList || this.arrSP || getSP

        arrRender.map(function (ma, i) {
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
    // luuStorage = function () {
    //     localStorage.setItem(`arrSanPham`, JSON.stringify(this.arrSP));
    // }
    // //Lấy local
    // layStorage = function () {
    //     if (localStorage.getItem('arrSanPham')) {
    //         this.arrSP = JSON.parse(localStorage.getItem("arrSanPham"));
    //     }
    // }
    // Xóa Sản Phẩm
    deletedSanPham = function (msSP) {
        // Call API
        // check index có vị trí bằng với giá trị nhập vào của Mã Sản phẩm
        let index = this.arrSP.findIndex(function (sp) {
            return sp.MaSP === msSP;
        })
        axios({
            url: `https://621e368a849220b1fc93323b.mockapi.io/DATA/${msSP} `,
            method: "DELETE",

        }).then(result => {
            console.log('Result', result.data);
        })
        // console.log('ma sp', msSP);
        // console.log('arr', this.arrSP);
        // console.log(index)
        this.arrSP.splice(index, 1);
        // this.delAPI()

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
        return this.arrSP.find(sp => sp.MaSP === id);
    }
    // Cập nhật sản phẩm
    updateSanPham = function (id, sanPhamUpdate) {
        let spCapNhat = this.layThongTinSP(id)
        console.log("log Sản phẩm CN", spCapNhat);
        if (spCapNhat) {
            for (let key in spCapNhat) {
                spCapNhat[key] = sanPhamUpdate[key];
            }
            //PUT API cap nhat
            axios({
                url: `https://621e368a849220b1fc93323b.mockapi.io/DATA/${id}`,
                method: 'PUT',
                data: spCapNhat
            }).then(() => { })
        }
    }
    // Tìm Sản Phẩm

    timkiemSP = function (tenSP) {

        let arrSpTimKiem = this.arrSP.filter(function (sp) {
            return sp.TenSP.includes(tenSP);
        })

        // console.log("đây là",arrSpTimKiem);
        return arrSpTimKiem
    }

    constructor() {

    }
};
