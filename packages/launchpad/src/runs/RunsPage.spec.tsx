import { RunsPageFragmentDoc } from '../generated/graphql-test'
import RunsPage from './RunsPage.vue'

describe('<RunsPage />', () => {
  it('playground', () => {
    cy.mountFragment(RunsPageFragmentDoc, {
      render: (gql) => (
        <RunsPage gql={gql} />
      ),
    })
  })
})
