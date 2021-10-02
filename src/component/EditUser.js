import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="card text-white bg-secondary border-primary mb-3 mt-3" >
                    <div className="card-header text-center">Sửa thông tin user</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="tel" className="form-control" placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                            <select className="form-control" name="Permission">
                                <option>Choose...</option>
                                <option value={1}>Admin</option>
                                <option value={2}>User</option>
                                <option value={3}>Modrater</option>
                            </select>
                        </div>
                        <div className="form-group">
                            {/* <div className="btn btn-block btn-primary" onClick={(name, tel, Permission) =>this.props.add(this.state.name, this.state.tel, this.state.Permission)}>Thêm</div> */}

                            <input onClick={() =>this.props.changeEditUserForm()} type="reset" className="btn btn-block btn-primary" value="Cập nhật" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;