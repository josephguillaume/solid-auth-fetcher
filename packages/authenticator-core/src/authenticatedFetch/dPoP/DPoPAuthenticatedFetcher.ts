import IAuthenticatedFetcher from '../IAuthenticatedFetcher'
import IRequestInfo from '../IRequestInfo'
import IResponseInfo from '../IResponseInfo'
import IRequestCredentials from '../IRequestCredentials'

export default class DPoPAuthenticatedFetcher implements IAuthenticatedFetcher {
  async canHandle (
    requestCredentials: IRequestCredentials,
    requestInfo: IRequestInfo
  ): Promise<boolean> {
    return requestCredentials.type === 'dpop'
  }

  async handle (requestInfo: IRequestInfo): Promise<IResponseInfo> {
    return {}
  }
}
