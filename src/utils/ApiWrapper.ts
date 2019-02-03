/* Utils */
// @ts-ignore
import DirectusSDK from '@directus/sdk-js'

/* Types */
export type Page = {
    title: string
}

const ApiURL = 'https://api.yamato.kim.davide.gdn/'

class ApiWrapper {
    private _client = new DirectusSDK({
        project: '_',
        url: ApiURL,
        storage: window.localStorage,
    })

    getAbout = async (): Promise<any> => {
        let items = await this._client.getItems('about')
        return items.data[0].content
    }
}

export default new ApiWrapper()
