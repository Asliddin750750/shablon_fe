export default function ({ $axios }) {
  // $axios.setHeader('Accept-language', localStorage.getItem('lang'))

  $axios.onRequest(config => {
    // console.log(config)
  })

  $axios.onResponse(response => {
    // let data = response;
    // data.code = response.data.status
    // data.success = data.data.status === 'success'
    // data.fail = data.data.status === 'fail'
    // data.error = data.data.status === 'error'
    // return data
  })
}
