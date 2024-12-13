import React from 'react'

const books = [
  {
    bookName: "Physics",
    sem: 1,
    group: "Natural Sciences",
  },
  {
    bookName: "Chemistry",
    sem: 2,
    group: "Natural Sciences",
  },
  {
    bookName: "Mathematics",
    sem: 1,
    group: "Natural Sciences",
  },
  {
    bookName: "History",
    sem: 1,
    group: "Social Sciences",
  },
  {
    bookName: "Literature",
    sem: 2,
    group: "Arts and Humanities",
  },
];


const groupWiseBooks = {};

books.forEach(book => {

  if (!groupWiseBooks[book.group]) {
    groupWiseBooks[book.group] = [];
  }
  
  groupWiseBooks[book.group].push(book);
});

console.log(groupWiseBooks);
// groupWiseBoooks = {
  //   "Natural Sciences": [
  //     {
  //       bookName: "Physics",
  //       sem: 1,
  //       group: "Natural Sciences",
  //     },
  //     {
  //       bookName: "Chemistry",
  //       sem: 2,
  //       group: "Natural Sciences",
  //     },
  //     {
  //       bookName: "Mathematics",
  //       sem: 1,
  //       group: "Natural Sciences",
  //     },
  //   ],
  //   "Social Sciences" : [
  //     {
  //       bookName: "History",
  //       sem: 1,
  //       group: "Social Sciences",
  //     },
  //   ]
  // }





const ATMSearch = () => {

  return (
    <div>
        <div className="max-w-md mx-auto mt-5 ">
    <div className="relative">
      <input type="text" className="block w-full border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none" placeholder="Search..."/>
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
     
        <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.3 12.7c1.5-2.4 1.3-5.5-.5-7.6C12.7 3.3 11.4 3 10 3s-2.7.4-3.8 1.1c-1.9 1.1-3 3-3.1 5 .1 3.7 3.1 6.7 6.8 6.8 2 0 3.9-.9 5.1-2.5l5.2 5.2c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-5.3-5.3zm-4.3.3c1.4 0 2.7-1.1 2.7-2.7 0-1.4-1.1-2.7-2.7-2.7S7.3 8.3 7.3 9.8s1.1 2.7 2.7 2.7z"/></svg>
      </button>
    </div>
  </div>

    </div>
  )
}

export default ATMSearch
