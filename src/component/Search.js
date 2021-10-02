import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThainut:true,
            nd: ' '
        }
    }

    doiTrangthainut=() =>{
        this.setState({trangThainut: !this.state.trangThainut
        });
    }

    hienNut = () => {
        if (this.state.trangThainut === true) {
            return <div className="btn btn-outline-info btn-block button" onClick={() => {
                this.doiTrangthainut();
                this.props.ketNoi()}}>Thêm mới</div>
        }
        else {
            return <div className="btn btn-outline-secondary btn-block button" onClick={() => {
                this.doiTrangthainut();
                this.props.ketNoi()}}>Đóng</div>
        }
    }

    //Xây dựng hàm lấy nội dung giá trị ở control input
    isChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            nd: event.target.value
        });
        this.props.checkConnectProps(this.state.nd)
    }

    //Hàm xác định trạng thái để hiện hoặc ẩn form sửa dữ liệu
    isShowEdit=() =>{
        if(this.props.editUserStatus===true){
            return <EditUser/>
        }
    }
    //Hàm xác định trạng thái để thể hiện hoặc ẩn form sửa dữ liệu
    isShowEdit=() =>{
        if(this.props.editUserStatus===true){
            return <EditUser changeEditUserForm={() =>this.props.changeEditUserForm()}/>
        }
    }

    render() {
        return (
            <div className="col-12">
                <div className="row">
                    <div className="col-9">
                        <div className="searchForm">
                            <div className="form-group">
                                {/* <label for=""></label> */}
                                <div className="btn-group">
                                    <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập từ khóa" style={{ width: '500px' }} />
                                    <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.nd)}>Tìm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="btn-group">
                            {this.hienNut()}
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    {this.isShowEdit()}
                </div>
            </div>
        );
    }
}

export default Search;