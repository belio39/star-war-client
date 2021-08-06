import { gql } from "@apollo/client";

export const GET_ALL_PEOPLE = gql`
  query AllPeopleQuery($page: Int!) {
    getAllPeople(page: $page) {
      people {
        name
        height
        mass
        gender
        homeworld
      }
      count
    }
  }
`;
export const GET_PEOPLE_BYNAME = gql`
  query People($name: String!) {
    getPeopleByName(name: $name) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

export const GET_HOMEWORLD = gql`
  query HomeWorld($homeWorldUrl: String!) {
    getHomeWorld(homeWorldUrl: $homeWorldUrl) {
      name
      rotation_period
      orbital_period
      diameter
      climate
      gravity
      terrain
      surface_water
      population
      residents
      films
    }
  }
`;
