import '../App.css';
import React, { Component } from 'react';
import Adduser from './Adduser';
import Header from './Header';
import Search from './Search';
import Tableds from './Tableds';
import dataUser from './Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienthiForm: false,
      data: dataUser,
      searchNd: ' ',
      editUserStatus: false
    }
  }

  doiTrangthai = () => {
    this.setState({ hienthiForm: !this.state.hienthiForm });
  }

  thongBao = () => {
    alert('ok rồi');
  }

  //xây dựng hàm liên kết giữa App.js và Search.js
  checkConnect = (dl) => {
    // alert('Đã kết nối');
    // console.log('Du lieu bo nhan duoc la: ' +dl);

    this.setState({ searchNd: dl });
    //console.log('dữ liệu nhận được và gán cho state: ' + this.state.searchNd);
  }

  //Xây dựng hàm để kết nối addUser
  getNewUser = (name, tel, Permission) => {
    // alert('ok nhé');
    var item = {};
    // console.log(name);
    // console.log(tel);
    // console.log(Permission);
    item.id = '';
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    //console.log(item);
    //khai báo 1 biến mới để lưu dữ liệu
    var newItem = this.state.data;
    newItem.push(item);
    console.log(newItem);
    this.setState({ data: newItem });
  }

  //Xây dựng hàm kết nối đến TableDataRow để lấy dữ liệu cần sửa
  editUser = (abc) => {
    //alert('đã kết nối');
    console.log(abc);
  }

  //Hàm thay đổi trạng thái để ẩn hiện form khi click vào nút
  changeEditUserForm = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  render() {
    //console.log(this.state.data);
    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchNd) !== -1) { ketqua.push(item) }
    })
    //console.log(ketqua);
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <Search
              changeEditUserForm={() => this.changeEditUserForm()}
              editUserStatus={this.state.editUserStatus}
              checkConnectProps={(dl) => this.checkConnect(dl)}
              ketNoi={() => this.doiTrangthai()} />
          </div>
          <div className="row">
            {/* <Tableds dataUserProps={this.state.data}/> */}
            {/* đọc dữ liệu tìm kiếm ra table */}
            <Tableds
              changeEditUserForm={() => this.changeEditUserForm()}
              edit={(abc) => { this.editUser(abc) }}
              dataUserProps={ketqua} />
            <Adduser add={(name, tel, Permission) => this.getNewUser(name, tel, Permission)} hienthiForm={this.state.hienthiForm} />
          </div>
        </div>
      </div>

    );
  }
}
export default App;
