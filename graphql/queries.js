import { gql } from '@apollo/client';

export const GET_ALL_PODCASTS = gql`
  query GetAllPodcasts($filter: ContentCardsFilter!) {
    contentCards(filter: $filter) {
      meta{
        total
      }
      edges {
        ... on Podcast { 
          name
          id
          length
          image {
            ...Image
          }
          categories {
            ...Category
          }
          experts {
            ...Expert
          }
        }
      }
    }
  }

  fragment Image on Image { 
    uri
    width
    height
  }

  fragment Category on Category { 
    name
  }

  fragment Expert on Expert { 
    firstName
    lastName
    company
  }
`;
