import { gql } from "apollo-angular";

export const GET_Fruits = gql ` query{
    query{
        allFruits{
          id
          name
          cantidad
          precio
        }
      }
}` 
