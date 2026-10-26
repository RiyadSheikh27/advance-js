const task = { id: 1, title: "Old", is_done: false };

// Spread: অবজেক্ট/array "ছড়িয়ে" নতুন একটা কপি বানানো
const updated = { ...task, title: "New" };
// { id: 1, title: "New", is_done: false }  ← পরেরটা আগেরটাকে ওভাররাইট করে
console.log(task.title); // এখনও "Old": মূল অবজেক্ট অক্ষত

const a = [1, 2, 3];
const b = [...a, 4]; // [1, 2, 3, 4]

// Rest: বাকি সবগুলো এক জায়গায় জড়ো করা
const { id, ...others } = task; // others = { title: "Old", is_done: false }