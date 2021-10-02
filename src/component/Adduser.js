import React, { Component } from 'react';

class Adduser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthainut: true,
            id: '',
            name: '',
            tel: '',
            Permission: ''
        }
    }

    xulyTrangthai = () => {
        this.setState({
            trangthainut: !this.state.trangthainut
        });
    }

    hienNut = () => {
        if (this.state.trangthainut === true) {
            return <div className="btn btn-outline-info btn-block" onClick={() => this.xulyTrangthai()}>Thêm mới</div>
        }
        else {
            return <div className="btn btn-outline-secondary btn-block" onClick={() => this.xulyTrangthai()}>Đóng</div>
        }
    }

    hienForm = () => {
        if (this.state.trangthainut === false) {
            return (
                <div className="card border-primary mb-3">
                    <div className="card-header">Them thanh vien</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" name id placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name id placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                            <select className="form-control" name id>
                                <option selected>Choose...</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>User</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="btn btn-block btn-primary">Thêm</div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    //lấy thông tin từ bố để xử lý, hiện form
    kiemtraTrangthai = () => {
        if (this.props.hienthiForm === true) {
            return (
                <form>
                    <div className="card border-primary mb-3 col-12">
                        <div className="card-header">Them thanh vien</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input onChange={(event) => this.isChangeData(event)} type="text" className="form-control" name="name" id placeholder="Tên user" />
                            </div>
                            <div className="form-group">
                                <input onChange={(event) => this.isChangeData(event)} type="text" className="form-control" name="tel" id placeholder="Số điện thoại" />
                            </div>
                            <div className="form-group">
                                <select className="form-control" onChange={(event) => this.isChangeData(event)} name="Permission" id>
                                    <option selected>Choose...</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>User</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" onClick={(name, tel, Permission) => this.props.add(this.state.name, this.state.tel, this.state.Permission)} value="Thêm"></input>
                            </div>
                        </div>
                    </div>
                </form>
            )
        }
    }

    //Xây dựng hàm lấy dữ liệu ở các control
    isChangeData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]: value
        });
        var pt = {};
        pt.id = this.state.id;
        pt.name = this.state.name;
        pt.tel = this.state.tel;
        pt.Permission = this.state.Permission;
        //console.log(pt);
    }

    render() {
        //console.log(this.props.hienthiForm);
        //console.log(this.state);
        return (
            <div>
                {/* {this.hienNut()}
                {this.hienForm()} */}
                {this.kiemtraTrangthai()}
            </div>
        );
    }
}

export default Adduser;