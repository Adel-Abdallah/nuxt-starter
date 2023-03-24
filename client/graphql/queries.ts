import { gql } from 'graphql-tag'

export const GET_LAUNCHES = gql`
    query GetLaunches {
        launches {
            id
            mission_name
            launch_date_local
            launch_site {
                site_name_long
            }
            rocket {
                rocket_name
            }
            details
        }
    }
`

export const GET_ROCKETS = gql`
    query GetRockets {
        rockets {
            id
            name
            description
        }
    }
`

export const GET_ROCKET_DETAILS = gql`
    query GetRocketDetails($rocketId: ID!) {
        rocket(id: $rocketId) {
            id
            name
            description
            first_flight
            height {
                feet
                meters
            }
            diameter {
                feet
                meters
            }
            mass {
                kg
                lb
            }
            stages
        }
    }
`
