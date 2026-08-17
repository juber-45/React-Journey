import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1663045378782-d09d7b30f4fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8',
      intro: 'Prime customers who have access to bank credit and are satisfied with their current financial products and services.',
      tag: 'Satisfied',
      color: '#2563EB'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1686244744952-57dbec909773?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8',
      intro: 'Customers who have limited access to suitable financial products and need better solutions that match their needs.',
      tag: 'Underserved',
      color: '#10B981'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1690303193709-dedfee29c452?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
      intro: 'Established customers who have reliable access to banking services and are satisfied with the products they currently use.',
      tag: 'Satisfied',
      color: '#8B5CF6'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1782480922771-460efc3a5e10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
      intro: 'Customers who have some access to financial services but remain underserved by traditional banking products.',
      tag: 'Underbanked',
      color: '#F97316'
    },
  ]



  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App  