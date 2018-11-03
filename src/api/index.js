let axios = require('axios')
const baseUrl = process.env.VUE_APP_BASEURL

function upload (url, data, success, failure) {
    let config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    axios.post(url, data, config).then((response) => {

        let status = response.status,
            result = response.data;
        if (status === 200 && result.status) {
            result.downloadUrl = baseUrl + "/vector/download/" + result.convertID;
            isFunc(success) && success(result)
        } else {
            isFunc(failure) && failure(result)
        }
    })
}

function isFunc (fun) {
    let type = typeof fun;
    return type == "function" ? true : false;
}

export default {
    convert (data, success, failure) {
        upload(baseUrl + "/vector/translate", data, success, failure);
    },

    merge (data, success, failure) {
        upload(baseUrl + "/vector/shpmerge", data, success, failure);
    },
    listEarthViews (data, success, failure) {
        axios.get(baseUrl + "/earthview/list/" + data.page + "/" + data.size).then((response) => {
            let status = response.status,
                result = response.data;
            if (status === 200) {
                isFunc(success) && success(result)
            } else {
                isFunc(failure) && failure(result)
            }
        })
    },
    randomEarthViews (data, success, failure) {
        axios.get(baseUrl + "/earthview/random/" + data.size).then((response) => {
            let status = response.status,
                result = response.data;
            if (status === 200) {
                isFunc(success) && success(result)
            } else {
                isFunc(failure) && failure(result)
            }
        })
    },
    downloadEarthview (id) {
        window.open(baseUrl + "/earthview/download/" + id, "_blank");

    }
}