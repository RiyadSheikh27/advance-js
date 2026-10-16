# React-এর জন্য JavaScript — বাংলা গাইড

---

## ১. Arrow Function

### Plain JavaScript
```js
// পুরনো style
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// একটাই parameter হলে bracket লাগে না
const double = n => n * 2;

// body বড় হলে {} এবং return লাগে
const greet = (name) => {
  const msg = "হ্যালো " + name;
  return msg;
};
```

### React-এ কীভাবে ব্যবহার হয়
```jsx
// Component নিজেই arrow function
const UserCard = ({ name }) => {
  return <h1>{name}</h1>;
};

// Event handler
const Button = () => {
  const handleClick = () => {
    console.log("ক্লিক হয়েছে");
  };

  return <button onClick={handleClick}>ক্লিক করো</button>;
};

// map-এর ভেতরে
const List = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);
```

---

## ২. Destructuring

### Plain JavaScript
```js
// Object destructuring
const user = { name: "রাহেলা", age: 25, city: "ঢাকা" };

// আগে এভাবে করতে হতো
const name = user.name;
const age = user.age;

// এখন এভাবে করা যায়
const { name, age } = user;

// নাম বদলে নেওয়া
const { name: userName, age: userAge } = user;

// default value
const { name, role = "user" } = user; // role না থাকলে "user" হবে

// Array destructuring
const colors = ["লাল", "নীল", "সবুজ"];
const [first, second] = colors;
// first = "লাল", second = "নীল"

// প্রথমটা skip করতে
const [, second, third] = colors;
```

### React-এ কীভাবে ব্যবহার হয়
```jsx
// Props destructuring — সবচেয়ে বেশি ব্যবহার
const UserCard = ({ name, age, role = "user" }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{role}</p>
    </div>
  );
};

// useState-এ array destructuring
const [count, setCount] = useState(0);
const [loading, setLoading] = useState(false);
const [company, setCompany] = useState("");

// তোমার কোডে এভাবে ছিল
const { startDate, endDate } = action?.payload;
```

---

## ৩. Spread Operator (`...`)

### Plain JavaScript
```js
// Object spread — আগের সব রেখে নতুন কিছু যোগ বা বদলাও
const user = { name: "করিম", age: 25 };
const updatedUser = { ...user, age: 26 }; // age বদলালো, name থাকলো

// Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// নতুন item শুরুতে যোগ
const newArr = [0, ...arr1]; // [0, 1, 2, 3]
```

### React-এ কীভাবে ব্যবহার হয়
```jsx
// Redux reducer-এ — সবচেয়ে গুরুত্বপূর্ণ
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,        // আগের সব state রাখো
        loading: true,   // শুধু loading বদলাও
      };

    case "ADD_ITEM":
      return {
        ...state,
        items: [action.data, ...state.items], // নতুন item শুরুতে যোগ
      };
  }
};

// Props পাঠানোর সময়
const userProps = { name: "করিম", age: 25 };
return <UserCard {...userProps} />;
// মানে: <UserCard name="করিম" age={25} />
```

---

## ৪. Array Methods

### `map` — প্রতিটা item বদলে নতুন array বানাও

```js
// Plain JS
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // [2, 4, 6]

const users = [
  { id: 1, name: "করিম" },
  { id: 2, name: "রহিম" },
];
const names = users.map(user => user.name); // ["করিম", "রহিম"]
```

```jsx
// React-এ — list render করতে
const UserList = ({ users }) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>  // key দিতে হবে
    ))}
  </ul>
);

// তোমার কোডে এভাবে ছিল
const updatedSchedulers = state.scheduler.map((item) => {
  if (item.id === updatedScheduler.id) {
    return updatedScheduler; // এটা বদলাও
  }
  return item; // বাকিগুলো যেমন আছে
});
```

### `filter` — condition অনুযায়ী বাদ দাও

```js
// Plain JS
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

const users = [
  { id: 1, name: "করিম", active: true },
  { id: 2, name: "রহিম", active: false },
];
const activeUsers = users.filter(user => user.active);
// [{ id: 1, name: "করিম", active: true }]
```

```jsx
// React-এ — delete করার পর state আপডেট
case "DELETE_ITEM":
  return {
    ...state,
    items: state.items.filter(item => item.id !== action.id),
    // যে id মুছতে চাই সেটা বাদ দিয়ে বাকি সব রাখো
  };

// তোমার কোডে .filter(Boolean) এভাবে ছিল
[
  userRole.includes("view_user") && ITEMS.user,  // true হলে ITEMS.user, false হলে false
  userRole.includes("view_group") && ITEMS.roles,
].filter(Boolean) // false গুলো বাদ দাও
```

### `find` — প্রথম match খোঁজো

