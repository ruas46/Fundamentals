# GraphQL With Node.js + MongoDB

### Graphql Acessible in http://localhost:4000/
### query = get information
### mutation = change, create or delete information
### subscription = get information in real time (like socket.io)

## Query Example
query {
    users {
        id
        name
        email
    }
}

query {
    user(id:"ID_HERE") {
        name
        email
    }
}

## Mutation Example
mutation {
    createUser(name:"Guilherme", email:"guilhermeruas@hotmail.com") {
        id
    }
}