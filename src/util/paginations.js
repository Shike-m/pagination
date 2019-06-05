
export default {
    pagination(data, callback) {
        let page = {
            onChangePage: (page) => {
                callback(page)
            },
            count: 250,    //The total number
            rowPerPage: data.count,
            page: (data.start / data.Count),

        }
        return page;
    }
}
