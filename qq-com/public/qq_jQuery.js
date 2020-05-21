console.log('qq22.com')
const request2 = new XMLHttpRequest()
request2.open('GET', 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/lib/jquery-1-edb203c114.10.2.js')
request2.onreadystatechange = () => {
  if (request2.readyState === 4 && request2.status >= 200 && request2.status < 400) {
    console.log(request2.response)
  }
}
request2.send()