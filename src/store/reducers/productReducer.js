const initialState = {
  products: [
      {
        id: 1,
        title: 'Automatik Staubsauger',
        description: 'Staubsaugen ist sicher keine Beschäftigung, der die meisten gerne nachgehen. Wenn es schon Roboter gibt, die das Rasenmähen für einen übernehmen, warum dann nicht auch einen fürs Staubsaugen kaufen? Wir haben 37 Saugroboter ausführlich getestet.',
         price: '649.54',
         image:'https://www.faz.net/allesbeste/wp-content/uploads/2019/11/roboter_02-1244x830.jpg',
         amount: 5},
      {
        id: 2,
        title: 'Automatik Staubsauger',
        description: 'Staubsaugen ist sicher keine Beschäftigung, der die meisten gerne nachgehen. Wenn es schon Roboter gibt, die das Rasenmähen für einen übernehmen, warum dann nicht auch einen fürs Staubsaugen kaufen? Wir haben 37 Saugroboter ausführlich getestet.', 
        price: '339.97', 
        image: 'https://www.faz.net/allesbeste/wp-content/uploads/2019/11/roboter_02-1244x830.jpg', 
        amount: 3
      },
      {
        id: 3,
        title: 'Automatische Staubsauger',
        description: 'Staubsaugen ist sicher keine Beschäftigung, der die meisten gerne nachgehen. Wenn es schon Roboter gibt, die das Rasenmähen für einen übernehmen, warum dann nicht auch einen fürs Staubsaugen kaufen? Wir haben 37 Saugroboter ausführlich getestet.',
        price: '450.00',
        image: 'https://www.faz.net/allesbeste/wp-content/uploads/2019/11/roboter_02-1244x830.jpg',
         amount: 4},
      {
        id: 4,
        title: 'Automatische Staubsauger',
        description: 'Staubsaugen ist sicher keine Beschäftigung, der die meisten gerne nachgehen. Wenn es schon Roboter gibt, die das Rasenmähen für einen übernehmen, warum dann nicht auch einen fürs Staubsaugen kaufen? Wir haben 37 Saugroboter ausführlich getestet.',
         price: '104.99',
         image: 'https://www.faz.net/allesbeste/wp-content/uploads/2019/11/roboter_02-1244x830.jpg',
         amount: 2}
  ]
};

const productReducer = (state = initialState, action) => {

    return state;
};

export default productReducer;