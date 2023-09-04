# car-store-challenge

## TESTE
DESENVOLVA UMA API COM OS SEQUINTES REQUISITOS
	- EXPRESS
	- TYPESCRIPT
	- GRAPHQL
	- SEQUELIZE ( POSTGRES )
	- MONGOOSE ( MONGO )

- A organizaçao das pastas fica a seu criterio
- A api deve utilizar o express em um projeto 100% em typescript 
- A api precisa ter a parte Graphql no express ou apollo
	- express
		- express e express-graphql
	- apollo
		- express, @apollo/server e expressMiddleware


- Deve ser criado as seguintes models no SEQUELIZE (  as propriedades fica a seu critério )
	- Cars ( 1:1 ) - carro tem que ter o carTypeId (FK)
	- CarTypes ( 1:N )
	- Pieces
	- CarPieceAssociations ( N:N ) - tem que ter o carId e o pieceId para vincular varios carros a varias peças


- Criar o crud no POSTGRES
	- Cars
		- ao cadastrar/atualizar pode ser informado o array de id de peças para fazer o vinculo
		- ao listar os carro é preciso retornar também no graphql os peças de cada carro N:N
	- CarTypes
		- ao listar os tipos de carro é preciso retornar também no graphql os carros 1:N
	- Pieces
		- ao listar as peças é preciso retornar também no graphql os carros de cada peça N:N
			- ex: 
				query: {
					cars {
						id
						name
						type { //carTypeId da tabela cars vira o type
							id
							name
						}
						pieces { // tabela CarPieceAssociations N:N
							id
							name
						}
					}
				}
		- exemplos de N:N
		Car.belongsToMany(Piece, { as: 'carPieces', through: 'carPieceAssocations', foreignKey: 'carId', otherKey: 'pieceId' })
	- exemplos de 1:N
	CarType.hasMany(Car, { as: 'cars', foreignKey: 'carTypeId' })
	- exemplos de 1:1
		Car.belongsTo(CarType, {as: 'carType', foreignKey: 'carTypeId'})


- Deve ser criado as seguintes models no MONGOOSE ( as propriedades fica a seu critério )
	- car-maintenances

- Criar o crud no MONGOOSE da collection car-maintenances


- Deve conter uma migration gerada pelo CLI do sequelize orm para criaçao das tabelas
 		- para teste e apresentaçao
