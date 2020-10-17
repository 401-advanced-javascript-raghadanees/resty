import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import App from '../App'
import Results from '../component/results/results';

let person = {

    'name': 'Luke',
    'height': '172',
  }
  
  const header = 'application/json';
  
  
  test('should render results count', () => {
    render (<Results count={82} headers={header} results={person} />);
    const count = screen.getByTestId('count');
    expect(count).toHaveTextContent('Count: 82');
  })
  
  
  test('should render results', () => {
    render (<Results count={82} headers={header} results={person} />);
    const results = screen.getByTestId('results');
    expect(results).toHaveTextContent('Luke');
    expect(results).toHaveTextContent('height');
  })

// const server = setupServer(
//     rest.get('*', (req, res, ctx) => {
//         console.log('res,,,,,',res)
//       return res(ctx.json({
//         results: [
//           { name: 'Raghad' },
//         ]
//       }))
//     })
//   )
  
//   beforeAll(() => server.listen())
//   afterEach(() => server.resetHandlers())
//   afterAll(() => server.close())
  
//   test('loads and displays names', async () => {
//     render(<App />);
  
//     // Option 1:
//     // Using a jest spy
//     // await waitFor(() => expect(simulatePokemon).toHaveBeenCalledTimes(1))
//     // let items = screen.getAllByRole('listitem')
  
//     // Option 2:
//     // Awaiting the output to change after the API call was made
//     let items = await waitFor(() => screen.getAllByRole('listitem'))
  
//     // The actual assertion is the same for both options
//     expect(items[0]).toHaveTextContent('Raghad')
//   })