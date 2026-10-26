JavaScript একটা কাজ চলার সময় আটকে থাকে না। নেটওয়ার্কে অনুরোধ পাঠিয়ে সে অপেক্ষা না করে অন্য কাজ চালিয়ে যায়। উত্তর এলে তখন বাকি কাজ করে। এই "ভবিষ্যতে আসবে" ধরনের মানকে বলে Promise (প্রতিশ্রুতি)। এর তিনটি অবস্থা: pending (অপেক্ষমাণ), fulfilled (সফল) ও rejected (ব্যর্থ)।

```js
// একটা নকল API: ১ সেকেন্ড পরে ডেটা দেয় (যেন নেটওয়ার্ক)
const fakeFetchTask = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 404) reject(new Error("Not found."));
      else resolve({ id, title: "Buy groceries" });
    }, 1000);
  });

// পুরনো ধরন: .then / .catch (চেইন)
fakeFetchTask(1)
  .then((task) => console.log("পেলাম:", task))
  .catch((err) => console.log("ব্যর্থ:", err.message));


// আধুনিক ধরন: async/await, দেখতে সাধারণ ক্রমিক কোডের মতো
const loadTask = async (id) => {
  try {
    const task = await fakeFetchTask(id); // এখানে "অপেক্ষা" করে, কিন্তু পুরো প্রোগ্রাম আটকে থাকে না
    console.log("পেলাম:", task);
  } catch (err) {
    console.log("ব্যর্থ:", err.message); // ব্যর্থ হলে এখানে আসে
  } finally {
    console.log("শেষ"); // সফল বা ব্যর্থ, যাই হোক চলে
  }
};

loadTask(1);
loadTask(404);
```

নিয়ম দুটি: await শুধু async function-এর ভেতরে লেখা যায়, আর async function সবসময় একটা Promise ফেরত দেয়।

Python তুলনা: এটা asyncio-র async def / await-এর মতো। পার্থক্য হলো, JavaScript-এ ইভেন্ট লুপ ব্রাউজারেই তৈরি থাকে, আলাদা করে চালাতে হয় না। আমাদের Axios call, thunk আর interceptor সবই এই জিনিসের ওপর দাঁড়িয়ে।

সাধারণ ভুল: await ভুলে যাওয়া। তখন ডেটার বদলে Promise { <pending> } হাতে আসে, আর task.title হয়ে যায় undefined।