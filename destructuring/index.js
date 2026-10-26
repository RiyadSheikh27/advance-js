const task = { id: 1, title: "Buy groceries", is_done: false };

// ছাড়া: 
const title1 = task.title;
const isDone1 = task.is_done;

// দিয়ে: নাম মিলিয়ে বের করা হয়
const { title, is_done } = task;

// নাম বদলাতে চাইলে
const { is_done: isDone } = task;

// ডিফল্ট মান
const { priority = "normal" } = task; // task-এ priority নেই, তাই "normal"

// Array destructuring: নাম নয়, অবস্থান (ক্রম) অনুযায়ী
const [first, second] = ["a", "b", "c"]; // first="a", second="b"

// Function-এর parameter-এই destructure করা যায়, React props-এ এটা সবসময় দেখবেন
const showTask = ({ id, title }) => `#${id}: ${title}`;
console.log(showTask(task)); // #1: Buy groceries