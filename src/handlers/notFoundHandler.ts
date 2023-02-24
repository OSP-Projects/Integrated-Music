import { FastifyRequest, FastifyReply } from "fastify";

const notFoundHandler = async(req: FastifyRequest, res: FastifyReply) => {
    await res.status(404).send({ statusCode: 404, message: 'I think what you are looking for is not here :)', path: req.raw.url, method: req.raw.method })
}

export default notFoundHandler;