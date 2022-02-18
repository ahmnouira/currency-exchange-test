import { render, fireEvent, screen, waitFor, act, RenderResult } from '@testing-library/react'
import { AppProvider, initialState } from '../contexts/AppContexts'
import { Wallet } from './Wallet'
import ReactDOM from 'react-dom'

const url = `${process.env.REACT_APP_API_URL_CURRCONV}/convert?q=USD_EUR&compact=ultra&apiKey=${process.env.REACT_APP_API_KEY_CURRCONV}`

/*
const server = setupServer(
  // capture "GET /url" requests
  rest.get(url, (req, res, ctx) => {
    return res(ctx.json({ USD_EUR: 0.83 }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
*/

describe('Wallet', () => {
  it('should render Wallet Correctly', async () => {
    let c: RenderResult


    /*
    it('should render Wallet with rate loaded Correctly', async () => {
      const { container, findByText, getByRole } = render(
        <AppProvider
          appState={{
            ...initialState,
            rate: 1.3,
          }}
        >
          <Wallet />
        </AppProvider>
      )
      expect(container).toBeInTheDocument()
      const exhangeBtn = await findByText('Exchange') as HTMLButtonElement
      fireEvent.click(exhangeBtn)
    })
    */
  })
