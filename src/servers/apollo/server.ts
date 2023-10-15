import "reflect-metadata";
import path from "node:path"
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { CarTypeResolver } from "../../resolvers/carTypes.resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      CarTypeResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, '../../schemas/schema.gql')
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen()

  console.log(`Server running on ${url}`)
}

bootstrap()