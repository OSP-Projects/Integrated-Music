import { FastifyRequest, FastifyReply } from "fastify";
import InternalError from "@errors/InternalError";

const errorsHandler = async(
    error: Error,
    request: FastifyRequest,
    reply: FastifyReply
): Promise<FastifyReply> => {
    if(error instanceof InternalError) {
        return reply.status(error.statusCode).send({ message: error.message })
    };

    request.log.error(error.stack || error);
    return reply.status(500).send({ message: `${error.message}`})
}

export default errorsHandler;