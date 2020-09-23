const googleDatabase=[
    'cats.com',
    'mycats.com',
    'yourcats.com',
    'souprecipies.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavoiritecats.com'
];


const googleSearch=(searchInput,db)=>{
const matches=db.filter((website)=>{
    return website.includes(searchInput);
})
return matches.length > 3 ? matches.slice(0,3):matches;
}

// console.log(googleSearch('cat',googleDatabase))

module.exports=googleSearch;