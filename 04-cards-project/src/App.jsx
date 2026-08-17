import Card from './components/Card'


const App = () => {

const jobs = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    name: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Mumbai, India",
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    name: "Microsoft",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Bangalore, India",
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    name: "Apple",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India",
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    name: "Amazon",
    datePosted: "3 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Chennai, India",
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    name: "Meta",
    datePosted: "6 days ago",
    post: "UI Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$45/hr",
    location: "Pune, India",
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    name: "Netflix",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Remote",
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
    name: "Tesla",
    datePosted: "4 days ago",
    post: "JavaScript Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$45/hr",
    location: "Delhi, India",
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    name: "Adobe",
    datePosted: "2 weeks ago",
    post: "UX Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Mumbai, India",
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
    name: "Spotify",
    datePosted: "1 day ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Remote",
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=airbnb.com&sz=128",
    name: "Airbnb",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Goa, India",
  },
];

  return (
    <div className='parent'>
      {jobs.map(function (elem, idx) {

        return <div key={idx}>
          <Card company={elem.name} post={elem.post} date={elem.datePosted}
            tagOne={elem.tag1} tagTwo={elem.tag2} pay={elem.pay} loc={elem.location}
            logo={elem.brandLogo} />;
        </div>
      })}
    </div>
  )
}

export default App  