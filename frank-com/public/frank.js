// console.log('打劫')

/* CORS */
function cors(method, url) {
  const request = new XMLHttpRequest()
  request.open(method, url)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response)
    }
  }
  request.send()

}

cors('GET', 'http://qq.com:8888/friends.json')

/* JSONP */
function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = `frankJSONPCallName` + Math.random() // 0~1
    // 定义全局函数
    window[random] = (data) => {
      // console.log(data)
      // 拿到 data 成功状态 调用resolve 传入data
      resolve(data)
    }
    const script = document.createElement('script')
    script.src = `${url}?callback=${random}`
    document.body.appendChild(script)
    script.onload = () => {
      script.remove()
    }
    script.onerror = () => {
      reject()
    }
  })
}

jsonp('http://qq.com:8888/friends.js')
  .then((data) => {
    console.log(data)
  })