/* Utils */
// @ts-ignore
import DirectusSDK from '@directus/sdk-js'

/* Types */
export type Page = {
    title: string
}

export type Setting = {
    id: number
    name: string
    value: string
}

export type Gym = {
    id: number
    name: string
    address: string
    latitude: number
    longitude: number
}

const ApiURL = 'https://api.yamato.kim.davide.gdn/'

class ApiWrapper {
    private _client = new DirectusSDK({
        project: '_',
        url: ApiURL,
        storage: window.localStorage,
    })

    // @ts-ignore
    private getSettings = async (): Promise<Setting[]> => {
        let settings = await this._client.getItems('settings')
        return settings.data
    }

    public getGyms = async (): Promise<Gym[]> => {
        let gyms = await this._client.getItems('gyms')
        return gyms.data
    }

    public getSetting = async (name: string): Promise<Setting> => {
        let setting = await this._client.getItems('settings', {
            filter: { name: name },
        })
        return setting.data[0]
    }
}

export default new ApiWrapper()
