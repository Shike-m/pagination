import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import { TableBody } from '@material-ui/core';
import paginations from './util/paginations';
import fetchApi from './util/fetchApi';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            count: 10,
            total: 250,
            pagination: (res, callback) => {
                paginations.pagination(res, callback);
            },
            data: [],
            isGoTop: false
        };
        this.getData = this.getData.bind(this);
    }

    request = {}
    getData(data) {

        if (data.length > 0) {
            // console.log("===============", data)
            this.setState({
                data
            })
        }
    }
    componentDidMount() {
        fetchApi.RestApi("/v2/movie/top250", "GET", this.request, this.getData);
        window.addEventListener('scroll', this.ChangeGoTopStatus);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.ChangeGoTopStatus);
    }
    ChangeGoTopStatus = () => {
        console.log(document.documentElement.scrollTop)
        let HL = document.documentElement.scrollTop;
        if (HL > 400) {
            this.setState({
                isGoTop: true
            })
        } else {
            this.setState({
                isGoTop: false
            })
        }
    }

    handlePic = (url) => {
        const newWin = window.open('about blank');
        newWin.location.href = url;
    }
    handleGoTop = () => {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Paper >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '150px' }} >Movie Name</TableCell>
                                <TableCell style={{ width: '80px' }}>Issued Year</TableCell>
                                <TableCell style={{ width: '80px' }}>Aver Rating</TableCell>
                                <TableCell style={{ width: '200px' }}>casts</TableCell>
                                <TableCell style={{ width: '100px' }}>Post Pic</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                this.state.data.map(item =>
                                    (<TableRow key={item.id}>
                                        <TableCell style={{ width: '150px' }}>{item.original_title}</TableCell>
                                        <TableCell style={{ width: '80px' }}>{item.year}</TableCell>
                                        <TableCell style={{ width: '80px' }}>{item.rating.average}</TableCell>
                                        <TableCell style={{ width: '200px' }}>
                                            {
                                                <p>
                                                    {
                                                        item.casts.map(cast =>
                                                            cast.name_en
                                                        ).join(',')
                                                    }
                                                </p>
                                            }
                                        </TableCell>
                                        <TableCell style={{ width: '100px' }}>{
                                            <img style={{ width: '30px', height: '20px' }}
                                                src={item.images.medium}
                                                alt={item.alt}
                                                onClick={e => this.handlePic(item.images.medium)}
                                            />}
                                        </TableCell>
                                    </TableRow>)
                                )
                            }
                        </TableBody>
                    </Table>
                </Paper>
                {
                    this.state.isGoTop &&
                    <span style={{ border: '1px solid red', width: '50px', height: '20px', position: 'fixed', right: '30px', bottom: '20px' }}
                        onClick={this.handleGoTop}
                    >GoTop</span>
                }

            </div>
        )
    }
}

export default Home;