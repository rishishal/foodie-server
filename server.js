const express = require("express");
const cors = require("cors");
const fetch = require("cross-fetch");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// For Restaurant API
app.get("/api/restaurants", async (req, res) => {
  const { lat, lng, page_type } = req.query;
  console.log(req.query);

  const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=${page_type}`;

  await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred");
    });
});

// For Menu API
app.get("/api/menu", async (req, res) => {
  const {
    "page-type": page_type,
    "complete-menu": complete_menu,
    lat,
    lng,
    submitAction,
    restaurantId,
  } = req.query;
  console.log(req.query);

  const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`;

  await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred");
    });
});

// For suggestion API
app.get("/api/suggestion", async (req, res) => {
  const {
    "page-type": page_type,
    "complete-menu": complete_menu,
    lat,
    lng,
    searchQuery,
  } = req.query;
  console.log(req.query);

  const url = `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${lat}&lng=${lng}&str=${searchQuery}&trackingId=undefined`;

  await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred");
    });
});

// For search Query API
app.get("/api/search", async (req, res) => {
  const {
    "page-type": page_type,
    "complete-menu": complete_menu,
    lat,
    lng,
    query,
  } = req.query;
  console.log(req.query);

  const url = `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${query}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=bd52aa24-315d-fdcb-661a-6eba3e1ad819&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22dyhqamt6bjfjwm4pkbat%22%2C%22dishFamilyId%22%3A%22846627%22%2C%22dishFamilyIds%22%3A%5B%22846627%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`;

  await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred");
    });
});

app.get("/", (req, res) => {
  res.json({
    test: "Welcome to FoodFire! - See Live Web URL for this Server - https://foodfire-app.netlify.app",
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