```js
const users = [
  { id: 1, name: "করিম" },
  { id: 2, name: "রহিম" },
];
const user = users.find(u => u.id === 2);
// { id: 2, name: "রহিম" }
```

```jsx
// React-এ — নির্দিষ্ট item খুঁজে edit করতে
const selectedUser = users.find(u => u.id === selectedId);
```

### `some` ও `every`

```js
const numbers = [1, 2, 3, 4, 5];

numbers.some(n => n > 4);  // true — কোনো একটা > 4?
numbers.every(n => n > 0); // true — সবগুলো > 0?
```

```jsx
// তোমার কোডে এভাবে ছিল
const hasErrors =
  error?.response?.data?.errors &&
  Object.keys(error.response.data.errors).length > 0;
```

---

## ৫. Template Literals

### Plain JavaScript
```js
const name = "করিম";
const age = 25;

// আগে
const msg = "আমার নাম " + name + " এবং বয়স " + age;

// এখন
const msg = `আমার নাম ${name} এবং বয়স ${age}`;

// ভেতরে expression চলে
const msg = `২ + ২ = ${2 + 2}`;
const msg = `${isAdmin ? "Admin" : "User"}`;
```

### React-এ কীভাবে ব্যবহার হয়
```jsx
// className dynamic করতে
const Button = ({ active }) => (
  <button className={`btn ${active ? "btn-active" : "btn-default"}`}>
    ক্লিক করো
  </button>
);

// API URL বানাতে
const url = `https://api.example.com/users/${userId}/posts`;
```

---

## ৬. Optional Chaining (`?.`)

### Plain JavaScript
```js
const user = { address: { city: "ঢাকা" } };

// আগে এভাবে করতে হতো — নইলে error
if (user && user.address && user.address.city) {
  console.log(user.address.city);
}

// এখন
console.log(user?.address?.city); // "ঢাকা"
console.log(user?.phone?.number); // undefined — error না
```

### React-এ কীভাবে ব্যবহার হয়
```jsx
// তোমার কোডে এভাবে ছিল
const { startDate, endDate } = action?.payload;
// payload না থাকলে error না, undefined হবে

const error = error?.response?.data?.error;
// chain-এর যেকোনো জায়গায় undefined হলে stop করবে

// Component-এ
const UserCard = ({ user }) => (
  <div>
    <p>{user?.name}</p>
    <p>{user?.address?.city}</p>
  </div>
);
```

---

## ৭. Short Circuit (`&&` এবং `||`)

### Plain JavaScript
```js
// && — প্রথমটা true হলে দ্বিতীয়টা return করে
true && "হ্যালো"   // "হ্যালো"
false && "হ্যালো"  // false

// || — প্রথমটা falsy হলে দ্বিতীয়টা return করে
null || "default"      // "default"
"করিম" || "default"   // "করিম"
```

### React-এ কীভাবে ব্যবহার হয়
```jsx
// && দিয়ে conditional render — সবচেয়ে বেশি ব্যবহার
const Dashboard = ({ isAdmin, userRole }) => (
  <div>
    {isAdmin && <AdminPanel />}  // isAdmin true হলেই দেখাবে

    {userRole.includes("view_user") && (
      <Link to="/app/user">User</Link>
    )}

    {FeatureToggle("bank_book") &&
      userRole.includes("view_chartofaccount") && (
        <Link to="/app/bank-book">Bank Book</Link>
      )}
  </div>
);

// || দিয়ে default value
const userRole = localStorage.getItem("user_role") || "";
const name = user.name || "অজ্ঞাত";
```

---

## ৮. Ternary Operator (`? :`)

### Plain JavaScript
```js
// condition ? true হলে : false হলে
const age = 20;
const status = age >= 18 ? "প্রাপ্তবয়স্ক" : "অপ্রাপ্তবয়স্ক";
```

### React-এ কীভাবে ব্যবহার হয়
```jsx
// দুটো আলাদা UI দেখানোর সময়
const UserSettings = () => {
  return (
    <>
      {path.pathname === "/app" ? (
        <div>Settings List</div>  // /app হলে এটা
      ) : (
        <Outlet />                // অন্য URL হলে এটা
      )}
    </>
  );
};

// loading state
const Page = ({ loading, data }) => (
  <div>
    {loading ? <Spinner /> : <DataTable data={data} />}
  </div>
);

// className বদলাতে
<div className={isActive ? "active" : "inactive"}>...</div>
```

---

## ৯. Module (import / export)

### Plain JavaScript
```js
// named export — একই ফাইলে অনেকগুলো
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const PI = 3.14;

// default export — একটা ফাইলে একটাই
const Calculator = () => { ... };
export default Calculator;
```

```js
// named import — {} লাগে
import { add, subtract } from "./math";

