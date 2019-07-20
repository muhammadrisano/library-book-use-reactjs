import React, { Component } from 'react'
import Header from '../Component/Header'
import ListLeft from '../Component/ListLeft'
import Api from '../axios/Api'
import swal from 'sweetalert';



class Register extends Component {
    constructor() {
        super()
        this.state = {
            card_number: "",
            name: "",
            phone: "",
            job: "",
            address: ""
        }
    }

    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    registerUser() {

    }


    render() {

        return (
            <div>
                <div>
                    <Header />
                    <div className="row head-loan">
                        <div className="col-3">
                            <ListLeft />
                        </div>
                        <div className="col-9 body-loan">
                            <div class="card">
                                <h5 class="card-header">Register Peminjam</h5>
                                <div class="card-body">
                                    <div className="form-group row">
                                        <label for="inputEmail3" class="col-sm-3 col-form-label">Nomor Identitas</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="card_number" name="card_number" value={this.state.card_number} placeholder="Nomor Identitas" />
                                        </div>

                                    </div>
                                    <div className="form-group row">
                                        <label for="inputEmail3" class="col-sm-3 col-form-label">Nama Peminjam</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="name" name="name" value={this.state.name} placeholder="Nama Peminjamm" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputEmail3" class="col-sm-3 col-form-label">Alamat Peminjam</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="address" name="address" value={this.state.address} placeholder="Alamat Peminjam" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputEmail3" class="col-sm-3 col-form-label">No HP</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="phone" name="phone" value={this.state.phone} placeholder="No HP" />
                                        </div>

                                    </div>
                                    <div className="form-group row">
                                        <label for="nama_buku" class="col-sm-3 col-form-label">Pekerjaan</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="job" name="job" value={this.state.job} placeholder="Pekerjaan" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-3"></div><div className="col-sm-8"><button type="submit" className="btn btn-primary" onClick={() => this.registerUser()}>Pinjam Buku</button> <button type="submit" className="btn btn-warning">Batal</button></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        )

    }


}

export default Register