import "reflect-metadata";
import path from "node:path"
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { CarTypeResolver } from "../../resolvers/carTypes.resolver";
import { CarResolver } from "../../resolvers/car.resolver";
import { PieceResolver } from "../../resolvers/piece.resolver";
import { MaintenanceResolver } from "../../resolvers/maitenances.resolver";
import connectToDatabase from "../../mongo/model/ConnectionMDB";

async function main() {
  const schema = await buildSchema({
    resolvers: [
      CarTypeResolver,
      CarResolver,
      PieceResolver,
      MaintenanceResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, '../../schemas/schema.gql'),
    validate: false
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen()

  connectToDatabase()
    .then(() => {
      console.log(`Server running on ${url}`)
    })
    .catch(error => {
      console.log('Connection with database generated an error:\r\n');
      console.error(error);
      console.log('\r\nServer initialization cancelled');
    })
}

main()