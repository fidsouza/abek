import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  async connect (connectUrl: string): Promise<void> {
    this.client = await MongoClient.connect(connectUrl)
  },

  async disconnect (): Promise<void> {
    this.client.close()
  }
}