// default import — {} লাগে না, যেকোনো নাম দেওয়া যায়
import Calculator from "./Calculator";
import Calc from "./Calculator"; // এটাও কাজ করবে

// দুটো একসাথে
import Calculator, { PI } from "./Calculator";
```

### React-এ কীভাবে ব্যবহার হয়
```jsx
// তোমার কোডে এভাবে ছিল

// named export
export const FeatureToggle = (featureName) => { ... };
// named import
import { FeatureToggle } from "../../components/utils/featureToggle";

// default export
export default UserSettings;
// default import
import UserSettings from "./UserSettings";

// Redux action — named export
export const getFlightPreview = (startDate, endDate) => ({ ... });
export const getScheduler = () => ({ ... });
// import
import { getFlightPreview, getScheduler } from "./action";
```

---

## ১০. Promise / Async-Await

### Plain JavaScript
```js
// Promise — ভবিষ্যতে কিছু হবে
fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Async-Await — একই কাজ, পড়তে সহজ
const getUsers = async () => {
  try {
    const response = await fetch("https://api.example.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
```

### React-এ কীভাবে ব্যবহার হয়
```jsx
// useEffect-এ API call
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
};

// Redux Saga-তে (তোমার কোডে)
function* getFlightPreview(action) {
  try {
    const response = yield call(getFlightPreviewApi, startDate, endDate);
    // yield call = async/await এর মতোই, Saga-র নিজস্ব syntax
    yield put({ type: "GET_FLIGHT_PREVIEW_SUCCESS", data: response.data });
  } catch (error) {
    yield put({ type: "GET_FLIGHT_PREVIEW_FAILED", error: error });
  }
}
```

---

## ১১. Object — OOP

### Plain JavaScript
```js
// Object literal — সবচেয়ে বেশি ব্যবহার
const user = {
  name: "করিম",
  age: 25,
  greet() {
    return `আমি ${this.name}`;
  },
};

user.greet(); // "আমি করিম"

// Object methods
const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj);    // ["a", "b", "c"] — keys array
Object.values(obj);  // [1, 2, 3] — values array
Object.entries(obj); // [["a",1], ["b",2], ["c",3]]
```

### React-এ কীভাবে ব্যবহার হয়
```jsx
// তোমার কোডে ITEMS object
const ITEMS = {
  settings: {
    to: "/app/company_settings",
    title: "Settings",
    icon: <SettingOutlined />,
  },
  user: {
    to: "/app/user",
    title: "User",
    icon: <UserOutlined />,
  },
};

// ব্যবহার
<Link to={ITEMS.settings.to}>{ITEMS.settings.title}</Link>

// Redux state-ও একটা object
const INIT_STATE = {
  flight_previews: [],
  loading: false,
  error: null,
};

// Object.keys ব্যবহার
const hasErrors = Object.keys(error.response.data.errors).length > 0;
```

---

## ১২. Class — OOP

### Plain JavaScript
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} শব্দ করে`;
  }
}

// Inheritance — extends
class Dog extends Animal {
  speak() {
    return `${this.name} ঘেউ ঘেউ করে`;
  }
}

const dog = new Dog("টমি");
dog.speak(); // "টমি ঘেউ ঘেউ করে"
```

### React-এ Class Component (পুরনো style)
```jsx
// আগে React-এ Class দিয়ে Component বানাতো
class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
```

### এখন Function Component (নতুন style) — React-এ এটাই ব্যবহার হয়
```jsx
// Class-এর বদলে এখন Function + Hooks ব্যবহার হয়
const UserCard = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{name}</h1>
      <p>{count}</p>
    </div>
  );
};
```

> **কেন Class এখন কম ব্যবহার হয়?**
> React 2019 সালে Hooks আনার পর Function Component দিয়েই সব কাজ করা যায়।
> Class-এ `this` নিয়ে confusion হতো। Function Component সহজ এবং কম code।
> তোমার কোডবেসেও সব Function Component।

---

## সব মিলিয়ে — React-এ সবচেয়ে বেশি যেগুলো লাগে

| Concept | React-এ কোথায় লাগে |
|---|---|
| Arrow Function | Component, event handler, map/filter |
| Destructuring | Props নেওয়া, useState, object থেকে value |
| Spread (`...`) | Redux state আপডেট, props পাঠানো |
| `map` | List render করা |
| `filter` | Item delete, conditional list |
| Optional Chaining `?.` | API response, nested object |
| `&&` | Conditional render |
| `? :` | দুটো UI-এর মধ্যে switch |
| import/export | সব ফাইলে |
| async/await | API call |
| Object | State, ITEMS, config |
| Class | পুরনো code-এ দেখবে, নিজে লিখবে না |