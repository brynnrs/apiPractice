const baseURL = "https://apipractice-3seu7s65.b4a.run/"

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

export const getBase64FileFromApi = async () => {
    const url = baseURL + "file"
    const response = await fetch(url)
    return await response.text()
}
