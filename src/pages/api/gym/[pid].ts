import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { pid },
    } = req

    res.end(`Gym: ${pid}`)
}