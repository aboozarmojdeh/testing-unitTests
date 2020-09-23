const { TestScheduler } = require('jest')
const googleSearch=require('./script')

dbMock=[
    'dog.com',
    'cheesepuffdog.com',
    'disney.com',
    'dogpictures.com'
]
// test('This is a test',()=>{
//     expect('hello').not.toBe('helloo');
// })

// test('object assignment', () => {
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2});
//   });

//   test('adding positive numbers is not zero', () => {
//     for (let a = 1; a < 10; a++) {
//       for (let b = 1; b < 10; b++) {
//         expect(a + b).not.toBe(0);
//       }
//     }
//   });

describe('Google Search',()=>{
    test('Google Search Function',()=>{
        expect(googleSearch('testtest',dbMock)).toEqual([]);
        expect(googleSearch('dog',dbMock)).toEqual(['dog.com','cheesepuffdog.com','dogpictures.com']);
    
    })
    
    test('Google Search Function with null and undefined',()=>{
        expect(googleSearch(undefined,dbMock)).toEqual([]);
        expect(googleSearch(null,dbMock)).toEqual([]);
    
    })
    
    test('Google Search Function does not return more than 3',()=>{
        expect(googleSearch('d',dbMock).length).toEqual(3);
        
    
    })
})


