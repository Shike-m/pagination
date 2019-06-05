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
        minWidth:350
    }
})
class Home extends Component {
    state = {
        start: 0,
        count: 20,
        total: 250,
        pagination: (res,callback) => {
            paginations.pagination(res, callback);
        },
        data:[]
    }
    request = {}
    getdata = (res) => {
        this.setState({
            data:res.subjects
        })
    }
    componentDidMount() {
        fetchApi.RestApi("/v2/movie/top250", "GET",this.request,this.getData);
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
                                <TableCell>Post Pic</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {

                            }
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default Home;