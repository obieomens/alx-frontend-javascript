
function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Success");
            } else {
                reject("Error");
            }
        }, 1000);
    });
}

export default getResponseFromAPI;

