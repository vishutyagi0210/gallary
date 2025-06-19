
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
      image1: "https://imgs.search.brave.com/luiEJ7cKCnVJUKbYmvf37aoE0sk91QaNyMGiXLMUdag/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW50ZXJlc3Rp/bmdlbmdpbmVlcmlu/Zy5jb20vaW1nL2ll/YS9NUnc0eVBQRE8x/L2NlbGxwaG9uZWhv/bGRlcmllLmpwZw",
      image2: "https://imgs.search.brave.com/luiEJ7cKCnVJUKbYmvf37aoE0sk91QaNyMGiXLMUdag/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW50ZXJlc3Rp/bmdlbmdpbmVlcmlu/Zy5jb20vaW1nL2ll/YS9NUnc0eVBQRE8x/L2NlbGxwaG9uZWhv/bGRlcmllLmpwZw",
      image3: "https://imgs.search.brave.com/Q3zzG2VJkBdQ6N4BnbPlDzVPTWu8J2aBsUBxSWdD7Bs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFEd1Rua205cFMu/anBn",
      image4: "https://imgs.search.brave.com/PX5-TDdKOFTpDzmZk28RNKaBdbGFGVMEnOEegOmAmxc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW50ZXJlc3Rp/bmdlbmdpbmVlcmlu/Zy5jb20vaW1nL2ll/YS9NUnc0eVBQRE8x/L2dlYXJiZWFzdC1j/ZWxscGhvbmUtbGFu/eWFyZC5qcGc",
    },
    tags: {
      tag1: "gadget-1",
      tag2: "gadget-2",
      tag3: "gadget-3",
      tag4: "gadget-4"
    }
  },
    {
    title: "Mobiles",
    images: {
      image1: "https://imgs.search.brave.com/YmEtN5ucVm6AYAlmlPDyRTl66JmeTxbuadl1XSjWsio/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzM0LzEzLzU4/LzM2MF9GXzM0MTM1/ODIyX1RNYVFlT1E5/YVZwRG1WM0lQWHZD/SDNmdWlsakE4VlpT/LmpwZw",
      image2: "https://imgs.search.brave.com/vB9nK4eM7wX2jP8fR5uA3qG6hL1cT0yI9bN4oE5dU8V/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIz/NDU2Nzg5MC9waG90/by9vbmVwbHVzLTEx/LXByby5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9czRPZVBh/RjlQa0RqU0xOYkxX/Zkp3cXhsNFFMRko3/aDN6S3JnTzVkbnFz/PQ",
      image3: "https://imgs.search.brave.com/7o26fcugiC8SETZ_ShwNjaI9atoOAcrFwHa_p8S3SQU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzMwLzg0Lzkw/LzM2MF9GXzMwODQ5/MDQ1X2RqbktqckNo/VW1udTdCZ0RKZXl6/TTNnRVR0ZFZoalFC/LmpwZw",
      image4: "https://imgs.search.brave.com/N1hBI_HQLlQh0YqOlSi5rrZg23XVwb9U5GY_wD0NciU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMzc0/NzE0Mi9wZXhlbHMt/cGhvdG8tMzc0NzE0/Mi5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA"
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
      image1: "https://imgs.search.brave.com/y2OW85a7zQbwGt1FesNEp1WILusJH2WmcIkKh6tqGQk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/bWVkaWEudGVzdGJv/b2suY29tL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDcvZnJlZWRvbS1m/aWdodGVycy1vZi1p/bmRpYV8xNC04ZTI5/YTJmMy5wbmc",
      image2: "https://imgs.search.brave.com/ibh2uxzvfP34-OYB604APN4SOmLnYZ6GNjjUrBzwXVE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDIzLzUv/MzExODk2MjUzL01V/L05ZL0NWLzI2OTU0/NzM1L2ZyZWVkb20t/ZmlnaHRlcnMtcGhv/dG8tZnJhbWUtMTAw/MHgxMDAwLmpwZWc",
      image3: "https://imgs.search.brave.com/WvpU6SyPmArXUpmqO_teiElM-aYGH-d1iIPiA7T1NCo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDIzLzUv/MzExODgxODA3L09X/L1NOL1FXLzI2OTU0/NzM1L2ZyZWVkb20t/ZmlnaHRlcnMtcGhv/dG8tZnJhbWUtMTAw/MHgxMDAwLmpwZWc",
      image4: "https://imgs.search.brave.com/IC_8kGY_bg8httuzS0QdO8-n-5BiofVaIloXxoDm0xc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdC5h/ZGRhMjQ3LmNvbS9o/dHRwczovL3d3dy5h/ZGRhMjQ3LmNvbS9q/b2JzL3dwLWNvbnRl/bnQvdXBsb2Fkcy9z/aXRlcy8yLzIwMjIv/MDgvMTIxNTM1NTUv/aW1hZ2VzLTcuanBl/Zw",
    },
    tags: {
      tag1: "freedom-fighter-1",
      tag2: "freedom-fighter-2",
      tag3: "freedom-fighter-3",
      tag4: "freedom-fighter-4"
    }
  },
  {
    title: "Indian Sports Man",
    images: {
      image1: "https://imgs.search.brave.com/EJbaQl1tHzhlctjDhAQHwaFbEtJ_CuG3UEUhtyXwXVs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/b2x5bXBpY3MuY29t/L2ltYWdlcy9pbWFn/ZS9wcml2YXRlL3Rf/c18xNl85X2dfYXV0/by90X3Nfdzk2MC9m/X2F1dG8vcHJpbWFy/eS93d3h2MnFjcG11/M3dubGxxeHlncQ.jpeg",
      image2: "https://imgs.search.brave.com/seFgboPBQa-cqMBBJPzHmuKG45Z_0k8_4m61r_CrER8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lbi1t/ZWRpYS50aGViZXR0/ZXJpbmRpYS5jb20v/dXBsb2Fkcy8yMDIz/LzA0L1VudGl0bGVk/LWRlc2lnbi0yMDIz/LTA0LTExVDE5MjQw/NC43MjgtMTY4MTIy/MTI2NS5qcGc",
      image3: "https://imgs.search.brave.com/LtUYNsQpoM7hwSW_Hf8Ju78hBJEMX4737kkUV8qDutU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzhjL0R1dGVlX0No/YW5kLmpwZw",
      image4: "https://imgs.search.brave.com/iFKGqFJoq40zcA9GO_BsDcLxADFKNXg_wMvZP3zIX14/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW5kaWFuZXhw/cmVzcy5jb20vMjAx/OS8wOC9kZWVwYWst/cHVuaWEtMTIwMC5q/cGc",
    },
    tags: {
      tag1: "indian-sports-1",
      tag2: "indian-sports-2",
      tag3: "indian-sports-3",
      tag4: "indian-sports-4"
    }
  },
  {
    title: "Indian Cricketers",
    images: {
      image1: "https://imgs.search.brave.com/DzEdb7HxSXTuCXdl8PhK_y9U_zi8XKVyaEIODztsT-o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHBvaW50dGVj/aC5jb20vdG9wMTAt/dGVjaG5vbG9naWVz/L2ltYWdlcy90b3At/MTAtaW5kaWFuLWNy/aWNrZXRlcnMyLnBu/Zw",
      image2: "https://imgs.search.brave.com/EBe57k7med6Ihxv4eRsMV1Xl2gIb4HizI3l1l28daRg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHBvaW50dGVj/aC5jb20vdG9wMTAt/dGVjaG5vbG9naWVz/L2ltYWdlcy90b3At/MTAtaW5kaWFuLWNy/aWNrZXRlcnM4LnBu/Zw",
      image3: "https://imgs.search.brave.com/DnN3CY_c8sIFXSV6GZUQe1xcWCRe0FwgYC4Z6InmQTI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHBvaW50dGVj/aC5jb20vdG9wMTAt/dGVjaG5vbG9naWVz/L2ltYWdlcy90b3At/MTAtaW5kaWFuLWNy/aWNrZXRlcnM5LnBu/Zw",
      image4: "https://imgs.search.brave.com/eQh7r0piy4IryNYFRibFeyCvBPrpF3ln8s_lxb5kkeM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvaW5k/aWFuLWNyaWNrZXQt/cGxheWVyLXl1dnJh/ai1zaW5naC00Zmcx/MzA0eXdlM3M3dHkz/LmpwZw",
    },
    tags: {
      tag1: "indian-cricketers-1",
      tag2: "indian-cricketers-2",
      tag3: "indian-cricketers-3",
      tag4: "indian-cricketers-4"
    }
  },
  {
    title: "Politicians",
    images: {
      image1: "https://imgs.search.brave.com/eTuTCevXn0EmDkN63pb5k7NERYvGFJKXw9HKJyaD41A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/OTU0NTk4L3Bob3Rv/L3lvdW5nLWJ1c25l/c3NtYW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXc3cUtq/X1ltTWQ0c3UxcXI4/TEFxdWM1ZlRmWmU4/SUdhRDR2YUhub0RU/OTg9",
      image2: "https://imgs.search.brave.com/_NX8dYIPTtz0KSZJtzezVpq86z8_lHAg5HCUsikObn4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcy/MTQyNzM2L3Bob3Rv/L3BvbGl0aWNhbC1j/b25mbGljdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cmVq/ZGh2cnRVOXFNQlN1/ZDBIWmtGaUNBMFpH/TXFuRnlZS0QtemE5/MllGMD0",
      image3: "https://imgs.search.brave.com/4GRUkq3axXG_NyL-rNuDxUFoOlFU2IVzGNVU_lproj8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA4LzE4Lzk0/LzM2MF9GXzUwODE4/OTQwMF9zNVZPUmFO/T3BFVlVSQ29qd2g3/YzBhcHJRWWhLTXpD/cC5qcGc",
      image4: "https://imgs.search.brave.com/uk7snrSrjQLP-FGpbJD8MF6ljpNTdUWK38GgqWQfCRY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9zaWxob3Vl/dHRlLXVrLXBvbGl0/aWNpYW4tcG9pbnRp/bmctYWlyLTI2MG53/LTI0ODM0NzQ5NzMu/anBn",
    },
    tags: {
      tag1: "politicians-1",
      tag2: "politicians-2",
      tag3: "politicians-3",
      tag4: "politicians-4"
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

