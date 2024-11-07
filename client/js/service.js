const baseURL = "http://localhost:5132/"

export const getSomethingFromApi = async () =>{
    const response = await fetch(baseURL)
    const text = await response.text()
    return text
}

export const storeFileOnApi = async (fileAsString) => {

    const body = {
        "base64File": fileAsString,
    }

    await fetch (baseURL + "fileUpload", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
}