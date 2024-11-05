const baseURL = "http://localhost:5132/"

export const getSomethingFromApi = async () =>{
    const response = await fetch(baseURL)
    const text = await response.text()
    return text
}