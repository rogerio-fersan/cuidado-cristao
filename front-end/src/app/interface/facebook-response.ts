
export interface FacebookResponse {
    status: string,
    authResponse: {
        accessToken: string,
        expiresIn: string,
        signedRequest: string,
        userID: string
    }
}
