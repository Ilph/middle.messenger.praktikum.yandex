import { queryString } from "../utils/queryStringify"

const enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}

interface IOptions {
  headers?: Record<string, string>,
  method: METHODS,
  body?: any,
  timeout?: number,
  credentials?: string
}

type OptionsWithoutMethod = Omit<IOptions, 'method'>

export class HTTP {
  static API_URL = "https://ya-praktikum.tech/api/v2"
  protected endpoint: string
  constructor(endpoint: string) {
    this.endpoint = `${HTTP.API_URL}${endpoint}`
  }

  public get = (halfurl: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
    const url = this.endpoint +halfurl
    return this._request(url, {...options, method: METHODS.GET}, options.timeout)
  }
  public post = (halfurl: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
    const url = this.endpoint +halfurl
    return this._request(url, {...options, method: METHODS.POST}, options.timeout)
  }
  public put = (halfurl: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
    const url = this.endpoint +halfurl
    return this._request(url, {...options, method: METHODS.PUT}, options.timeout)
  }
  public delete = (halfurl: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
    const url = this.endpoint +halfurl
    return this._request(url, {...options, method: METHODS.DELETE}, options.timeout)
  }

  private _request = (url: string, options: IOptions = {method: METHODS.GET}, timeout = 5000): Promise<XMLHttpRequest> => {
    const {headers = {}, method, body} = options

    return new Promise(function(resolve, reject) {
      if (!method) {
        reject("No method")
        return
      }

      const xhr = new XMLHttpRequest()
      const isGet = method === METHODS.GET

      xhr.open(
        method, 
        isGet && !!body
        ? `${url}${queryString(body)}`
        : url,
      )

      if(options.credentials && options.credentials == "include") {
        xhr.withCredentials = true
      }

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key])
      })
      xhr.responseType = 'json'

      xhr.onload = function() {
        resolve(xhr)
      }

      xhr.onabort = () => reject({reason: 'abort'})
      xhr.onerror = () => reject({reason: 'network error'})
      xhr.timeout = timeout
      xhr.ontimeout = () => reject({reason: 'timeout'})

      if (isGet || !body) {
        xhr.send()
      } else {
        xhr.send(JSON.stringify(body))
      }
    })
  }
}

// export function fetchWithRetry(url: string, options = {}, api: string){
//   const tries = 1
//   function onError(err: Error) {
//       const triesLeft = tries - 1
//       if (!triesLeft) {
//           throw err
//       }
//       return fetchWithRetry(url, {...options, tries: triesLeft}, api)
//   }

//   return new HTTP(api).catch(onError)
// }
