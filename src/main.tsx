// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



// ------------------- 1. --------------------- 
// function multiplyValues(obj: Record<string, number>, n: number): Record<string, number> {
// 	const result: Record<string, number> = {};
// 	for (const key in obj) {
// 		if (obj.hasOwnProperty(key)) {
// 			result[key] = obj[key] * n;
// 		}
// 	}
// 	return result;
// }
// const n = 3;
// const obj = { a: 2, b: 3, c: 4 };
// const res = multiplyValues(obj, n);
// console.log(res); 


// ------------------- 2. --------------------- 
// function findA(input: string): number {
// 	const words = input.split(" ")
// 	const count = words.filter(word => word.includes("a")).length
// 	return count;
// }
// const example = "bugun bizda 1-dars va birinchi darsda typescript dan foydalandik.";
// const result = findA(example);
// console.log(`a harfi ishtirok etgan sozlar soni: ${result}`);


// ------------------- 3. --------------------- 
// const books = [
// 	{
// 		title: "Halqa",
// 		author: "Akrom Malik",
// 		read: false
// 	}, {
// 		title: "Dunyoning ishlari",
// 		author: "O’tkir Hoshimov",
// 		read: true
// 	}, {
// 		title: "Iymon",
// 		author: "Shayx Muhammad Sodiq Muhammad Yusuf",
// 		read: true
// 	},
// ]
// function checkBooks(booksArray: { title: string, author: string, read: boolean }[]) {
// 	booksArray.forEach(book => {
// 		const status = book.read ? "oqilgan" : "oqilmagan";
// 		console.log(`${book.author} ning ${book.title} kitobi ${ status }`);
// 	});
// }
// checkBooks(books);


// ------------------- 6. ---------------------
// interface IPerson {
// 	name: string,
// 	age: number
// }
// function ageDifference(people: IPerson[]): number {
// 	if (people.length === 0) return 0
// 	const sortedPeople = people.sort((a, b) => a.age - b.age)
// 	const youngest = sortedPeople[0].age
// 	const oldest = sortedPeople[sortedPeople.length - 1].age
// 	return oldest - youngest
// }
// const inputArray: IPerson[] = [
// 	{ name: 'John', age: 13 },
// 	{ name: 'Mark', age: 56 },
// 	{ name: 'Rachel', age: 45 },
// 	{ name: 'Nate', age: 67 },
// 	{ name: 'Jeniffer', age: 65 }
// ]
// const difference = ageDifference(inputArray)
// console.log(`Eng yosh va eng qari shaxslar ortasidagi yosh farqi: ${difference}`)


// ------------------- 8. -------------------
// function minManWord(text: string): { minWord: string, maxWord: string } {
// 	const words: string[] = text.split(" ").filter(Boolean)
// 	if (words.length === 0) {
// 		return { minWord: "", maxWord: "" }; 
// 	}
// 	let minWord: string = words[0]
// 	let maxWord: string = words[0]
// 	for (const word of words) {
// 		if (word.length < minWord.length) {
// 			minWord = word
// 		}
// 		if (word.length > maxWord.length) {
// 			maxWord = word
// 		}
// 	}
// 	return { minWord, maxWord }
// }
// const result = minManWord("Men dasturlash kursida o’qiyman")
// console.log(result); 


// ------------------- 12. -------------------
// function lengthWord(s: string): number {
// 	const words = s.split(' ')
// 	const lastWord = words[words.length - 1]
// 	return lastWord.length
// }
// const str1 = "Hello World"
// const length1 = lengthWord(str1)
// console.log(length1);
// const str2 = "kod yozilyapti men tomondan"
// const length2 = lengthWord(str2)
// console.log(length2); 
// const str3 = "singleWord"
// const length3 = lengthWord(str3)
// console.log(length3)


// ------------------- 13. -------------------
// function objectToStringArray(obj: Record<string, any>): string[] {
// 	return Object.entries(obj).map(([key, value]) => (`${ key }: ${ value }`))
// }
// const exampleObject = {
// 	name: "Alice",
// 	age: 30,
// 	city: "Russia"
// }
// const stringArray = objectToStringArray(exampleObject)
// console.log(stringArray);


// ------------------- 14. -------------------
// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
// 	const mergedArray = nums1.concat(nums2).sort((a, b) => a - b)
// 	const len = mergedArray.length
// 	const mid = Math.floor(len / 2)
// 	if (len % 2 === 0) {
// 		return (mergedArray[mid - 1] + mergedArray[mid]) / 2
// 	} else { 
// 		return mergedArray[mid]
// 	}
// }
// const nums1: number[] = [1, 2]
// const nums2: number[] = [3, 4]
// const result: number = findMedianSortedArrays(nums1, nums2)
// console.log(result);