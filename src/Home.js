import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/styles';
import { TableBody } from '@material-ui/core';
import paginations from './util/paginations';
import fetchApi from './util/fetchApi';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: "30px",
        overflowX: 'auto',
    },
    table: {
        minWidth: 350
    }
})
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            count: 20,
            total: 250,
            pagination: (res, callback) => {
                paginations.pagination(res, callback);
            },
            data: []
        };
        this.getData = this.getData.bind(this);
    }

    request = {}
    getData(data){

    if (data.length > 0) {
        console.log("===============", data)
        this.setState({
            data
        })
    }
}
componentDidMount() {
    fetchApi.RestApi("/v2/movie/top250", "GET", this.request, this.getData);
}

render() {
    return (
        <div>
            <Paper className={useStyles.root}>
                Hello
                    <Table className={useStyles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Movie Name</TableCell>
                            <TableCell>Issued Year</TableCell>
                            <TableCell>Average Rating</TableCell>
                            <TableCell>casts</TableCell>
                            <TableCell>Post Pic</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {console.log("===================", this.state.data)}
                        {
                            this.state.data.map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.original_title}</TableCell>
                                    <TableCell>{item.year}</TableCell>
                                    <TableCell>{item.rating.average}</TableCell>
                                    <TableCell>{item.casts.map(cast =>
                                        <p>{cast.name_en}</p>
                                    ).join(",")}</TableCell>
                                    <TableCell>{item.images.small}</TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}
}

export default Home;