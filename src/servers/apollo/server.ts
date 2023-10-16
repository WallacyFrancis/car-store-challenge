import "reflect-metadata";
import path from "node:path"
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { CarTypeResolver } from "../../resolvers/carTypes.resolver";
import { CarResolver } from "../../resolvers/car.resolver";
import { PieceResolver } from "../../resolvers/piece.resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      CarTypeResolver,
      CarResolver,
      PieceResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, '../../schemas/schema.gql'),
    validate: false
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen()

  console.log(`Server running on ${url}`)
}

bootstrap()