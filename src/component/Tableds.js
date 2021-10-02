import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class Tableds extends Component {
    mappingDataUser = () =>
        this.props.dataUserProps.map((value, key) => (
            <TableDataRow
                changeEditUserForm={() => this.props.changeEditUserForm()}
                editFunClick={(abc) => this.props.edit(value)}
                userName={value.name}
                tel={value.tel}
                permission={value.Permission}
                stt={key}
            />
        ))

    render() {
        //console.log(this.props.dataUserProps);
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Stt</th>
                            <th>Họ Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <TableDataRow/> */}
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tableds;