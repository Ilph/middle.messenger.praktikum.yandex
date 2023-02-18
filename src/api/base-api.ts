import { HTTP } from "../utils/Fetch"

export abstract class BaseAPI {
  protected http: HTTP

  protected constructor(api: string) {
    this.http = new HTTP(api)
  }

  public abstract create?(data: any): Promise<any>
  public abstract request?(data?: string | number): Promise<any>
  public abstract update?( data: unknown, identifier?: string | number): Promise<any>
  public abstract delete?(identifier: string | number): Promise<any> 
}
