import { gql } from 'graphql-mini';

export const GET_SCHEDULES = gql`
  query {
    schedules {
      id
      title
      description
      date
    }
  }
`;

export const CREATE_SCHEDULE = gql`
  mutation CreateSchedule($title: String!, $description: String, $date: String!) {
    createSchedule(title: $title, description: $description, date: $date) {
      id
      title
      description
      date
    }
  }
`;

export const DELETE_SCHEDULE = gql`
  mutation DeleteSchedule($id: ID!) {
    deleteSchedule(id: $id) {
      message
    }
  }
`;
