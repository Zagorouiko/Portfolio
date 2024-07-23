import { create } from 'ipfs-http-client'

export default async function createIPFSClient() {
    const auth = `Basic ${import.meta.env.VITE_PUBLIC_IPFS_BEARER_TOKEN}`

    const Client = create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
            authorization: auth,
        },
    })
        return Client
}
