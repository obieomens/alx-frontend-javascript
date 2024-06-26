export default function getFullResponseFromAPI(a) {
    return new Promise((resolve, reject)=> {
        if (a == true){
            resolve({
                status: 200,
                body: 'Success',
            })
        }else if (a == false){
            reject(Error('The fake API is not working currently'));
        }
    })
}
