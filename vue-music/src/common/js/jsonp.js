import Jsonp from 'jsonp'

export default function jsonp(url,data,option){
    url+=(url.indexOf('?')<0?'?':'&')+param(data)

    return new Promise((resolve,reject) => {
        Jsonp(url,option,(err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}

function param(data){
    let url = ''
    for(var i in data){
        let value = data[i] !== undefined ?data[i] :''
        url += '&${i}=${encodeURLComponent(value)}'
    }
    return url ?url.substring(1):'1'
}