import React from 'react'
import Card from './components/Card'
const jobs = [
  {
    company: "Amazon",
    position: "Software Engineer",
    image:
      "https://imgs.search.brave.com/Arw_-VusWSlLFSDoyOCqIwDqP0UNNygniVSmVgCpHFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4uaWNvbnNjb3V0LmNvbS9pY29uL2ZyZWUvcG5nLTI1Ni9mcmVlLWFtYXpvbi1pY29uLXN2Zy1kb3dubG9hZC1wbmctMTkxMjA1OC5wbmc_Zj13ZWJwJnc9MTI4",
    link: "https://www.amazon.jobs",
    days: "30 Days Ago",
    location: "Seattle",
    salary: "$120,000",
  },
  {
    company: "Mango",
    position: "Product Manager",
    image:
      "https://imgs.search.brave.com/tgxVztQ2qbpmD652vMNCrpBNUZD7Uw1nsBlgvKEhzxk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0aWMudmVjdGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvdGh1bWJuYWlscy8wNjAvMzg1LzgwNC9zbWFsL2dvb2dsZS1sb2dvLWljb24tb24td2hpdGUtc2hhcGUtZmxhdC1mcmVlLXBuZy5wbmc",
    link: "https://careers.google.com",
    days: "18 Days Ago",
    location: "Mountain View",
    salary: "$120,000",
  },
  {
    company: "Facebook",
    position: "Data Scientist",
    image:
      "https://imgs.search.brave.com/WmqtDDRvFzO3bpfyGlkaRPJpyBvHJ8SAklDez4oIZ_o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cuZnJlZXBuZ2xvZ29zLmNvbS91cGxvYWRzL21pY3Jvc29mdC13aW5kb3dzLWxvZ28taW1hZ2VzLTE5LnBuZw",
    link: "https://www.metacareers.com",
    days: "20 Days Ago",
    location: "Menlo Park",
    salary: "$120,000",
  },
  {
    company: "Apple",
    position: "UX Designer",
    image:
      "https://imgs.search.brave.com/Arw_-VusWSlLFSDoyOCqIwDqP0UNNygniVSmVgCpHFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4uaWNvbnNjb3V0LmNvbS9pY29uL2ZyZWUvcG5nLTI1Ni9mcmVlLWFtYXpvbi1pY29uLXN2Zy1kb3dubG9hZC1wbmctMTkxMjA1OC5wbmc_Zj13ZWJwJnc9MTI4",
    link: "https://jobs.apple.com",
    days: "3 Days Ago",
    location: "Cupertino",
    salary: "$120,000",
  },
];

const App = () => {
  return (
    <>
    <div className='card-container'>
     {jobs.map(function(job){
      return <Card img={job.image} days={job.days} role={job.position} company={job.company} location={job.location} Salary={job.salary} />
     })}
    </div>
    </>
  )
}

export default App
