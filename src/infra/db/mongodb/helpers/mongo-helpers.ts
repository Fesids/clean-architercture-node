import { map } from 'lodash'
import {Collection, MongoClient} from 'mongodb'
import { disconnect } from 'process'


export const MongoHelper = {

    client:  null as any,
    uri: null as any,

    async connect(uri: string): Promise<void> {

        this.uri = uri
        this.client = await MongoClient.connect(uri, {

        })
    },

    async disconnect(): Promise<void> {
        await this.client.close()
        this.client = null
    },

    async getCollection (name: string): Promise<Collection> {
        return this.client.db().collection(name)
    },

    map: (collection: any): any => {
        const {_id, ...collectionWithoutId} = collection
        return Object.assign({}, collectionWithoutId, {id: _id})
    }

}