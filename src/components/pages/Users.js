import React from 'react'

function Users() {
    return (
        <>
            <div className="middle-content">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h3 className="pb-4">Users List</h3>
                        <table class="table">
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">User Id</th>
                                    <th scope="col">Frist Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Krishna Prasad</td>
                                    <td>Katta</td>
                                    <td>Krishna@gmail.com</td>
                                    <td>8099177174</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Krishna Prasad</td>
                                    <td>Katta</td>
                                    <td>Krishna@gmail.com</td>
                                    <td>8099177174</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Krishna Prasad</td>
                                    <td>Katta</td>
                                    <td>Krishna@gmail.com</td>
                                    <td>8099177174</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users
