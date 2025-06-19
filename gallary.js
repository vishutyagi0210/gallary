
var data = [
   {
    title: "Cars",
    images: {
      image1: "https://imgs.search.brave.com/J0WkKTahWw3I-9mXDx9W6hY5531SSiEhjo5E2sikOOU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjMv/OTc5Lzk1MS9zbWFs/bC9jbG9zZS11cC1v/Zi1hLWF1dG8tYm9k/eS1tZWNoYW5pYy1i/dWZmaW5nLWEtc2Ny/YXRjaC1vbi1zcG9y/dHMtY2FyLXBob3Rv/LmpwZw",
      image2: "https://imgs.search.brave.com/WKrs-4KUi5-sUZwA084woWzMQ2nk6B4imes7lIgAQ4g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTYx/OTM4NzA5NS92ZWN0/b3IveWVsbG93LWNh/ci1yZXRyby12aW50/YWdlLW1vZGVsLTNk/LWlsbHVzdHJhdGlv/bi1jYXJ0b29uLXN0/eWxlLWN1dGUtdmVo/aWNsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9OTZfZm1S/N1hZTDBoeVVJQjYw/clNjRkZXRmUxT19Y/cWo4QXhWWkJ1UHct/UT0",
      image3: "https://imgs.search.brave.com/1HILVFxR4m1ryzvIwlFF-c4Dmx5HZG3ryX62thxtnoU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDcv/MTg1LzU5MC9zbWFs/bC9ibXctbTQtY2Fy/LTNkLXJlbmRlci1p/bWFnZS1mcmVlLXBo/b3RvLmpwZw",
      image4: "https://imgs.search.brave.com/GObv6YdVqH474mk8teXiFxtUEpaL4zGd399HMNTaQYk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/Mzg2LzgyOS9zbWFs/bC9ibGFjay1tb2Rl/cm4tY2FyLWhlYWRs/aWdodHMtZnJvbnQt/dmlldy1jcmVhdGVk/LXdpdGgtZ2VuZXJh/dGl2ZS1haS1waG90/by5qcGc",
    },
    tags: {
      tag1: "BMW",
      tag2: "Mercedes",
      tag3: "Toyota",
      tag4: "Honda"
    }
  },
   {
    title: "Bikes",
    images: {
      image1: "https://imgs.search.brave.com/dbw6lcOXkibPJEix4Uo952XwnCEV52LoHk8_ESXIIoA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY1/OTIwNzIwL3ZlY3Rv/ci9iaWtlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Y3N2/dFVVZDlIZG54OFo3/dFcxaFY4bFRxS0tY/czBZT1Q2ZVhNaGJO/MzAtZz0",
      image2: "https://imgs.search.brave.com/nQR4Dky7vn-31nmkOTxdTzAWcLqyAk0ssWWUeBiI_UY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTgx/MDk3OTI0L3Bob3Rv/L21hbi1vbi1tb3Rv/cmJpa2UtcmlkaW5n/LW9uLXJvYWRzaWRl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz15Q2RGQzUwdFRO/ZXp4Y3FxWnpqbXZQ/Q3UzLW5FLWV5VnhR/QjBjQVpFNUlRPQ",
      image3: "https://imgs.search.brave.com/c20C0wbnjNQcybebXA_EC0dq1QdkpQ6jvkBlE6ROX9w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTQ2/NDQxNjc4L3Bob3Rv/L21vcGVkLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1hUlRf/Ynl2R3RFNm5MQWxt/NHBxQ2FGdUltZW9H/VE55U3IxQ2JZSTZW/eVZBPQ",
      image4: "https://imgs.search.brave.com/8F1qrpzZAqUNQhjJpEHGsZD3hClcTzVEy1sabieEzUg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDYv/MjIwLzkyOC9zbWFs/bC9hbi1hdHRyYWN0/aXZlLXNleHktZ2ly/bC1vbi1hLXNwb3J0/cy1tb3RvcmJpa2Ut/cG9zaW5nLW91dHNp/ZGUtcGhvdG8uanBn",
    },
    tags: {
      tag1: "Harley-Davidson",
      tag2: "Yamaha",
      tag3: "Honda",
      tag4: "Kawasaki"
    }
  },
  {
    title: "Gadgets",
    images: {
      image1: "url",
      image2: "url",
      image3: "url",
      image4: "url",
    },
    tags: {
      tag1: "car-1",
      tag2: "car-2",
      tag3: "tag-3",
      tag4: "tag-4"
    }
  },
    {
    title: "Mobiles",
    images: {
      image1: "https://imgs.search.brave.com/kL8wP4eN9mX2jF7fR5uA3qG6hT1cZ0yI9bN4oE5dU8V/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEy/MzQ1Njc4OS9waG90/by9pcGhvbmUtMTQt/cHJvLW1heC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9czRP/ZVBhRjlQa0RqU0xO/YkxXZkp3cXhsNFFM/Rko3aDN6S3JnTzVk/bnFzPQ",
      image2: "https://imgs.search.brave.com/nX8vP1wR9mK4bL2aE5uT6fG7hS3cQ0jI8yA9zN4eO5V/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIz/NDU2Nzg5MC9waG90/by9zYW1zdW5nLWdh/bGF4eS1zMjMtdWx0/cmEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXM0T2VQYUY5/UGtEalNMTmJMV2ZK/d3F4bDRRTEZKN2gz/ektcZ081ZG5xcz0",
      image3: "https://imgs.search.brave.com/lK7dR2pW8hF9nM1xE4vT5gP6qS0cZ3jY9bN8oA4eU1I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/NTQ5MjU5Ni9waG90/by9nbG9vZ2xlLXBp/eGVsLTctcHJvLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1G/a1JnRmt0SlhYQktZ/dEJUZXNmbUpxQUVs/cG9xRjdSV2RKM0Z5/MEdoeG5rPQ",
      image4: "https://imgs.search.brave.com/vB9nK4eM7wX2jP8fR5uA3qG6hL1cT0yI9bN4oE5dU8V/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIz/NDU2Nzg5MC9waG90/by9vbmVwbHVzLTEx/LXByby5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9czRPZVBh/RjlQa0RqU0xOYkxX/Zkp3cXhsNFFMRko3/aDN6S3JnTzVkbnFz/PQ",
    },
    tags: {
      tag1: "Apple",
      tag2: "Samsung",
      tag3: "Google",
      tag4: "OnePlus"
    }
  },
  {
    title: "Freedom fighters",
    images: {
      image1: "url",
      image2: "url",
      image3: "url",
      image4: "url",
    },
    tags: {
      tag1: "car-1",
      tag2: "car-2",
      tag3: "tag-3",
      tag4: "tag-4"
    }
  },
  {
    title: "Indian Sports Man",
    images: {
      image1: "url",
      image2: "url",
      image3: "url",
      image4: "url",
    },
    tags: {
      tag1: "car-1",
      tag2: "car-2",
      tag3: "tag-3",
      tag4: "tag-4"
    }
  },
  {
    title: "Indian Cricketers",
    images: {
      image1: "url",
      image2: "url",
      image3: "url",
      image4: "url",
    },
    tags: {
      tag1: "car-1",
      tag2: "car-2",
      tag3: "tag-3",
      tag4: "tag-4"
    }
  },
  {
    title: "Politicians",
    images: {
      image1: "url",
      image2: "url",
      image3: "url",
      image4: "url",
    },
    tags: {
      tag1: "car-1",
      tag2: "car-2",
      tag3: "tag-3",
      tag4: "tag-4"
    }
  },
  {
    title: "Famous Place of World",
    images: {
      image1: "url",
      image2: "url",
      image3: "url",
      image4: "url",
    },
    tags: {
      tag1: "car-1",
      tag2: "car-2",
      tag3: "tag-3",
      tag4: "tag-4"
    }
  },
  {
    title: "Famout Place of India",
    images: {
      image1: "url",
      image2: "url",
      image3: "url",
      image4: "url",
    },
    tags: {
      tag1: "car-1",
      tag2: "car-2",
      tag3: "tag-3",
      tag4: "tag-4"
    }
  },
  {
    title: "Famout Food",
    images: {
      image1: "url",
      image2: "url",
      image3: "url",
      image4: "url",
    },
    tags: {
      tag1: "car-1",
      tag2: "car-2",
      tag3: "tag-3",
      tag4: "tag-4"
    }
  },
  {
    title: "Friends",
    images: {
      image1: "url",
      image2: "url",
      image3: "url",
      image4: "url",
    },
    tags: {
      tag1: "car-1",
      tag2: "car-2",
      tag3: "tag-3",
      tag4: "tag-4"
    }
  },
  {
    title: "Pet",
    images: {
      image1: "url",
      image2: "url",
      image3: "url",
      image4: "url",
    },
    tags: {
      tag1: "car-1",
      tag2: "car-2",
      tag3: "tag-3",
      tag4: "tag-4"
    }
  },
  {
    title: "Myself",
    images: {
      image1: "url",
      image2: "url",
      image3: "url",
      image4: "url",
    },
    tags: {
      tag1: "car-1",
      tag2: "car-2",
      tag3: "tag-3",
      tag4: "tag-4"
    }
  },
];


class ImageInflator {
  constructor(data, imageContainer) {
    this.data = data;
    this.imageContainer = imageContainer;
    this.init();
  }

  init() {
    this.inflateImages();
  }

  inflateImages() {
    this.data.forEach((dta) => {
      this.imageContainer.innerHTML += 
        `           
            <h1>${dta.title}</h1>
            <div id="images">
                <img src="${dta.images.image1}" alt="not found" title="${dta.tags.tag1}">
                <img src="${dta.images.image2}" alt="not found" title="${dta.tags.tag2}">
                <img src="${dta.images.image3}" alt="not found" title="${dta.tags.tag3}">
                <img src="${dta.images.image4}" alt="not found" title="${dta.tags.tag4}">
            </div>
        `
    });
  }
}

var imageContainer = document.querySelector("#image-container");

var images = new ImageInflator(data , imageContainer);

