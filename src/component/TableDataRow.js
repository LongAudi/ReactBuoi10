import React, { Component } from 'react';

class TableDataRow extends Component {
    cacQuyen = () => {
        if (this.props.permission == 1) { return "Admin"; }
        else if (this.props.permission == 2) { return "Modrator"; }
        else { return "Normal User"; }
    }

    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserForm();
    }

    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.cacQuyen()}</td>
                <td>
                    <div className="btn-group">
                        <div onClick={() => this.editClick()} className="btn btn-warning"><i className="bx bxs-pencil" />Sửa</div>
                        <div className="btn btn-danger"><i className="bx bxs-x-circle" />Xóa</div>
                        <div className="btn btn-primary"><i className="bx bxs-x-circle" />Khóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;