/**
 * AuthenticatedFetchers are responsible for making requests based on provided credentials
 *
 * @IRequestCredentials A set of credentials that should be embedded in the request
 * @URL The URL of the request
 * @RequestInit The fetch init params to define the request
 */
import { RequestInit, Response } from "node-fetch";
import IHandleable from "../util/handlerPattern/IHandleable";
import IRequestCredentials from "./IRequestCredentials";
import URL from "url-parse";

type IAuthenticatedFetcher = IHandleable<
  [IRequestCredentials, URL, RequestInit?],
  Response
>;
export default IAuthenticatedFetcher;