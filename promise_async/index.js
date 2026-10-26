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